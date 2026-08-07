// =============================================
// A1 Quiz App - Main Application
// =============================================

class QuizApp {
    constructor() {
        this.questions = QUESTIONS_DATA;
        this.answers = CORRECT_ANSWERS;
        this.criticalQuestions = CRITICAL_QUESTIONS;
        
        // Study state
        this.studyIndex = 0;
        this.studyQuestions = [...this.questions];
        this.studySelectedAnswer = null;
        this.studyAnswerChecked = false;
        
        // Exam state
        this.examQuestions = [];
        this.examAnswers = {};
        this.examCurrentIndex = 0;
        this.examTimer = null;
        this.examTimeLeft = 19 * 60; // 19 minutes in seconds
        this.examStartTime = null;
        
        // Persistent state
        this.progress = this.loadProgress();
        
        this.init();
    }

    init() {
        this.initParticles();
        this.initNavigation();
        this.initTheme();
        this.updateHomeStats();
        this.renderStudyQuestion();
        this.initKeyboardNav();
    }

    // ============ Particles ============
    initParticles() {
        const container = document.getElementById('particles');
        const count = 30;
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${15 + Math.random() * 25}s`;
            particle.style.animationDelay = `${Math.random() * 15}s`;
            particle.style.width = `${2 + Math.random() * 4}px`;
            particle.style.height = particle.style.width;
            container.appendChild(particle);
        }
    }

    // ============ Theme ============
    initTheme() {
        const saved = localStorage.getItem('a1quiz-theme') || 'dark';
        document.documentElement.setAttribute('data-theme', saved);
        this.updateThemeIcons(saved);
        
        document.getElementById('themeToggle').addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('a1quiz-theme', next);
            this.updateThemeIcons(next);
        });
    }

    updateThemeIcons(theme) {
        const sun = document.querySelector('.sun-icon');
        const moon = document.querySelector('.moon-icon');
        if (theme === 'dark') {
            sun.style.display = 'block';
            moon.style.display = 'none';
        } else {
            sun.style.display = 'none';
            moon.style.display = 'block';
        }
    }

    // ============ Navigation ============
    initNavigation() {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.switchView(btn.dataset.view);
            });
        });
    }

    switchView(view) {
        // Update nav buttons
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelector(`[data-view="${view}"]`).classList.add('active');
        
        // Update views
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById(`view-${view}`).classList.add('active');
        
        // Special handling
        if (view === 'home') this.updateHomeStats();
        if (view === 'stats') this.updateStats();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ============ Keyboard Navigation ============
    initKeyboardNav() {
        document.addEventListener('keydown', (e) => {
            const activeView = document.querySelector('.view.active');
            if (!activeView) return;
            
            if (activeView.id === 'view-study') {
                if (e.key === 'ArrowLeft') this.studyPrev();
                if (e.key === 'ArrowRight') this.studyNext();
                if (e.key === 'Enter') this.checkStudyAnswer();
                if (['1','2','3','4'].includes(e.key)) {
                    const idx = parseInt(e.key) - 1;
                    const q = this.studyQuestions[this.studyIndex];
                    if (q && idx < q.options.length) {
                        this.selectStudyOption(idx);
                    }
                }
            }
            
            if (activeView.id === 'view-exam' && document.getElementById('exam-progress').style.display !== 'none') {
                if (e.key === 'ArrowLeft') this.examPrev();
                if (e.key === 'ArrowRight') this.examNext();
                if (['1','2','3','4'].includes(e.key)) {
                    const idx = parseInt(e.key) - 1;
                    const q = this.examQuestions[this.examCurrentIndex];
                    if (q && idx < q.options.length) {
                        this.selectExamOption(idx);
                    }
                }
            }
        });
    }

    // ============ Progress Persistence ============
    loadProgress() {
        const saved = localStorage.getItem('a1quiz-progress');
        return saved ? JSON.parse(saved) : {
            learned: {},      // {questionId: true/false}
            examHistory: [],  // [{date, score, total, passed, time}]
            totalExams: 0,
            bestScore: null
        };
    }

    saveProgress() {
        localStorage.setItem('a1quiz-progress', JSON.stringify(this.progress));
    }

    resetProgress() {
        if (confirm('Bạn có chắc chắn muốn xóa toàn bộ tiến trình học tập? Thao tác này không thể hoàn tác.')) {
            this.progress = {
                learned: {},
                examHistory: [],
                totalExams: 0,
                bestScore: null
            };
            this.saveProgress();
            this.updateHomeStats();
            this.updateStats();
            this.showToast('Đã xóa toàn bộ tiến trình', 'info');
        }
    }

    // ============ Home Stats ============
    updateHomeStats() {
        const learnedCount = Object.values(this.progress.learned).filter(Boolean).length;
        document.getElementById('learnedCount').textContent = learnedCount;
        document.getElementById('examsTaken').textContent = this.progress.totalExams;
        document.getElementById('bestScore').textContent = this.progress.bestScore !== null ? `${this.progress.bestScore}/25` : '--';
        
        // Chapter progress
        const chapterCounts = {1: 100, 2: 10, 3: 15, 4: 90, 5: 35};
        for (let ch = 1; ch <= 5; ch++) {
            const chQuestions = this.questions.filter(q => q.chapter === ch);
            const chLearned = chQuestions.filter(q => this.progress.learned[q.id]).length;
            const total = chQuestions.length;
            const pct = total > 0 ? (chLearned / total * 100) : 0;
            
            const progressEl = document.getElementById(`ch${ch}-progress`);
            const textEl = document.getElementById(`ch${ch}-text`);
            if (progressEl) progressEl.style.width = `${pct}%`;
            if (textEl) textEl.textContent = `${chLearned}/${total}`;
        }
    }

    // ============ Study Mode ============
    studyChapter(chapter) {
        this.switchView('study');
        document.getElementById('chapterFilter').value = chapter;
        this.filterChapter(chapter);
    }

    filterChapter(chapter) {
        chapter = parseInt(chapter);
        if (chapter === 0) {
            this.studyQuestions = [...this.questions];
        } else {
            this.studyQuestions = this.questions.filter(q => q.chapter === chapter);
        }
        this.studyIndex = 0;
        this.renderStudyQuestion();
    }

    shuffleStudy() {
        for (let i = this.studyQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.studyQuestions[i], this.studyQuestions[j]] = [this.studyQuestions[j], this.studyQuestions[i]];
        }
        this.studyIndex = 0;
        this.renderStudyQuestion();
        this.showToast('Đã xáo trộn câu hỏi', 'info');
    }

    renderStudyQuestion() {
        if (this.studyQuestions.length === 0) return;
        
        const q = this.studyQuestions[this.studyIndex];
        this.studySelectedAnswer = null;
        this.studyAnswerChecked = false;
        
        // Update progress
        document.getElementById('study-current').textContent = `Câu ${this.studyIndex + 1}`;
        document.getElementById('study-total').textContent = `/ ${this.studyQuestions.length}`;
        const pct = ((this.studyIndex + 1) / this.studyQuestions.length * 100);
        document.getElementById('study-progress-fill').style.width = `${pct}%`;
        
        // Question badge
        document.getElementById('study-badge').textContent = `Câu ${q.id}`;
        
        const chapterNames = {
            1: 'Chương I', 2: 'Chương II', 3: 'Chương III', 4: 'Chương IV', 5: 'Chương V'
        };
        document.getElementById('study-chapter-badge').textContent = chapterNames[q.chapter] || '';
        
        // Question text
        document.getElementById('study-question-text').textContent = q.question;
        
        // Options
        const optionsContainer = document.getElementById('study-options');
        optionsContainer.innerHTML = '';
        
        q.options.forEach((opt, i) => {
            const div = document.createElement('div');
            div.className = 'option-item';
            div.innerHTML = `
                <span class="option-number">${i + 1}</span>
                <span class="option-text">${opt}</span>
            `;
            div.addEventListener('click', () => this.selectStudyOption(i));
            optionsContainer.appendChild(div);
        });
        
        // Hide explanation
        document.getElementById('study-explanation').style.display = 'none';
        
        // Update check button
        document.getElementById('study-check').textContent = 'Kiểm tra';
        document.getElementById('study-check').disabled = false;
    }

    selectStudyOption(index) {
        if (this.studyAnswerChecked) return;
        
        this.studySelectedAnswer = index;
        const options = document.querySelectorAll('#study-options .option-item');
        options.forEach((opt, i) => {
            opt.classList.toggle('selected', i === index);
        });
    }

    checkStudyAnswer() {
        if (this.studySelectedAnswer === null) {
            this.showToast('Vui lòng chọn một đáp án', 'warning');
            return;
        }
        
        if (this.studyAnswerChecked) {
            this.studyNext();
            return;
        }
        
        this.studyAnswerChecked = true;
        const q = this.studyQuestions[this.studyIndex];
        const correctAnswer = this.answers[q.id];
        const isCorrect = this.studySelectedAnswer === correctAnswer;
        
        // Mark options
        const options = document.querySelectorAll('#study-options .option-item');
        options.forEach((opt, i) => {
            opt.classList.remove('selected');
            if (i === correctAnswer) opt.classList.add('correct');
            if (i === this.studySelectedAnswer && !isCorrect) opt.classList.add('wrong');
        });
        
        // Mark as learned if correct
        if (isCorrect) {
            this.progress.learned[q.id] = true;
            this.saveProgress();
        }
        
        // Show explanation
        const explanationEl = document.getElementById('study-explanation');
        explanationEl.style.display = 'block';
        const correctText = q.options[correctAnswer] || 'Đáp án ' + (correctAnswer + 1);
        document.getElementById('study-explanation-text').textContent = 
            `Đáp án đúng: ${correctAnswer + 1}. ${correctText}`;
        
        // Update button
        document.getElementById('study-check').textContent = 'Câu tiếp theo →';
    }

    studyPrev() {
        if (this.studyIndex > 0) {
            this.studyIndex--;
            this.renderStudyQuestion();
        }
    }

    studyNext() {
        if (this.studyIndex < this.studyQuestions.length - 1) {
            this.studyIndex++;
            this.renderStudyQuestion();
        }
    }

    // ============ Exam Mode ============
    startExam() {
        this.switchView('exam');
        
        // Reset exam state
        this.examAnswers = {};
        this.examCurrentIndex = 0;
        this.examTimeLeft = 19 * 60;
        if (this.examTimer) clearInterval(this.examTimer);
        
        // Generate random 25 questions following the official structure:
        // 8 questions from Chapter I (quy định chung & quy tắc)
        // 1 question from critical questions (câu điểm liệt)
        // 1 question from Chapter II (văn hóa GT)
        // 1 question from Chapter III (kỹ thuật lái xe)
        // 8 questions from Chapter IV (biển báo)
        // 6 questions from Chapter V (sa hình)
        
        const ch1 = this.questions.filter(q => q.chapter === 1 && !this.criticalQuestions.includes(q.id));
        const critical = this.questions.filter(q => this.criticalQuestions.includes(q.id));
        const ch2 = this.questions.filter(q => q.chapter === 2);
        const ch3 = this.questions.filter(q => q.chapter === 3);
        const ch4 = this.questions.filter(q => q.chapter === 4);
        const ch5 = this.questions.filter(q => q.chapter === 5);
        
        const shuffle = (arr) => {
            const a = [...arr];
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        };
        
        this.examQuestions = [
            ...shuffle(ch1).slice(0, 8),
            ...shuffle(critical).slice(0, 1),
            ...shuffle(ch2).slice(0, 1),
            ...shuffle(ch3).slice(0, 1),
            ...shuffle(ch4).slice(0, 8),
            ...shuffle(ch5).slice(0, 6)
        ];
        
        // Shuffle the final set
        this.examQuestions = shuffle(this.examQuestions);
        
        // Show exam progress
        document.getElementById('exam-setup').style.display = 'none';
        document.getElementById('exam-progress').style.display = 'block';
        document.getElementById('exam-result').style.display = 'none';
        
        // Start timer
        this.examStartTime = Date.now();
        this.updateExamTimer();
        this.examTimer = setInterval(() => {
            this.examTimeLeft--;
            this.updateExamTimer();
            if (this.examTimeLeft <= 0) {
                this.submitExam();
            }
        }, 1000);
        
        // Render
        this.renderExamQuestionNav();
        this.renderExamQuestion();
    }

    updateExamTimer() {
        const minutes = Math.floor(this.examTimeLeft / 60);
        const seconds = this.examTimeLeft % 60;
        const timeStr = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        const timerEl = document.getElementById('exam-timer');
        document.getElementById('exam-time').textContent = timeStr;
        
        if (this.examTimeLeft <= 120) {
            timerEl.classList.add('danger');
        } else {
            timerEl.classList.remove('danger');
        }
    }

    renderExamQuestionNav() {
        const container = document.getElementById('exam-question-nav');
        container.innerHTML = '';
        
        this.examQuestions.forEach((q, i) => {
            const btn = document.createElement('button');
            btn.className = 'eq-nav-btn';
            btn.textContent = i + 1;
            if (i === this.examCurrentIndex) btn.classList.add('current');
            if (this.examAnswers[i] !== undefined) btn.classList.add('answered');
            btn.addEventListener('click', () => {
                this.examCurrentIndex = i;
                this.renderExamQuestionNav();
                this.renderExamQuestion();
            });
            container.appendChild(btn);
        });
        
        // Update answered count
        const answered = Object.keys(this.examAnswers).length;
        document.getElementById('exam-answered').textContent = answered;
        document.getElementById('exam-total-q').textContent = this.examQuestions.length;
    }

    renderExamQuestion() {
        const q = this.examQuestions[this.examCurrentIndex];
        
        document.getElementById('exam-badge').textContent = `Câu ${this.examCurrentIndex + 1}`;
        document.getElementById('exam-question-text').textContent = q.question;
        
        // Show critical badge
        const criticalBadge = document.getElementById('exam-critical-badge');
        if (this.criticalQuestions.includes(q.id)) {
            criticalBadge.style.display = 'inline-block';
        } else {
            criticalBadge.style.display = 'none';
        }
        
        // Options
        const optionsContainer = document.getElementById('exam-options');
        optionsContainer.innerHTML = '';
        
        q.options.forEach((opt, i) => {
            const div = document.createElement('div');
            div.className = 'option-item';
            if (this.examAnswers[this.examCurrentIndex] === i) {
                div.classList.add('selected');
            }
            div.innerHTML = `
                <span class="option-number">${i + 1}</span>
                <span class="option-text">${opt}</span>
            `;
            div.addEventListener('click', () => this.selectExamOption(i));
            optionsContainer.appendChild(div);
        });
    }

    selectExamOption(index) {
        this.examAnswers[this.examCurrentIndex] = index;
        this.renderExamQuestion();
        this.renderExamQuestionNav();
    }

    examPrev() {
        if (this.examCurrentIndex > 0) {
            this.examCurrentIndex--;
            this.renderExamQuestionNav();
            this.renderExamQuestion();
        }
    }

    examNext() {
        if (this.examCurrentIndex < this.examQuestions.length - 1) {
            this.examCurrentIndex++;
            this.renderExamQuestionNav();
            this.renderExamQuestion();
        }
    }

    submitExam() {
        const unanswered = this.examQuestions.length - Object.keys(this.examAnswers).length;
        
        if (unanswered > 0 && this.examTimeLeft > 0) {
            if (!confirm(`Bạn còn ${unanswered} câu chưa trả lời. Bạn có chắc chắn muốn nộp bài?`)) {
                return;
            }
        }
        
        // Stop timer
        if (this.examTimer) clearInterval(this.examTimer);
        
        // Calculate results
        let correct = 0;
        let wrong = 0;
        let skip = 0;
        let failedCritical = false;
        
        this.examQuestions.forEach((q, i) => {
            const userAnswer = this.examAnswers[i];
            const correctAnswer = this.answers[q.id];
            
            if (userAnswer === undefined) {
                skip++;
                if (this.criticalQuestions.includes(q.id)) {
                    failedCritical = true;
                }
            } else if (userAnswer === correctAnswer) {
                correct++;
            } else {
                wrong++;
                if (this.criticalQuestions.includes(q.id)) {
                    failedCritical = true;
                }
            }
        });
        
        const passed = correct >= 21 && !failedCritical;
        const timeTaken = Math.floor((Date.now() - this.examStartTime) / 1000);
        const minutes = Math.floor(timeTaken / 60);
        const seconds = timeTaken % 60;
        const timeStr = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        // Save to history
        this.progress.totalExams++;
        this.progress.examHistory.unshift({
            date: new Date().toLocaleDateString('vi-VN'),
            time: new Date().toLocaleTimeString('vi-VN', {hour: '2-digit', minute: '2-digit'}),
            score: correct,
            total: this.examQuestions.length,
            passed: passed,
            timeTaken: timeStr
        });
        
        if (this.progress.bestScore === null || correct > this.progress.bestScore) {
            this.progress.bestScore = correct;
        }
        
        // Keep only last 20 exams
        if (this.progress.examHistory.length > 20) {
            this.progress.examHistory = this.progress.examHistory.slice(0, 20);
        }
        
        this.saveProgress();
        
        // Show results
        document.getElementById('exam-progress').style.display = 'none';
        document.getElementById('exam-result').style.display = 'block';
        
        document.getElementById('result-icon').textContent = passed ? '🎉' : '😔';
        
        const titleEl = document.getElementById('result-title');
        titleEl.textContent = passed ? 'ĐẠT!' : 'CHƯA ĐẠT';
        titleEl.className = `result-title ${passed ? 'pass' : 'fail'}`;
        
        document.getElementById('result-subtitle').textContent = passed 
            ? `Chúc mừng bạn! Bạn đã trả lời đúng ${correct}/25 câu.`
            : `Bạn đã trả lời đúng ${correct}/25 câu. Cần 21 câu để đạt.`;
        
        document.getElementById('result-correct').textContent = correct;
        document.getElementById('result-wrong').textContent = wrong;
        document.getElementById('result-skip').textContent = skip;
        document.getElementById('result-time').textContent = timeStr;
        
        const criticalEl = document.getElementById('result-critical');
        criticalEl.style.display = failedCritical ? 'block' : 'none';
        
        document.getElementById('exam-review').style.display = 'none';
    }

    reviewExam() {
        const reviewContainer = document.getElementById('exam-review');
        const reviewList = document.getElementById('review-list');
        reviewContainer.style.display = 'block';
        reviewList.innerHTML = '';
        
        this.examQuestions.forEach((q, i) => {
            const userAnswer = this.examAnswers[i];
            const correctAnswer = this.answers[q.id];
            const isCorrect = userAnswer === correctAnswer;
            const isCritical = this.criticalQuestions.includes(q.id);
            
            const card = document.createElement('div');
            card.className = 'question-card';
            
            let badgeClass = isCorrect ? 'correct' : (userAnswer === undefined ? '' : 'wrong');
            let criticalBadge = isCritical ? `<span class="question-chapter-badge critical">⚠️ Câu điểm liệt</span>` : '';
            
            let optionsHtml = q.options.map((opt, j) => {
                let cls = 'option-item';
                if (j === correctAnswer) cls += ' correct';
                if (j === userAnswer && !isCorrect) cls += ' wrong';
                return `
                    <div class="${cls}">
                        <span class="option-number">${j + 1}</span>
                        <span class="option-text">${opt}</span>
                    </div>
                `;
            }).join('');
            
            let statusIcon = isCorrect ? '✅' : (userAnswer === undefined ? '⏭️' : '❌');
            
            card.innerHTML = `
                <div class="question-badge">Câu ${i + 1} ${statusIcon}</div>
                ${criticalBadge}
                <h3 class="question-text">${q.question}</h3>
                <div class="options-list">${optionsHtml}</div>
            `;
            
            reviewList.appendChild(card);
        });
        
        // Scroll to review
        reviewContainer.scrollIntoView({ behavior: 'smooth' });
    }

    // ============ Stats View ============
    updateStats() {
        // Circular progress
        const total = this.questions.length;
        const learned = Object.values(this.progress.learned).filter(Boolean).length;
        const pct = total > 0 ? Math.round(learned / total * 100) : 0;
        
        const circle = document.getElementById('progress-circle');
        const circumference = 2 * Math.PI * 54; // r=54
        const offset = circumference - (pct / 100 * circumference);
        circle.style.strokeDashoffset = offset;
        
        document.getElementById('progress-percent').textContent = `${pct}%`;
        
        // Exam history
        const historyContainer = document.getElementById('exam-history');
        if (this.progress.examHistory.length === 0) {
            historyContainer.innerHTML = '<p class="empty-state">Chưa có lần thi thử nào</p>';
        } else {
            historyContainer.innerHTML = this.progress.examHistory.map(exam => `
                <div class="history-item">
                    <div>
                        <span class="history-score ${exam.passed ? 'pass' : 'fail'}">
                            ${exam.passed ? '✅' : '❌'} ${exam.score}/${exam.total}
                        </span>
                        <span style="margin-left: 8px; color: var(--text-muted); font-size: 0.82rem;">
                            ${exam.timeTaken}
                        </span>
                    </div>
                    <span class="history-date">${exam.date} ${exam.time}</span>
                </div>
            `).join('');
        }
    }

    // ============ Toast ============
    showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(20px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// ============ Initialize ============
const app = new QuizApp();
