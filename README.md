# 🏍️ Ôn Thi Bằng Lái Xe Hạng A1 - Luật Mới 2025

Web app ôn thi lý thuyết sát hạch lái xe mô tô hạng A1 với **250 câu hỏi** theo quy định mới nhất năm 2025.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Questions](https://img.shields.io/badge/câu%20hỏi-250-green.svg)
![Version](https://img.shields.io/badge/version-1.0-purple.svg)

## ✨ Tính năng

### 📖 Chế độ Học tập
- Duyệt toàn bộ 250 câu hỏi
- Lọc theo 5 chương
- Xáo trộn câu hỏi ngẫu nhiên
- Kiểm tra đáp án với phản hồi trực quan
- Phím tắt: `←` `→` chuyển câu, `1-4` chọn đáp án, `Enter` kiểm tra

### 📝 Chế độ Thi thử
- Mô phỏng đề thi thật: **25 câu / 19 phút**
- Cấu trúc đề thi theo quy định chính thức
- Đánh dấu **câu điểm liệt** ⚠️
- Đồng hồ đếm ngược
- Kết quả chi tiết + xem lại đáp án

### 📊 Thống kê
- Tiến độ học tập theo chương
- Lịch sử thi thử (20 lần gần nhất)
- Dữ liệu lưu tự động (localStorage)

### 🎨 Giao diện
- 🌙 Dark / ☀️ Light mode
- Glassmorphism design
- Responsive (Desktop + Mobile)
- Micro-animations mượt mà

## 📋 Cấu trúc đề thi A1

| Nội dung | Số câu |
|----------|--------|
| Quy định chung & Quy tắc GTĐB | 8 |
| Câu điểm liệt (sai = trượt) | 1 |
| Văn hóa giao thông | 1 |
| Kỹ thuật lái xe | 1 |
| Biển báo đường bộ | 8 |
| Sa hình & Xử lý tình huống | 6 |
| **Tổng** | **25** |

- ⏱️ Thời gian: **19 phút**
- ✅ Đạt: **21/25 câu** trở lên
- ⚠️ **Không được sai câu điểm liệt**

## 🚀 Cài đặt & Sử dụng

### Chạy local
```bash
# Clone repo
git clone https://github.com/YOUR_USERNAME/on-thi-a1.git
cd on-thi-a1

# Mở bằng bất kỳ HTTP server nào
python -m http.server 8080
# hoặc
npx serve .
```

Truy cập: `http://localhost:8080`

### Deploy GitHub Pages
1. Push code lên GitHub
2. Vào **Settings** → **Pages**
3. Source: chọn **Deploy from a branch**
4. Branch: chọn `main` → folder `/ (root)`
5. Click **Save**
6. Web sẽ có tại: `https://YOUR_USERNAME.github.io/on-thi-a1/`

## 📁 Cấu trúc dự án

```
on-thi-a1/
├── index.html          # Trang chính
├── style.css           # Giao diện CSS
├── app.js              # Logic ứng dụng
├── questions_data.js   # 250 câu hỏi
├── answers_data.js     # Đáp án đúng
├── README.md           # Tài liệu
└── .gitignore          # Git ignore
```

## ⚠️ Lưu ý

- Đáp án được tổng hợp từ bộ đề chính thức của **Cục CSGT - Bộ Công An**
- Các câu hỏi **biển báo** và **sa hình** (Chương IV, V) cần có hình ảnh minh họa — nên đối chiếu thêm với nguồn có hình ảnh
- Web app chỉ cần **trình duyệt** để chạy, không cần cài đặt thêm gì

## 📄 License

MIT License - Tự do sử dụng, chỉnh sửa và chia sẻ.
