const QUESTIONS_DATA = [
  {
    "id": 1,
    "question": "Phần của đường bộ được sử dụng cho phương tiện giao thông đường bộ đi lại là gì?",
    "options": [
      "Phần mặt đường và lề đường.",
      "Phần đường xe chạy.",
      "Phần đường xe cơ giới."
    ],
    "chapter": 1
  },
  {
    "id": 2,
    "question": "Làn đường là gì?",
    "options": [
      "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
      "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có đủ chiều rộng cho xe chạy an toàn.",
      "Là đường cho xe ô tô chạy, dừng, đỗ an toàn."
    ],
    "chapter": 1
  },
  {
    "id": 3,
    "question": "Khổ giới hạn của đường bộ được hiểu như thế nào là đúng?",
    "options": [
      "Khổ giới hạn của đường bộ là khoảng trống có kích thước giới hạn về chiều rộng, chiều cao của đường bộ để các xe, bao gồm cả hàng hoá xếp trên xe đi qua được an toàn và được xác định theo quy chuẩn, tiêu chuẩn kỹ thuật của đường bộ.",
      "Là khoảng trống có kích thước giới hạn về chiều rộng của đường, cầu, bến phà, hầm trên đường b ộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.",
      "Là khoảng trống có kích thước giới hạn về chiều cao của cầu, bến phà, hầm trên đường bộ để các xe đi qua được an toàn."
    ],
    "chapter": 1
  },
  {
    "id": 4,
    "question": "Dải phân cách được lắp đặt để làm gì?",
    "options": [
      "Để phân chia các làn đường dành cho xe cơ giới và xe thô sơ trên đường cao tốc.",
      "Để phân chia phần đường xe chạy thành hai chiều riêng biệt hoặc để phân chia phần đường dành cho xe cơ giới và xe thô sơ hoặc của nhiều loại xe khác nhau trên cùng một chiều đường.",
      "Để phân tách phần đường xe chạy và hành lang an toàn giao thông."
    ],
    "chapter": 1
  },
  {
    "id": 5,
    "question": "Vạch kẻ đường là gì?",
    "options": [
      "Là báo hiệu đường bộ để hỗ trợ cảnh báo nguy hiểm cho người tham gia giao thông đường bộ.",
      "Là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.",
      "Là báo hiệu cho người tham gia giao thông đường bộ về các thông tin của đường bộ.",
      "Cả ba ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 6,
    "question": "Người điều khiển phương tiện tham gia giao thông đường bộ được hiểu như thế nào là đúng?",
    "options": [
      "Là người điều khiển xe cơ giới, người điều khiển xe thô sơ, người điều khiển xe máy chuyên dùng.",
      "Là người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ.",
      "Cả hai ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 7,
    "question": "Người lái xe được hiểu như thế nào là đúng?",
    "options": [
      "Là người điều khiển xe cơ giới.",
      "Là người điều khiển xe thô sơ.",
      "Là người điều khiển xe máy chuyên dùng."
    ],
    "chapter": 1
  },
  {
    "id": 8,
    "question": "Trong nhóm các phương tiện giao thông đường bộ dưới đây, nhóm phương tiện nào là xe cơ giới?",
    "options": [
      "Xe ô tô; máy kéo; xe mô tô hai bánh; xe mô tô ba bánh; xe gắn máy; xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng; xe đạp, xe đạp máy, xe đạp điện.",
      "Xe ô tô; rơ moóc được kéo bởi xe ô tô; sơ mi rơ moóc được kéo bởi ô tô đầu kéo; xe chở người bốn bánh có gắn động cơ; xe chở hàng bốn bánh có gắn động cơ; xe mô tô, xe gắn máy và các loại xe tương tự."
    ],
    "chapter": 1
  },
  {
    "id": 9,
    "question": "Trong nhóm các phương tiện giao thông đường bộ dưới đây, nhóm phương tiện nào là xe thô sơ?",
    "options": [
      "Xe đạp, xe đạp máy, xe đạp điện; xe xích lô; xe lăn dùng cho người khuyết tật; xe vật nuôi kéo và các loại xe tương tự.",
      "Xe đạp (kể cả xe đạp máy, xe đạp điện), xe gắn máy, xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng.",
      "Xe ô tô, máy kéo, rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo."
    ],
    "chapter": 1
  },
  {
    "id": 10,
    "question": "Phương tiện giao thông đường bộ gồm những loại nào?",
    "options": [
      "Phương tiện giao thông cơ giới đường bộ.",
      "Phương tiện giao thông thô sơ đường bộ, xe máy chuyên dùng và các loại xe tương tự.",
      "Cả hai ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 11,
    "question": "Người tham gia giao thông đường bộ gồm những đối tượng nào?",
    "options": [
      "Người điều khiển, người được chở trên phương tiện tham gia giao thông đường bộ.",
      "Người điều khiển, dẫn dắt vật nuôi trên đường bộ; người đi bộ trên đường bộ.",
      "Cả hai ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 12,
    "question": "Người điều khiển phương tiện tham gia giao thông đường bộ gồm những đối tượng nào dưới đây?",
    "options": [
      "Người điều khiển xe cơ giới, người điều khiển xe thô sơ.",
      "Người điều khiển xe máy chuyên dùng.",
      "Cả hai ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 13,
    "question": "Người điều khiển giao thông đường bộ được hiểu như thế nào là đúng?",
    "options": [
      "Là người điều khiển phương tiện tham gia giao thông đường bộ.",
      "Là Cảnh sát giao thông và người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ.",
      "Là người tham gia giao thông đường bộ."
    ],
    "chapter": 1
  },
  {
    "id": 14,
    "question": "Hành vi nào dưới đây bị nghiêm cấm?",
    "options": [
      "Sử dụng xe đạp đi trên các tuyến quốc lộ.",
      "Rải vật sắc nhọn, đổ chất gây trơn trượt trên đường bộ.",
      "Cả hai ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 15,
    "question": "Hành vi đưa xe cơ giới, xe máy chuyên dùng tham gia giao thông đường bộ nào dưới đây bị cấm?",
    "options": [
      "Không có chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường.",
      "Hết niên hạn sử dụng.",
      "Cả hai ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 16,
    "question": "Tổ chức đua xe được phép thực hiện khi nào?",
    "options": [
      "Trên đường phố không có người qua lại.",
      "Được người dân ủng hộ.",
      "Được cơ quan có thẩm quyền cấp phép."
    ],
    "chapter": 1
  },
  {
    "id": 17,
    "question": "Hành vi đua xe trái phép bị xử lý như thế nào?",
    "options": [
      "Chỉ bị nhắc nhở.",
      "Tùy theo mức độ của hành vi vi phạm có thể bị xử lý hành chính hoặc xử lý hình sự."
    ],
    "chapter": 1
  },
  {
    "id": 18,
    "question": "Người điều khiển phương tiện tham gia giao thông đường bộ mà trong máu hoặc hơi thở có nồng độ cồn có bị nghiêm cấm không?",
    "options": [
      "Bị nghiêm cấm.",
      "Không bị nghiêm cấm.",
      "Không bị nghiêm cấm, nếu nồng độ cồn trong máu ở mức nhẹ, có thể điều khiển phương tiện tham gia giao thông."
    ],
    "chapter": 1
  },
  {
    "id": 19,
    "question": "Theo Luật Phòng chống tác hại của rượu, bia, đối tượng nào dưới đây bị cấm sử dụng rượu, bia khi tham gia giao thông?",
    "options": [
      "Người điều khiển xe ô tô, xe mô tô, xe đạp, xe gắn máy.",
      "Người được chở trên xe cơ giới.",
      "Cả hai ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 20,
    "question": "Hành vi giao xe ô tô, mô tô cho người nào sau đây tham gia giao thông đường bộ bị nghiêm cấm?",
    "options": [
      "Người chưa đủ tuổi theo quy định.",
      "Người không có giấy phép lái xe.",
      "Người có giấy phép lái xe nhưng đã bị trừ hết 12 điểm.",
      "Cả ba ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 21,
    "question": "Hành vi nào sau đây bị nghiêm cấm?",
    "options": [
      "Điều khiển xe cơ giới lạng lách, đánh võng, rú ga liên tục khi tham gia giao thông trên đường.",
      "Xúc phạm, đe dọa, cản trở, chống đối hoặc không chấp hành hiệu lệnh, hướng dẫn, yêu cầu kiểm tra, kiểm soát của người thi hành công vụ về bảo đảm trật tự, an toàn giao thông đường bộ.",
      "Cả hai ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 22,
    "question": "Các hành vi nào sau đây bị cấm đối với phương tiện tham gia giao thông đường bộ?",
    "options": [
      "Cải tạo xe ô tô loại khác thành xe ô tô chở người phục vụ mục đích quốc phòng, an ninh.",
      "Cải tạo trái phép; cố ý can thiệp làm sai lệch chỉ số trên đồng hồ báo quãng đường đã chạy của xe ô tô; cắt, hàn, tẩy xóa, đục sửa, đóng lại trái phép số khung, số động cơ của xe cơ giới, xe máy chuyên dùng."
    ],
    "chapter": 1
  },
  {
    "id": 23,
    "question": "Hành vi nào sau đây bị cấm?",
    "options": [
      "Lắp đặt, sử dụng thiết bị âm thanh, ánh sáng trên xe cơ giới, xe máy chuyên dùng gây mất trật tự, an toàn giao thông đường bộ.",
      "Cản trở người, phương tiện tham gia giao thông trên đường bộ; ném gạch, đất, đá, cát hoặc vật thể khác vào người, phương tiện đang tham gia giao thông trên đường bộ.",
      "Cả hai ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 24,
    "question": "Việc sản xuất, sử dụng, mua, bán trái phép biển số xe có bị nghiêm cấm hay không?",
    "options": [
      "Không bị nghiêm cấm.",
      "Bị nghiêm cấm.",
      "Bị nghiêm cấm tuỳ trường hợp."
    ],
    "chapter": 1
  },
  {
    "id": 25,
    "question": "Khi điều khiển phương tiện tham gia giao thông, những hành vi nào dưới đây bị nghiêm cấm?",
    "options": [
      "Thay đổi tốc độ của xe nhiều lần.",
      "Điều khiển phương tiện sau 23 giờ trong ngày.",
      "Lạng lách, đánh võng, rú ga liên tục."
    ],
    "chapter": 1
  },
  {
    "id": 26,
    "question": "Có bao nhiêu nhóm biển báo hiệu đường bộ?",
    "options": [
      "Ba nhóm: Biển báo cấm, biển báo nguy hiểm và biển hiệu lệnh.",
      "Bốn nhóm: Biển báo cấm, biển báo nguy hiểm, biển hiệu lệnh và biển phụ.",
      "Năm nhóm: Biển báo cấm, biển báo nguy hiểm, biển hiệu lệnh, biển chỉ dẫn, biển phụ."
    ],
    "chapter": 1
  },
  {
    "id": 27,
    "question": "Tại nơi có vạch kẻ đường hoặc tại nơi mà người đi bộ, xe lăn của người khuyết tật đang qua đường, người điều khiển phương tiện tham gia giao thông phải thực hiện như thế nào?",
    "options": [
      "Giảm tốc độ và nhường đường cho người đi bộ, xe lăn của người khuyết tật qua đường đảm bảo an toàn.",
      "Quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn cho người đi bộ, xe lăn của người khuyết tật qua đường.",
      "Quan sát, tăng tốc độ và điều khiển phương tiện nhanh chóng đi qua."
    ],
    "chapter": 1
  },
  {
    "id": 28,
    "question": "Người điều khiển xe mô tô phải phải quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn trong các trường hợp nào dưới đây?",
    "options": [
      "Đường hẹp, đường vòng, đường quanh co, đường đèo, dốc.",
      "Nơi cầu, cống hẹp, đập tràn, đường ngầm, hầm chui, hầm đường bộ.",
      "Trời mưa, gió, sương, khói, bụi, mặt đường trơn trượt, lầy lội, có nhiều đất đá, vật liệu rơi vãi ảnh hưởng đến an toàn giao thông đường bộ.",
      "Cả ba ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 29,
    "question": "Khi gặp hiệu lệnh điều khiển của Cảnh sát giao thông như hình dưới đây thì người tham gia giao thông đường bộ phải đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Người tham gia giao thông đường bộ ở các hướng phải dừng lại.",
      "Người tham gia giao thông đường bộ ở các hướng được đi theo chiều gậy chỉ của Cảnh sát giao thông.",
      "Người tham gia giao thông đường bộ ở phía trước và phía sau người điều khiển được đi tất cả các hướng; người tham gia giao thông đường bộ ở phía bên phải và phía bên trái người điều khiển phải dừng lại.",
      "Người tham gia giao thông đường bộ ở phía trước và phía sau người điều khiển phải dừng lại; người tham gia giao thông đường bộ ở phía bên phải và phía bên trái người điều khiển được đi tất cả các hướng."
    ],
    "chapter": 1
  },
  {
    "id": 30,
    "question": "Khi gặp hiệu lệnh điều khiển của Cảnh sát giao thông như hình dưới đây thì người tham gia giao thông đường bộ phải đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Người tham gia giao thông đường bộ ở phía sau Cảnh sát giao thông được đi, các hướng khác phải dừng lại.",
      "Người tham gia giao thông đường bộ được rẽ phải theo chiều mũi tên màu xanh ở bục Cảnh sát giao thông.",
      "Người tham gia giao thông đường bộ ở tất cả các hướng phải dừng lại, trừ các xe đã ở trong khu vực giao nhau.",
      "Người tham gia giao thông đường bộ ở phía trước Cảnh sát giao thông phải dừng lại, các hướng khác được đi."
    ],
    "chapter": 1
  },
  {
    "id": 31,
    "question": "Khi hiệu lệnh của người điều khiển giao thông trái với tín hiệu đèn giao thông hoặc biển báo hiệu đường bộ thì người tham gia giao thông đường bộ phải chấp hành báo hiệu đường bộ nào dưới đây?",
    "options": [
      "Theo hiệu lệnh của người điều khiển giao thông.",
      "Theo tín hiệu đèn giao thông.",
      "Theo biển báo hiệu đường bộ."
    ],
    "chapter": 1
  },
  {
    "id": 32,
    "question": "Khi ở một vị trí vừa có biển báo hiệu đặt cố định vừa có biển báo hiệu tạm thời mà hai biển có ý nghĩa khác nhau, người tham gia giao thông đường bộ phải chấp hành hiệu lệnh của biển báo hiệu nào?",
    "options": [
      "Biển báo hiệu đặt cố định.",
      "Biển báo hiệu tạm thời.",
      "Theo quyết định của người tham gia giao thông nhưng phải bảo đảm an toàn."
    ],
    "chapter": 1
  },
  {
    "id": 33,
    "question": "Tại nơi đường giao nhau, khi đèn điều khiển giao thông có tín hiệu màu vàng, người điều khiển phương tiện tham gia giao thông phải chấp hành như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Dừng lại trước vạch dừng; trường hợp đang đi trên vạch dừng hoặc đã đi qua vạch dừng mà tín hiệu đèn màu vàng thì được đi tiếp; trường hợp tín hiệu đèn màu vàng nhấp nháy, người điều khiển phương tiện tham gia giao thông đường bộ được đi nhưng phải quan sát, giảm tốc độ hoặc dừng lại nhường đường cho người đi bộ, xe lăn của người khuyết tật qua đường hoặc các phương tiện khác.",
      "Tăng tốc độ nhanh chóng vượt qua nút giao.",
      "Quan sát, giảm tốc độ, từ từ vượt qua nút giao."
    ],
    "chapter": 1
  },
  {
    "id": 34,
    "question": "Người lái xe trên đường cần chấp hành quy định về tốc độ tối đa như thế nào?",
    "options": [
      "Chỉ lớn hơn tốc độ tối đa cho phép khi đường vắng.",
      "Chỉ lớn hơn tốc độ tối đa cho phép khi vào ban đêm.",
      "Không vượt quá tốc độ tối đa cho phép."
    ],
    "chapter": 1
  },
  {
    "id": 35,
    "question": "Phương tiện tham gia giao thông đường bộ di chuyển với tốc độ thấp hơn phải đi như thế nào?",
    "options": [
      "Đi về bên trái theo chiều đi của mình.",
      "Đi về bên phải theo chiều đi của mình.",
      "Đi ở bất cứ bên nào nhưng phải bấm đèn cảnh báo nguy hiểm để báo hiệu cho các phương tiện khác."
    ],
    "chapter": 1
  },
  {
    "id": 36,
    "question": "Trên một chiều đường có vạch kẻ phân làn đường, người lái xe cơ giới, xe máy chuyên dùng phải điều khiển xe đi trên làn đường nào?",
    "options": [
      "Đi trên làn đường bên phải trong cùng.",
      "Đi trên làn đường bên trái.",
      "Đi ở bất cứ làn nào nhưng phải bảo đảm tốc độ cho phép."
    ],
    "chapter": 1
  },
  {
    "id": 37,
    "question": "Người lái xe phải giảm tốc độ, có tín hiệu rẽ phải và đi sát về bên phải của phần đường xe chạy trong các trường hợp nào dưới đây?",
    "options": [
      "Khi xe chạy phía trước có tín hiệu vượt xe khác.",
      "Khi phía trước có xe chạy ngược chiều.",
      "Khi xe sau xin vượt nếu đủ điều kiện an toàn.",
      "Khi xe sau có tín hiệu vượt bên phải."
    ],
    "chapter": 1
  },
  {
    "id": 38,
    "question": "Vượt xe là gì?",
    "options": [
      "Là tình huống giao thông trên đường mà mỗi chiều đường xe chạy chỉ có một làn đường dành cho xe cơ giới, xe đi phía sau di chuyển sang bên trái để di chuyển lên trước xe phía trước.",
      "Là tình huống giao thông trên đường có từ hai làn đường dành cho xe cơ giới cùng chiều trở lên được phân biệt bằng vạch kẻ đường, xe đi phía sau di chuyển lên trước xe phía trước theo quy tắc sử dụng làn đường."
    ],
    "chapter": 1
  },
  {
    "id": 39,
    "question": "Người lái xe được phép vượt xe trên cầu hẹp có một làn đường, đường cong có tầm nhìn bị hạn chế hay không?",
    "options": [
      "Được phép vượt khi đường vắng.",
      "Không được phép vượt.",
      "Được phép vượt khi có việc gấp."
    ],
    "chapter": 1
  },
  {
    "id": 40,
    "question": "Muốn vượt xe phía trước, người lái xe mô tô phải có tín hiệu như thế nào dưới đây để bảo đảm an toàn?",
    "options": [
      "Bấm còi liên tục để xe phía trước biết xe mình xin vượt.",
      "Rú ga liên tục để xe phía trước biết xe mình xin vượt.",
      "Báo hiệu nhấp nháy bằng đèn chiếu sáng phía trước hoặc còi."
    ],
    "chapter": 1
  },
  {
    "id": 41,
    "question": "Khi lái xe trong khu đông dân cư, khu vực cơ sở khám bệnh, chữa bệnh trừ các khu vực có biển cấm sử dụng còi, người lái xe được sử dụng còi trong thời gian nào?",
    "options": [
      "Từ 22 giờ ngày hôm trước đến 05 giờ ngày hôm sau.",
      "Từ 05 giờ đến 22 giờ.",
      "Từ 23 giờ ngày hôm trước đến 05 giờ sáng hôm sau."
    ],
    "chapter": 1
  },
  {
    "id": 42,
    "question": "Người lái xe sử dụng đèn như thế nào khi đi trên các đoạn đường qua khu đông dân cư có hệ thống chiếu sáng đang hoạt động?",
    "options": [
      "Chỉ bật đèn chiếu xa (đèn pha).",
      "Bật đèn chiếu xa (đèn pha) khi đường vắng, bật đèn chiếu gần (đèn cốt) khi có xe đi ngược chiều.",
      "Chỉ bật đèn chiếu gần (đèn cốt)."
    ],
    "chapter": 1
  },
  {
    "id": 43,
    "question": "Khi điều khiển phương tiện tham gia giao thông, hành vi nào sau đây bị cấm?",
    "options": [
      "Dùng tay cầm và sử dụng điện thoại hoặc thiết bị điện tử khác.",
      "Chỉ được chở người trên thùng xe ô tô chở hàng trong trường hợp chở người đi làm nhiệm vụ cứu nạn, cứu hộ, phòng, chống thiên tai, dịch bệnh hoặc thực hiện nhiệm vụ khẩn cấp."
    ],
    "chapter": 1
  },
  {
    "id": 44,
    "question": "Người lái xe không được vượt xe khác khi gặp trường hợp nào dưới đây?",
    "options": [
      "Trên cầu hẹp có một làn đường; nơi đường giao nhau, đường bộ giao nhau cùng mức với đường sắt; khi gặp xe ưu tiên.",
      "Trên cầu có từ 02 làn xe trở lên.",
      "Trên đường có 02 làn đường được phân chia làn bằng vạch kẻ nét đứt."
    ],
    "chapter": 1
  },
  {
    "id": 45,
    "question": "Nơi nào cấm quay đầu xe?",
    "options": [
      "Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, gầm cầu vượt, ngầm.",
      "Tại nơi đường bộ giao nhau cùng mức với đường sắt, đường hẹp, đường dốc, đoạn đường cong tầm nhìn bị che khuất, trên đường cao tốc, trong hầm đường bộ, trên đường một chiều.",
      "Cả hai ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 46,
    "question": "Trước khi cho xe chuyển hướng, người lái xe phải làm gì để bảo đảm an toàn giao thông?",
    "options": [
      "Phải quan sát, bảo đảm khoảng cách an toàn với xe phía sau.",
      "Giảm tốc độ và có tín hiệu báo hướng rẽ.",
      "Chuyển dần sang làn gần nhất với hướng rẽ. Khi bảo đảm an toàn, không gây trở ngại cho người và phương tiện khác mới được chuyển hướng.",
      "Cả ba ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 47,
    "question": "Khi chuyển làn đường, người lái xe phải bật đèn tín hiệu báo rẽ như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Khi bắt đầu chuyển làn đường.",
      "Trước khi thay đổi làn đường.",
      "Sau khi thay đổi làn đường."
    ],
    "chapter": 1
  },
  {
    "id": 48,
    "question": "Người điều khiển phương tiện tham gia giao thông không được dừng xe, đỗ xe ở những vị trí nào sau đây?",
    "options": [
      "Trên miệng cống thoát nước, miệng hầm của đường điện thoại, điện cao thế, chỗ dành riêng cho xe chữa cháy lấy nước.",
      "Trong phạm vi an toàn của đường sắt.",
      "Cả hai ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 49,
    "question": "Người điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy có được phép sử dụng xe để kéo hoặc đẩy các phương tiện khác khi tham gia giao thông không?",
    "options": [
      "Được phép.",
      "Nếu phương tiện được kéo, đẩy có khối lượng nhỏ hơn phương tiện của mình.",
      "Tùy trường hợp.",
      "Không được phép."
    ],
    "chapter": 1
  },
  {
    "id": 50,
    "question": "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi nào sau đây không được phép?",
    "options": [
      "Buông cả hai tay; đứng, nằm trên xe điều khiển xe; sử dụng chân chống hoặc vật khác quệt xuống đường khi xe đang chạy.",
      "Chở tối đa hai người phía sau khi chở người bệnh đi cấp cứu, áp giải người có hành vi vi phạm pháp luật, trẻ em dưới 12 tuổi và người già yếu hoặc người khuyết tật."
    ],
    "chapter": 1
  },
  {
    "id": 51,
    "question": "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi nào sau đây không được phép?",
    "options": [
      "Buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống hoặc vật khác quệt xuống đường khi xe đang chạy.",
      "Sử dụng xe để chở người hoặc hàng hóa; để chân chạm xuống đất khi khởi hành.",
      "Đội mũ bảo hiểm; chạy xe đúng tốc độ quy định và chấp hành đúng quy tắc giao thông đường bộ.",
      "Chở người ngồi sau dưới 16 tuổi."
    ],
    "chapter": 1
  },
  {
    "id": 52,
    "question": "Người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông đường bộ không được thực hiện hành vi nào sau đây?",
    "options": [
      "Mang, vác vật cồng kềnh.",
      "Bám, kéo hoặc đẩy các phương tiện khác.",
      "Dùng tay cầm điện thoại hoặc các thiết bị điện tử khác.",
      "Ý 1 và ý 2."
    ],
    "chapter": 1
  },
  {
    "id": 53,
    "question": "Người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông đường bộ có được bám, kéo hoặc đẩy các phương tiện khác không?",
    "options": [
      "Được phép.",
      "Được bám trong trường hợp phương tiện của mình bị hỏng.",
      "Được kéo, đẩy trong trường hợp phương tiện khác bị hỏng.",
      "Không được phép."
    ],
    "chapter": 1
  },
  {
    "id": 54,
    "question": "Người lái xe, người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy phải thực hiện quy định nào dưới đây?",
    "options": [
      "Đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia và cài quai đúng quy cách.",
      "Người lái xe phải đội mũ bảo hiểm, người được chở trên xe không nhất thiết phải đội mũ bảo hiểm.",
      "Phải đội mũ bảo hiểm nhưng không nhất thiết phải cài quai."
    ],
    "chapter": 1
  },
  {
    "id": 55,
    "question": "Người lái xe mô tô hai bánh, xe gắn máy được phép chở tối đa hai người trong những trường hợp nào?",
    "options": [
      "Chở người bệnh đi cấp cứu; áp giải người có hành vi vi phạm pháp luật; trẻ em dưới 12 tuổi; người già yếu hoặc người khuyết tật.",
      "Người đã uống rượu, bia; người trong cơ thể có chất ma tuý.",
      "Cả hai ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 56,
    "question": "Người lái xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy không được thực hiện các hành vi nào dưới đây?",
    "options": [
      "Đi xe dàn hàng ngang; buông cả hai tay.",
      "Sử dụng xe để kéo, đẩy xe khác, vật khác, dẫn dắt vật nuôi, mang, vác và chở vật cồng kềnh; chở người đứng trên xe, giá đèo hàng hoặc ngồi trên tay lái; xếp hàng hóa trên xe quá giới hạn quy định.",
      "Ngồi về một bên điều khiển xe; đứng, nằm trên xe điều khiển xe; thay người lái xe khi xe đang chạy; quay người về phía sau để điều khiển xe hoặc bịt mắt điều khiển xe; sử dụng chân chống hoặc vật khác quệt xuống đường khi xe đang chạy.",
      "Cả ba ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 57,
    "question": "Người lái xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy không được thực hiện các hành vi nào sau đây?",
    "options": [
      "Đi xe dàn hàng ngang; đi xe vào phần đường dành cho người đi bộ và phương tiện khác.",
      "Sử dụng ô, thiết bị âm thanh, trừ thiết bị trợ thính.",
      "Cả hai ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 58,
    "question": "Người lái xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy không được thực hiện hành vi nào sau đây?",
    "options": [
      "Đi trên phần đường, làn đường quy định, chấp hành hiệu lệnh của người điều khiển giao thông, đèn tín hiệu giao thông.",
      "Đi xe dàn hàng ngang, đi xe vào phần đường dành cho người đi bộ.",
      "Cả hai ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 59,
    "question": "Người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông đường bộ có được sử dụng ô khi trời mưa hay không?",
    "options": [
      "Được sử dụng.",
      "Chỉ người ngồi sau được sử dụng.",
      "Không được sử dụng.",
      "Được sử dụng nếu không có áo mưa."
    ],
    "chapter": 1
  },
  {
    "id": 60,
    "question": "Người được chở trên xe mô tô có được kéo theo người đang điều khiển xe đạp hay không?",
    "options": [
      "Chỉ được phép nếu cả hai đội mũ bảo hiểm.",
      "Không được phép.",
      "Chỉ được thực hiện trên đường vắng."
    ],
    "chapter": 1
  },
  {
    "id": 61,
    "question": "Trường hợp người được chở trên xe mô tô, xe gắn máy, các loại xe tương tự xe mô tô và các loại xe tương tự xe gắn máy không đội \"mũ bảo hiểm cho người đi mô tô, xe máy\" hoặc không cài quai đúng quy cách (trừ trường hợp chở người bệnh đi cấp cứu, trẻ em dưới 06 tuổi, áp giải người có hành vi vi phạm pháp luật) thì việc xử phạt vi phạm hành chính được quy định như thế nào?",
    "options": [
      "Không bị xử phạt chỉ bị nhắc nhở.",
      "Người được chở không bị xử phạt, chỉ xử phạt người điều khiển xe mô tô, xe gắn máy.",
      "Người được chở bị xử phạt, không xử phạt người điều khiển xe mô tô, xe gắn máy.",
      "Xử phạt cả người điều khiển và người được chở trên xe mô tô, xe gắn máy."
    ],
    "chapter": 1
  },
  {
    "id": 62,
    "question": "Trong các trường hợp dưới đây, để bảo đảm an toàn khi tham gia giao thông, người lái xe mô tô cần thực hiện như thế nào?",
    "options": [
      "Phải đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia và cài quai đúng quy cách, không sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính).",
      "Phải đội mũ bảo hiểm khi trời mưa gió hoặc trời quá nắng; có thể sử dụng ô, điện thoại di động, thiết bị âm thanh nhưng phải bảo đảm an toàn.",
      "Phải đội mũ bảo hiểm khi cảm thấy mất an toàn giao thông hoặc khi chuẩn bị di chuyển quãng đường xa."
    ],
    "chapter": 1
  },
  {
    "id": 63,
    "question": "Thứ tự xuống phà như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Xe thô sơ, người đi bộ xuống trước, xe cơ giới, xe máy chuyên dùng xuống sau.",
      "Xe cơ giới, xe máy chuyên dùng xuống trước, xe thô sơ, người đi bộ xuống sau.",
      "Xe cơ giới, xe thô sơ xuống trước, xe máy chuyên dùng, người đi bộ xuống sau.",
      "cùng, xe cơ giới, xe máy chuyên dùng được đi trên tất cả các làn đường."
    ],
    "chapter": 1
  },
  {
    "id": 64,
    "question": "Khi lái xe trong đô thị và khu đông dân cư trong thời gian từ 22 giờ ngày hôm trước đến 05 giờ ngày hôm sau, nếu cần vượt một xe khác, người lái xe phải báo hiệu như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Chỉ được báo hiệu bằng còi.",
      "Phải báo hiệu bằng cả còi và đèn.",
      "Chỉ được báo hiệu bằng đèn."
    ],
    "chapter": 1
  },
  {
    "id": 65,
    "question": "Khi điều khiển xe chạy trên đường, biết có xe sau xin vượt, nếu đủ điều kiện an toàn người điều khiển phương tiện phải làm gì?",
    "options": [
      "Tăng tốc độ và ra hiệu cho xe sau vượt, không được gây trở ngại cho xe xin vượt.",
      "Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.",
      "Cho xe đi sát về bên trái của phần đường xe chạy và ra hiệu cho xe sau vượt, không được gây trở ngại cho xe xin vượt."
    ],
    "chapter": 1
  },
  {
    "id": 66,
    "question": "Trên đường không phân chia thành hai chiều xe chạy riêng biệt, người điều khiển phương tiện tham gia giao thông đường bộ phải tránh xe đi ngược chiều như thế nào để bảo đảm an toàn?",
    "options": [
      "Giảm tốc độ và cho xe đi về bên phải theo chiều xe chạy của mình.",
      "Một trong hai xe phải dừng lại cho xe kia đi qua mới được đi.",
      "Tăng tốc độ, cho xe đi về bên phải theo chiều xe chạy của mình để nhanh chóng vượt qua."
    ],
    "chapter": 1
  },
  {
    "id": 67,
    "question": "Khi tránh xe đi ngược chiều, các xe phải nhường đường như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Nơi đường hẹp chỉ đủ cho một xe chạy và có chỗ tránh xe thì xe nào ở gần chỗ tránh hơn phải vào vị trí tránh, nhường đường cho xe đi ngược chiều.",
      "Xe xuống dốc phải nhường đường cho xe lên dốc.",
      "Xe có chướng ngại vật phía trước phải nhường đường cho xe không có chướng ngại vật phía trước.",
      "Cả ba ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 68,
    "question": "Người lái xe phải làm gì để bảo đảm an toàn khi lái xe trên đường cong có tầm nhìn bị hạn chế?",
    "options": [
      "Quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn.",
      "Đi sang làn đường của xe ngược chiều để mở rộng tầm nhìn và vượt xe khác.",
      "Cho xe đi sát bên phải làn đường, bật tín hiệu báo hiệu để vượt bên phải xe khác."
    ],
    "chapter": 1
  },
  {
    "id": 69,
    "question": "Tại nơi đường giao nhau, người lái xe đang đi trên đường không ưu tiên, đường nhánh phải nhường đường như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Nhường đường cho xe đi ở bên phải mình tới.",
      "Nhường đường cho xe đi ở bên trái mình tới.",
      "Nhường đường cho xe đi trên đường ưu tiên hoặc đường chính từ bất kỳ hướng nào tới."
    ],
    "chapter": 1
  },
  {
    "id": 70,
    "question": "Tại nơi đường giao nhau có báo hiệu đi theo vòng xuyến, người lái xe phải nhường đường như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Nhường đường cho xe đi đến từ bên phải.",
      "Nhường đường cho xe đi đến từ bên trái.",
      "Không phải nhường đường."
    ],
    "chapter": 1
  },
  {
    "id": 71,
    "question": "Tại nơi đường giao nhau không có báo hiệu đi theo vòng xuyến, người điều khiển phương tiện phải nhường đường như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Phải nhường đường cho xe đi đến từ bên phải.",
      "Xe báo hiệu xin đường trước, xe đó được đi trước.",
      "Phải nhường đường cho xe đi đến từ bên trái."
    ],
    "chapter": 1
  },
  {
    "id": 72,
    "question": "Người lái xe phải nhanh chóng giảm tốc độ, đi sát lề đường bên phải hoặc dừng lại để nhường đường cho các loại xe nào dưới đây?",
    "options": [
      "Xe chữa cháy của Cảnh sát phòng cháy, chữa cháy và cứu nạn, cứu hộ và xe chữa cháy của các lực lượng khác; xe của lực lượng quân sự, công an và kiểm sát; đoàn xe có xe Cảnh sát giao thông dẫn đường; xe cứu thương; xe hộ đê không có tín hiệu ưu tiên theo quy định.",
      "Xe ưu tiên gồm xe chữa cháy của Cảnh sát phòng cháy, chữa cháy và cứu nạn, cứu hộ và xe chữa cháy của các lực lượng khác được huy động đi làm nhiệm vụ chữa cháy; xe của lực lượng quân sự, công an và kiểm sát đi làm nhiệm vụ khẩn cấp; đoàn xe có xe Cảnh sát giao thông dẫn đường; xe cứu thương đi làm nhiệm vụ cấp cứu; xe hộ đê đi làm nhiệm vụ; xe đi làm nhiệm vụ cứu nạn, cứu hộ, khắc phục sự cố thiên tai, dịch bệnh hoặc xe đi làm nhiệm vụ trong tình trạng khẩn cấp theo quy định của pháp luật; đoàn xe tang.",
      "Xe ô tô, xe máy, đoàn xe đang diễu hành có tổ chức có báo tín hiệu xin vượt bằng còi và đèn."
    ],
    "chapter": 1
  },
  {
    "id": 73,
    "question": "Khi có tín hiệu của xe ưu tiên, người và phương tiện tham gia giao thông đường bộ phải tuân thủ quy định nào dưới đây?",
    "options": [
      "Giảm tốc độ, đi sát lề đường bên phải hoặc dừng lại để nhường đường.",
      "Tăng tốc độ và đi sát lề đường bên phải để nhường đường.",
      "Giảm tốc độ, đi sát lề đường bên trái để nhường đường."
    ],
    "chapter": 1
  },
  {
    "id": 74,
    "question": "Khi đang lái xe, phía trước có một xe Cảnh sát giao thông không phát tín hiệu ưu tiên, người lái xe có được phép vượt hay không?",
    "options": [
      "Không được vượt.",
      "Được phép vượt ở phần đường dành cho người đi bộ qua đường.",
      "Được vượt khi bảo đảm an toàn."
    ],
    "chapter": 1
  },
  {
    "id": 75,
    "question": "Khi đang lái xe, phía trước có một xe cứu thương đang phát tín hiệu ưu tiên, người lái xe có được phép vượt hay không?",
    "options": [
      "Không được vượt.",
      "Được vượt khi đang đi trên cầu.",
      "Được phép vượt khi đi qua nơi giao nhau có ít phương tiện cùng tham gia giao thông.",
      "Được vượt khi bảo đảm an toàn."
    ],
    "chapter": 1
  },
  {
    "id": 76,
    "question": "Khi tới đường ngang không có người gác, chắn đường bộ, chuông, đèn tín hiệu, người tham gia giao thông đường bộ phải làm gì để bảo đảm an toàn?",
    "options": [
      "Dừng lại về bên phải đường của mình, trước vạch dừng xe và quan sát hai phía, khi không có phương tiện giao thông đường sắt tới mới được đi qua.",
      "Quan sát hai phía, khi không có phương tiện giao thông đường sắt tới thì nhanh chóng đi qua.",
      "Dừng lại khoảng cách tối thiểu 3 mét tính từ ray đường sắt gần nhất, khi không có phương tiện giao thông đường sắt tới thì nhanh chóng đi qua."
    ],
    "chapter": 1
  },
  {
    "id": 77,
    "question": "Tại đường ngang, cầu chung đường sắt, khi có hiệu lệnh của nhân viên gác chắn, đèn đỏ sáng nhấp nháy, chuông kêu, chắn đường bộ đang dịch chuyển hoặc đã đóng, người tham gia giao thông đường bộ phải làm gì để bảo đảm an toàn?",
    "options": [
      "Dừng lại về bên trái đường của mình, trước vạch dừng xe.",
      "Dừng lại giữa đường của mình, trước vạch dừng xe.",
      "Dừng lại về bên phải đường của mình, trước vạch dừng xe."
    ],
    "chapter": 1
  },
  {
    "id": 78,
    "question": "Người tham gia giao thông đường bộ phải dừng lại về bên phải đường của mình trước vạch dừng xe tại đường ngang, cầu chung đường sắt khi có báo hiệu nào dưới đây?",
    "options": [
      "Hiệu lệnh của nhân viên gác chắn.",
      "Đèn đỏ sáng nhấp nháy, chuông kêu.",
      "Chắn đường bộ đang dịch chuyển hoặc đã đóng.",
      "Cả ba ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 79,
    "question": "Người điều khiển phương tiện tham gia giao thông trong hầm đường bộ ngoài việc phải tuân thủ các quy tắc giao thông còn phải thực hiện những quy định nào dưới đây?",
    "options": [
      "Xe cơ giới, xe máy chuyên dùng phải bật đèn chiếu gần; xe thô sơ phải bật đèn hoặc có vật phát sáng báo hiệu; không dừng xe, đỗ xe trong hầm đường bộ; trường hợp gặp sự cố kỹ thuật hoặc bất khả kháng khác buộc phải dừng xe, đỗ xe, người lái xe, người điều khiển xe máy chuyên dùng phải đưa xe vào vị trí dừng xe, đỗ xe khẩn cấp, nếu không di chuyển được, phải có báo hiệu bằng đèn khẩn cấp và đặt biển hoặc đèn cảnh báo về phía sau xe khoảng cách bảo đảm an toàn.",
      "Xe cơ giới, xe máy chuyên dùng phải bật đèn chiếu xa; được dừng xe, đỗ xe khi cần thiết.",
      "Phải cho xe chạy trên một làn đường và chỉ chuyển làn ở nơi được phép; được quay đầu xe, lùi xe khi cần thiết."
    ],
    "chapter": 1
  },
  {
    "id": 80,
    "question": "Người điều khiển phương tiện tham gia giao thông đường bộ phải quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn trong các trường hợp nào dưới đây?",
    "options": [
      "Có báo hiệu cảnh báo nguy hiểm hoặc có chướng ngại vật trên đường; chuyển hướng xe chạy hoặc tầm nhìn bị hạn chế.",
      "Nơi cầu, cống hẹp, đập tràn, đường ngầm, hầm chui, hầm đường bộ; có vật nuôi đi trên đường hoặc chăn thả ở ven đường.",
      "Điểm dừng xe, đỗ xe trên đường bộ có khách đang lên, xuống xe.",
      "Cả ba ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 81,
    "question": "Người lái xe được phép vượt xe khác về bên phải trong trường hợp nào dưới đây?",
    "options": [
      "Xe phía trước có tín hiệu rẽ trái hoặc đang rẽ trái hoặc khi xe chuyên dùng đang làm việc trên đường mà không thể vượt bên trái.",
      "Xe phía trước đang đi sát lề đường bên trái.",
      "Cả hai ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 82,
    "question": "Khi có xe xin vượt, người lái xe mô tô xử lý như thế nào nếu đủ điều kiện an toàn cho xe phía sau vượt?",
    "options": [
      "Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.",
      "Lái xe vào lề đường bên trái và giảm tốc độ để xe phía sau vượt qua, không được gây trở ngại đối với xe xin vượt.",
      "Tăng tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua."
    ],
    "chapter": 1
  },
  {
    "id": 83,
    "question": "Những trường hợp nào dưới đây không được đi trên đường cao tốc, trừ người, phương tiện giao thông đường bộ và thiết bị phục vụ việc quản lý, bảo trì đường cao tốc?",
    "options": [
      "Xe máy chuyên dùng có tốc độ thiết kế nhỏ hơn tốc độ tối thiểu quy định đối với đường cao tốc, xe chở người bốn bánh có gắn động cơ, xe chở hàng bốn bánh có gắn động cơ, xe mô tô, xe gắn máy, các loại xe tương tự xe mô tô, xe gắn máy, xe thô sơ, người đi bộ.",
      "Xe máy chuyên dùng có tốc độ thiết kế lớn hơn tốc độ tối thiểu quy định đối với đường cao tốc.",
      "Xe ô tô và xe máy chuyên dùng có tốc độ thiết kế lớn hơn 80 km/h."
    ],
    "chapter": 1
  },
  {
    "id": 84,
    "question": "Theo quy định về độ tuổi, người đủ bao nhiêu tuổi trở lên thì được cấp giấy phép lái xe mô tô hai bánh có dung tích xi lanh đến 125 cm3 và xe ô tô chở người đến 8 chỗ (không kể chỗ của người lái xe); xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế đến 3.500 kg?",
    "options": [
      "16 tuổi.",
      "17 tuổi",
      "18 tuổi."
    ],
    "chapter": 1
  },
  {
    "id": 85,
    "question": "Người đủ 16 tuổi đến dưới 18 tuổi chỉ được điều khiển các loại xe nào dưới đây?",
    "options": [
      "Xe mô tô hai bánh có dung tích xi-lanh đến 125 cm3 .",
      "Xe gắn máy.",
      "Xe ô tô chở người đến 08 chỗ (không kể chỗ của người lái xe); xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế đến 3.500 kg; các loại xe ô tô quy định cho giấy phép lái xe hạng B kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
      "Cả ba ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 86,
    "question": "Người có Giấy phép lái xe mô tô hạng A1 không được phép điều khiển loại xe nào dưới đây?",
    "options": [
      "Xe mô tô hai bánh có dung tích xi-lanh 125 cm3 hoặc có công suất động cơ điện đến 11 kW.",
      "Xe mô tô ba bánh.",
      "Cả hai ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 87,
    "question": "Người có Giấy phép lái xe mô tô hạng A1 được cấp sau ngày 01/01/2025 được phép điều khiển loại xe nào dưới đây?",
    "options": [
      "Xe mô tô hai bánh có dung tích xi-lanh đến 125 cm3 hoặc có công suất động cơ điện đến 11 kW.",
      "Xe mô tô ba bánh.",
      "Cả hai ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 88,
    "question": "Người có Giấy phép lái xe mô tô hạng A được phép điều khiển loại xe nào dưới đây?",
    "options": [
      "Xe mô tô hai bánh có dung tích xi-lanh đến 125 cm3 hoặc có công suất động cơ điện đến 11 kW.",
      "Xe mô tô hai bánh có dung tích xi-lanh trên 125 cm3 hoặc có công suất động cơ điện trên 11 kW.",
      "Cả hai ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 89,
    "question": "Người lái xe khi tham gia giao thông đường bộ phải đảm bảo các điều kiện nào dưới đây?",
    "options": [
      "Phải đủ tuổi, sức khỏe theo quy định của pháp luật; có giấy phép lái xe đang còn điểm, còn hiệu lực phù hợp với loại xe đang điều khiển do cơ quan có thẩm quyền cấp (trừ người lái xe gắn máy).",
      "Phải là người đứng tên trong đăng ký xe.",
      "Cả hai ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 90,
    "question": "Khi tham gia giao thông đường bộ, người lái xe phải mang theo các giấy tờ gì?",
    "options": [
      "Chứng nhận đăng ký xe hoặc bản sao Chứng nhận đăng ký xe có chứng thực kèm bản gốc giấy tờ xác nhận của tổ chức tín dụng, chi nhánh ngân hàng nước ngoài còn hiệu lực trong trường hợp xe đang được thế chấp tại tổ chức tín dụng, chi nhánh ngân hàng nước ngoài.",
      "Giấy phép lái xe phù hợp với loại xe đang điều khiển; chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường đối với xe cơ giới theo quy định của pháp luật; chứng nhận bảo hiểm bắt buộc trách nhiệm dân sự của chủ xe cơ giới.",
      "Trường hợp các giấy tờ nêu trên đã được tích hợp vào tài khoản định danh điện tử thì việc xuất trình, kiểm tra có thể thực hiện thông qua tài khoản định danh điện tử.",
      "Cả ba ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 91,
    "question": "Người có giấy phép lái xe chưa bị trừ hết 12 điểm, được phục hồi điểm giấy phép lái xe trong trường hợp nào sau đây?",
    "options": [
      "Không được phục hồi.",
      "Được phục hồi đủ 12 điểm, nếu không bị trừ điểm trong thời hạn 12 tháng từ ngày bị trừ điểm gần nhất."
    ],
    "chapter": 1
  },
  {
    "id": 92,
    "question": "Người có giấy phép lái xe đã bị trừ hết điểm phải làm gì để phục hồi điểm giấy phép lái xe?",
    "options": [
      "Không vi phạm pháp luật trật tự, an toàn giao thông đường bộ trong thời gian 12 tháng kể từ ngày bị trừ hết điểm.",
      "Sau thời hạn ít nhất là 06 tháng kể từ ngày bị trừ hết điểm, người có phép lái xe được tham gia kiểm tra nội dung kiến thức pháp luật về trật tự, an toàn giao thông đường bộ theo quy định, có kết quả đạt yêu cầu thì được phục hồi đủ 12 điểm.",
      "Cả hai ý trên."
    ],
    "chapter": 1
  },
  {
    "id": 93,
    "question": "Trách nhiệm của tổ chức, cá nhân đứng tên trong giấy chứng nhận đăng ký xe khi chưa thực hiện thu hồi chứng nhận đăng ký xe, biển số xe được quy định như thế nào?",
    "options": [
      "Tiếp tục chịu trách nhiệm của chủ xe.",
      "Không chịu trách nhiệm sau khi đã chuyển nhượng, trao đổi, tặng, cho."
    ],
    "chapter": 1
  },
  {
    "id": 94,
    "question": "Trên đường bộ, trong khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên, xe mô tô hai bánh, ô tô chở người đến 28 chỗ không kể chỗ của người lái xe tham gia giao thông với tốc độ khai thác tối đa cho phép là bao nhiêu?",
    "options": [
      "60 km/h.",
      "50 km/h.",
      "40 km/h."
    ],
    "chapter": 1
  },
  {
    "id": 95,
    "question": "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới, xe mô tô hai bánh, ô tô chở người đến 28 chỗ không kể chỗ của người lái xe tham gia giao thông với tốc độ khai thác tối đa cho phép là bao nhiêu?",
    "options": [
      "60 km/h.",
      "50 km/h.",
      "40 km/h."
    ],
    "chapter": 1
  },
  {
    "id": 96,
    "question": "Trên đường bộ ngoài khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên (trừ đường cao tốc) loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 70 km/h?",
    "options": [
      "Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
      "Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
      "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
      "Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc."
    ],
    "chapter": 1
  },
  {
    "id": 97,
    "question": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 60 km/h?",
    "options": [
      "Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
      "Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
      "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
      "Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc."
    ],
    "chapter": 1
  },
  {
    "id": 98,
    "question": "Người lái xe phải giảm tốc độ thấp hơn tốc độ tối đa cho phép đến mức cần thiết, chú ý quan sát và chuẩn bị sẵn sàng những tình huống có thể xảy ra để phòng ngừa tai nạn trong các trường hợp nào dưới đây?",
    "options": [
      "Gặp biển báo nguy hiểm và cảnh báo trên đường.",
      "Gặp biển chỉ dẫn trên đường.",
      "Gặp biển báo hết mọi lệnh cấm.",
      "Gặp biển báo hết hạn chế tốc độ tối đa cho phép."
    ],
    "chapter": 1
  },
  {
    "id": 99,
    "question": "Khi gặp xe buýt đang dừng đón, trả khách, người điều khiển xe mô tô phải xử lý như thế nào dưới đây?",
    "options": [
      "Tăng tốc độ để nhanh chóng vượt qua xe buýt.",
      "Quan sát, giảm tốc độ đi qua xe buýt hoặc dừng lại để bảo đảm an toàn."
    ],
    "chapter": 1
  },
  {
    "id": 100,
    "question": "Việc sử dụng xe mô tô, xe gắn máy, xe thô sơ để vận chuyển hành khách, hàng hóa phải thực hiện các quy định nào dưới đây để đảm bảo an toàn giao thông?",
    "options": [
      "Kiểm tra điều kiện bảo đảm an toàn của xe trước khi tham gia giao thông đường bộ; mang đủ giấy tờ theo quy định của pháp luật.",
      "Kiểm tra việc sắp xếp hàng hóa bảo đảm an toàn; không chở quá số người, chở hành lý, hàng hoá vượt quá khối lượng cho phép hoặc vượt quá khổ giới hạn của xe.",
      "Cả hai ý trên. CHƯƠNG II. VĂN HÓA GIAO THÔNG, ĐẠO ĐỨC NGƯỜI LÁI XE, KỸ NĂNG PHÒNG CHÁY, CHỮA CHÁY VÀ CỨU HỘ, CỨU NẠN"
    ],
    "chapter": 1
  },
  {
    "id": 101,
    "question": "Những hành vi nào sau đây thể hiện là người có văn hóa giao thông?",
    "options": [
      "Luôn tuân thủ pháp luật về trật tự, an toàn giao thông đường bộ, nhường nhịn và giúp đỡ người khác.",
      "Đi nhanh, vượt đèn đỏ nếu không có lực lượng Công an.",
      "Bấm còi và nháy đèn liên tục để cảnh báo xe khác.",
      "Tránh nhường đường để đi nhanh hơn."
    ],
    "chapter": 2
  },
  {
    "id": 102,
    "question": "Khái niệm về văn hóa giao thông được hiểu như thế nào là đúng?",
    "options": [
      "Là sự hiểu biết và chấp hành nghiêm chỉnh pháp luật về giao thông, là ý thức trách nhiệm với cộng đồng khi tham gia giao thông.",
      "Là sự tôn trọng, nhường nhịn, giúp đỡ và ứng xử có văn hóa giữa những người tham gia giao thông với nhau.",
      "Cả hai ý trên."
    ],
    "chapter": 2
  },
  {
    "id": 103,
    "question": "Người lái xe không điều khiển xe đi đúng làn đường quy định, phóng nhanh, vượt ẩu, vượt đèn đỏ, đi vào đường cấm được coi là hành vi nào trong các hành vi dưới đây?",
    "options": [
      "Là thiếu văn hóa giao thông, vi phạm pháp luật về trật tự, an toàn giao thông đường bộ.",
      "Là thiếu văn hóa giao thông."
    ],
    "chapter": 2
  },
  {
    "id": 104,
    "question": "Người lái xe có văn hóa giao thông khi tham gia giao thông đường bộ phải đáp ứng các điều kiện nào dưới đây?",
    "options": [
      "Hiểu biết và chấp hành nghiêm chỉnh pháp luật về giao thông đường bộ; có ý thức trách nhiệm với cộng đồng khi tham gia giao thông; tôn trọng, nhường nhịn, giúp đỡ và ứng xử có văn hóa với những người cùng tham gia giao thông.",
      "Điều khiển xe vượt quá tốc độ, đi không đúng làn đường."
    ],
    "chapter": 2
  },
  {
    "id": 105,
    "question": "Người lái xe mô tô có văn hóa giao thông khi tham gia giao thông phải tuân thủ những quy định nào dưới đây?",
    "options": [
      "Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; đội mũ bảo hiểm đúng quy chuẩn kỹ thuật quốc gia, cài quai đúng quy cách.",
      "Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông.",
      "Điều khiển xe và đội mũ bảo hiểm ở nơi có biển báo bắt buộc đội mũ bảo hiểm."
    ],
    "chapter": 2
  },
  {
    "id": 106,
    "question": "Trong các hành vi dưới đây, người lái xe có văn hóa giao thông phải ứng xử như thế nào?",
    "options": [
      "Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; dừng, đỗ xe đúng nơi quy định; đã uống rượu, bia thì không lái xe.",
      "Điều khiển xe đi trên phần đường, làn đường có ít phương tiện giao thông; dừng xe, đỗ xe ở nơi thuận tiện hoặc theo yêu cầu của hành khách, của người thân.",
      "Dừng và đỗ xe ở nơi thuận tiện cho việc chuyên chở hành khách và giao nhận hàng hóa; sử dụng ít rượu, bia thì có thể lái xe."
    ],
    "chapter": 2
  },
  {
    "id": 107,
    "question": "Khi tham gia giao thông việc sử dụng còi xe nên dùng như thế nào để thể hiện là người có văn hóa giao thông?",
    "options": [
      "Chỉ bấm còi khi thật sự cần thiết, không bấm còi liên tục hoặc kéo dài, sử dụng còi với mức âm lượng theo quy định.",
      "Bấm còi liên tục để các xe khác nhường đường.",
      "Bấm còi to khi đi qua khu vực đông dân cư.",
      "Không cần dùng còi, tránh gây tiếng ồn là văn minh."
    ],
    "chapter": 2
  },
  {
    "id": 108,
    "question": "Người điều khiển phương tiện tham giao thông đường bộ gây ra tai nạn giao thông đường bộ, người liên quan đến vụ tai nạn giao thông đường bộ có trách nhiệm gì dưới đây?",
    "options": [
      "Dừng ngay phương tiện, cảnh báo nguy hiểm, giữ nguyên hiện trường, trợ giúp người bị nạn và báo tin cho cơ quan Công an, cơ sở khám bệnh, chữa bệnh.",
      "Ở lại hiện trường vụ tai nạn giao thông đường bộ cho đến khi người của cơ quan Công an đến, trừ trường hợp phải đi cấp cứu, đưa người bị nạn đi cấp cứu hoặc xét thấy bị đe dọa đến tính mạng, sức khỏe nhưng phải đến trình báo ngay cơ quan Công an, Ủy ban nhân dân nơi gần nhất.",
      "Cung cấp thông tin xác định danh tính về bản thân, người liên quan đến vụ tai nạn giao thông đường bộ và thông tin liên quan của vụ tai nạn giao thông đường bộ cho cơ quan có thẩm quyền.",
      "Cả ba ý trên."
    ],
    "chapter": 2
  },
  {
    "id": 109,
    "question": "Người có mặt tại nơi xảy ra vụ tai giao thông đường bộ có trách nhiệm gì dưới đây?",
    "options": [
      "Giúp đỡ, cứu chữa kịp thời người bị nạn; báo tin ngay cho cơ quan Công an, cơ sở khám bệnh, chữa bệnh hoặc Ủy ban nhân dân nơi gần nhất; tham gia bảo vệ hiện trường; tham gia bảo vệ tài sản của người bị nạn; cung cấp thông tin liên quan về vụ tai nạn theo yêu cầu của cơ quan có thẩm quyền.",
      "Chụp lại hình ảnh vụ tai nạn (nếu có thiết bị ghi hình) và nhanh chóng rời khỏi hiện trường vụ tai nạn."
    ],
    "chapter": 2
  },
  {
    "id": 110,
    "question": "Trong đoạn đường hai chiều tại khu đông dân cư đang ùn tắc, người điều khiển xe mô tô có văn hóa giao thông sẽ lựa chọn cách xử lý tình huống nào dưới đây?",
    "options": [
      "Cho xe lấn sang làn ngược chiều để nhanh chóng thoát khỏi nơi ùn tắc.",
      "Điều khiển xe trên vỉa hè để nhanh chóng thoát khỏi nơi ùn tắc.",
      "Kiên nhẫn tuân thủ hướng dẫn của người điều khiển giao thông hoặc tín hiệu đèn giao thông, di chuyển trên đúng phần đường bên phải theo chiều đi, nhường đường cho các phương tiện đi ngược chiều. CHƯƠNG III. KỸ THUẬT LÁI XE"
    ],
    "chapter": 2
  },
  {
    "id": 111,
    "question": "Khi điều khiển xe mô tô tay ga xuống đường dốc dài, độ dốc cao, người lái xe cần thực hiện các thao tác nào dưới đây để bảo đảm an toàn?",
    "options": [
      "Giữ tay ga ở mức độ phù hợp, sử dụng phanh trước và phanh sau để giảm tốc độ.",
      "Nhả hết tay ga, tắt động cơ, sử dụng phanh trước và phanh sau để giảm tốc độ.",
      "Sử dụng phanh trước để giảm tốc độ kết hợp với tắt chìa khóa điện của xe."
    ],
    "chapter": 3
  },
  {
    "id": 112,
    "question": "Khi điều khiển xe trên đường vòng người lái xe cần phải làm gì để bảo đảm an toàn?",
    "options": [
      "Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng coi, đèn; giảm tốc độ tới mức cần thiết, về số thấp và thực hiện quay vòng với tốc độ phù hợp với bán kính cong của đường vòng.",
      "Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng còi, đèn; tăng tốc để nhanh chóng qua đường vòng và giảm tốc độ sau khi qua đường vòng."
    ],
    "chapter": 3
  },
  {
    "id": 113,
    "question": "Khi điều khiển xe qua đường sắt, người lái xe cần phải thực hiện các thao tác nào dưới đây để bảo đảm an toàn?",
    "options": [
      "Khi có chuông báo hoặc thanh chắn đã hạ xuống, người lái xe phải dừng xe tạm thời đúng khoảng cách an toàn, kéo phanh tay nếu đường dốc hoặc phải chờ lâu.",
      "Khi không có chuông báo hoặc thanh chắn không hạ xuống, người lái xe cần phải quan sát nếu thấy đủ điều kiện an toàn thì về số thấp, tăng ga nhẹ và không thay đổi số trong quá trình vượt qua đường sắt để tránh động cơ chết máy cho xe cho vượt qua.",
      "Cả hai ý trên."
    ],
    "chapter": 3
  },
  {
    "id": 114,
    "question": "Trong các loại nhiên liệu dưới đây, loại nhiên liệu nào giảm thiểu ô nhiễm môi trường?",
    "options": [
      "Xăng và dầu diesel.",
      "Xăng sinh học và khí sinh học.",
      "Ý 1 và ý 2."
    ],
    "chapter": 3
  },
  {
    "id": 115,
    "question": "Các biện pháp tiết kiệm nhiên liệu khi chạy xe?",
    "options": [
      "Bảo dưỡng xe theo định kỳ và có kế hoạch lộ trình trước khi xe chạy.",
      "Kiểm tra áp suất lốp theo quy định và chạy xe với tốc độ phù hợp với tình trạng mặt đường và mật độ giao thông trên đường.",
      "Cả hai ý trên."
    ],
    "chapter": 3
  },
  {
    "id": 116,
    "question": "Khi tầm nhìn bị hạn chế bởi sương mù hoặc mưa to, người lái xe phải thực hiện các thao tác nào để bảo đảm an toàn?",
    "options": [
      "Tăng tốc độ, chạy gần xe trước, nhìn đèn hậu để định hướng.",
      "Giảm tốc độ, chạy cách xa xe trước với khoảng cách an toàn, bật đèn sương mù và đèn chiếu gần.",
      "Tăng tốc độ, bật đèn pha vượt qua xe chạy trước."
    ],
    "chapter": 3
  },
  {
    "id": 117,
    "question": "Khi đèn pha của xe đi ngược chiều gây chói mắt, làm giảm khả năng quan sát trên đường, người lái xe xử lý như thế nào dưới đây để bảo đảm an toàn?",
    "options": [
      "Giảm tốc độ, giữ vững tay lái, nhìn chếch sang lề đường bên phải.",
      "Bật đèn pha chiếu xa và giữ nguyên tốc độ.",
      "Tăng tốc độ, bật đèn pha đối diện xe phía trước."
    ],
    "chapter": 3
  },
  {
    "id": 118,
    "question": "Để đạt được hiệu quả phanh cao nhất, người lái xe mô tô phải sử dụng các kỹ năng như thế nào dưới đây?",
    "options": [
      "Sử dụng phanh trước.",
      "Sử dụng phanh sau.",
      "Giảm hết ga, sử dụng đồng thời cả phanh sau và phanh trước."
    ],
    "chapter": 3
  },
  {
    "id": 119,
    "question": "Khi đang lái xe mô tô hoặc ô tô, nếu có nhu cầu sử dụng điện thoại để nhắn tin hoặc gọi điện, người lái xe phải thực hiện như thế nào trong các tình huống nêu dưới đây?",
    "options": [
      "Giảm tốc độ để bảo đảm an toàn với xe phía trước và sử dụng điện thoại để liên lạc.",
      "Giảm tốc độ để dừng xe ở nơi cho phép sau đó sử dụng điện thoại để liên lạc.",
      "Tăng tốc độ để cách xa xe phía sau và sử dụng điện thoại để liên lạc."
    ],
    "chapter": 3
  },
  {
    "id": 120,
    "question": "Những thói quen nào dưới đây khi điều khiển xe mô tô tay ga tham gia giao thông dễ gây tai nạn nguy hiểm?",
    "options": [
      "Sử dụng còi.",
      "Phanh đồng thời cả phanh trước và phanh sau.",
      "Chỉ sử dụng phanh trước."
    ],
    "chapter": 3
  },
  {
    "id": 121,
    "question": "Khi điều khiển xe mô tô quay đầu, người lái xe cần thực hiện như thế nào để bảo đảm an toàn?",
    "options": [
      "Bật tín hiệu báo rẽ trước khi quay đầu, từ từ giảm tốc độ đến mức có thể dừng lại.",
      "Chỉ quay đầu xe tại những nơi được phép quay đầu.",
      "Quan sát an toàn các phương tiện tới từ phía trước, phía sau, hai bên đồng thời nhường đường cho xe từ bên phải và phía trước đi tới.",
      "Cả ba ý trên."
    ],
    "chapter": 3
  },
  {
    "id": 122,
    "question": "Tay ga trên xe mô tô hai bánh có tác dụng gì dưới đây?",
    "options": [
      "Để điều khiển xe chạy về phía trước.",
      "Để điều tiết công suất động cơ qua đó điều khiển tốc độ của xe.",
      "Để điều khiển xe chạy lùi.",
      "Ý 1 và ý 2."
    ],
    "chapter": 3
  },
  {
    "id": 123,
    "question": "Gương chiếu hậu của xe mô tô hai bánh có tác dụng gì dưới đây?",
    "options": [
      "Để quan sát an toàn phía bên trái khi chuẩn bị rẽ trái.",
      "Để quan sát an toàn phía bên phải khi chuẩn bị rẽ phải.",
      "Để quan sát an toàn phía sau của bên trái và bên phải trước khi chuyển hướng.",
      "Để quan sát an toàn phía trước cả bên trái và bên phải trước khi chuyển hướng."
    ],
    "chapter": 3
  },
  {
    "id": 124,
    "question": "Để bảo đảm an toàn khi tham gia giao thông, người lái xe mô tô hai bánh cần điều khiển tay ga như thế nào?",
    "options": [
      "Tăng ga thật mạnh, giảm ga từ từ.",
      "Tăng ga thật mạnh, giảm ga thật nhanh.",
      "Tăng ga từ từ, giảm ga thật nhanh.",
      "Tăng ga từ từ, giảm ga từ từ."
    ],
    "chapter": 3
  },
  {
    "id": 125,
    "question": "Để tránh đổ, ngã khi điều khiển xe mô tô hai bánh ở nơi đường xấu, nhỏ và hẹp, người lái xe cần xử lý như thế nào?",
    "options": [
      "Đi ở tốc độ thấp, quan sát liên tục khoảng cách từ 05 m đến 10 m phía trước để điều chỉnh sớm hướng di chuyển.",
      "Trong quá trình di chuyển không nên dùng phanh trước tránh làm khóa bánh dẫn hướng.",
      "Không được lắc người sang trái hoặc phải nhiều, trọng tâm cơ thể cần trùng với trọng tâm của xe.",
      "Cả ba ý trên."
    ],
    "chapter": 3
  },
  {
    "id": 126,
    "question": "Biển nào cấm máy kéo?",
    "options": [
      "Biển 1.",
      "Biển 2 và biển 3.",
      "Biển 1 và biển 3.",
      "Cả ba biển."
    ],
    "chapter": 4
  },
  {
    "id": 127,
    "question": "Biển nào báo hiệu cấm xe mô tô ba bánh chở hàng đi qua?",
    "options": [
      "Biển 1 và biển 2.",
      "Biển 1 và biển 3.",
      "Biển 2 và biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 128,
    "question": "Biển nào dưới đây xe gắn máy được phép đi vào?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "chapter": 4
  },
  {
    "id": 129,
    "question": "Biển nào báo hiệu cấm xe mô tô đi vào?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 130,
    "question": "Khi gặp biển nào thì xe mô tô hai bánh được đi vào?",
    "options": [
      "Không biển nào.",
      "Biển 1 và biển 2.",
      "Biển 2 và biển 3.",
      "Cả ba biển."
    ],
    "chapter": 4
  },
  {
    "id": 131,
    "question": "Biển nào cấm quay đầu xe?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Không biển nào.",
      "Cả hai biển."
    ],
    "chapter": 4
  },
  {
    "id": 132,
    "question": "Biển nào cấm xe rẽ trái?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "chapter": 4
  },
  {
    "id": 133,
    "question": "Khi gặp biển nào xe được rẽ trái?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Không biển nào."
    ],
    "chapter": 4
  },
  {
    "id": 134,
    "question": "Biển nào cấm các phương tiện rẽ phải?",
    "options": [
      "Biển 1 và biển 2.",
      "Biển 1 và biển 3.",
      "Biển 2 và biển 3.",
      "Cả ba biển."
    ],
    "chapter": 4
  },
  {
    "id": 135,
    "question": "Biển nào cấm các phương tiện rẽ trái?",
    "options": [
      "Biển 1 và biển 2.",
      "Biển 1 và biển 3.",
      "Biển 2 và biển 3.",
      "Cả ba biển."
    ],
    "chapter": 4
  },
  {
    "id": 136,
    "question": "Biển nào xe được phép rẽ trái?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Không biển nào."
    ],
    "chapter": 4
  },
  {
    "id": 137,
    "question": "Biển nào xe quay đầu không bị cấm?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "chapter": 4
  },
  {
    "id": 138,
    "question": "Biển nào xe được phép quay đầu nhưng không được rẽ trái?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "chapter": 4
  },
  {
    "id": 139,
    "question": "Biển nào là biển \"Cấm đi ngược chiều\"?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả ba biển."
    ],
    "chapter": 4
  },
  {
    "id": 140,
    "question": "Biển nào dưới đây các phương tiện không được phép đi vào?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 1 và biển 2.",
      "Biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 141,
    "question": "Khi gặp biển nào xe ưu tiên theo luật định vẫn phải dừng lại?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả ba biển."
    ],
    "chapter": 4
  },
  {
    "id": 142,
    "question": "Biển nào cấm tất cả các loại xe cơ giới và thô sơ đi lại trên đường, trừ xe ưu tiên theo luật định (nếu đường vẫn cho xe chạy được)?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "chapter": 4
  },
  {
    "id": 143,
    "question": "Biển báo này có ý nghĩa như thế nào?",
    "options": [
      "Tốc độ tối đa cho phép về ban đêm cho các phương tiện là 70 km/h.",
      "Tốc độ tối thiểu cho phép về ban đêm cho các phương tiện là 70 km/h."
    ],
    "chapter": 4
  },
  {
    "id": 144,
    "question": "Biển này có hiệu lực đối với xe mô tô hai bánh, ba bánh chở hàng không?",
    "options": [
      "Có.",
      "Không."
    ],
    "chapter": 4
  },
  {
    "id": 145,
    "question": "Biển này có ý nghĩa như thế nào?",
    "options": [
      "Cấm xe cơ giới (trừ xe ưu tiên theo luật định) đi thẳng.",
      "Cấm các loại xe cơ giới và xe mô tô (trừ xe ưu tiên theo luật định) đi về bên trái và bên phải.",
      "Hướng trái và phải không cấm xe cơ giới."
    ],
    "chapter": 4
  },
  {
    "id": 146,
    "question": "Biển phụ đặt dưới biển cấm bóp còi có ý nghĩa như thế nào?",
    "options": [
      "Báo khoảng cách đến nơi cấm bóp còi.",
      "Chiều dài đoạn đường cấm bóp còi từ nơi đặt biển.",
      "Báo cấm dùng còi có độ vang xa 500m."
    ],
    "chapter": 4
  },
  {
    "id": 147,
    "question": "Chiều dài đoạn đường 500 m từ nơi đặt biển này, người lái xe có được phép bấm còi không?",
    "options": [
      "Được phép.",
      "Không được phép."
    ],
    "chapter": 4
  },
  {
    "id": 148,
    "question": "Biển nào xe mô tô hai bánh được đi vào?",
    "options": [
      "Biển 1 và biển 2.",
      "Biển 1 và biển 3.",
      "Biển 2 và biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 149,
    "question": "Biển nào xe mô tô hai bánh không được đi vào?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 150,
    "question": "Ba biển này có hiệu lực như thế nào?",
    "options": [
      "Cấm các loại xe ở biển phụ đi vào.",
      "Cấm các loại xe cơ giới đi vào trừ loại xe ở biển phụ."
    ],
    "chapter": 4
  },
  {
    "id": 151,
    "question": "Biển này có ý nghĩa như thế nào?",
    "options": [
      "Cấm dừng xe về hướng bên trái.",
      "Cấm dừng và đỗ xe theo hướng bên phải.",
      "Được phép đỗ xe và dừng xe theo hướng bên phải."
    ],
    "chapter": 4
  },
  {
    "id": 152,
    "question": "Biển nào là biển \"Tốc độ tối đa cho phép về ban đêm\"?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "chapter": 4
  },
  {
    "id": 153,
    "question": "Biển nào báo hiệu hạn chế tốc độ của phương tiện không vượt quá trị số ghi trên biển? 1 2",
    "options": [
      "Biển 1.",
      "Biển 2."
    ],
    "chapter": 4
  },
  {
    "id": 154,
    "question": "Số 50 ghi trên biển báo dưới đây có ý nghĩa như thế nào?",
    "options": [
      "Tốc độ tối đa các xe cơ giới được phép chạy.",
      "Tốc độ tối thiểu các xe cơ giới được phép chạy."
    ],
    "chapter": 4
  },
  {
    "id": 155,
    "question": "Biển báo dưới đây có ý nghĩa như thế nào?",
    "options": [
      "Báo hiệu tốc độ tối đa cho phép các xe cơ giới chạy.",
      "Báo hiệu tốc độ tối thiểu cho phép các xe cơ giới chạy."
    ],
    "chapter": 4
  },
  {
    "id": 156,
    "question": "Gặp biển nào người lái xe phải nhường đường cho người đi bộ?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 157,
    "question": "Biển nào chỉ đường dành cho người đi bộ, các loại xe không được đi vào khi gặp biển này?",
    "options": [
      "Biển 1.",
      "Biển 1 và biển 3.",
      "Biển 3.",
      "Cả ba biển."
    ],
    "chapter": 4
  },
  {
    "id": 158,
    "question": "Biển nào báo hiệu \"Đường dành cho xe thô sơ\"?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 159,
    "question": "Biển nào báo hiệu sắp đến chỗ giao nhau nguy hiểm?",
    "options": [
      "Biển 1.",
      "Biển 1 và biển 2.",
      "Biển 2 và biển 3.",
      "Cả ba biển."
    ],
    "chapter": 4
  },
  {
    "id": 160,
    "question": "Biển nào báo hiệu \"Giao nhau với đường sắt có rào chắn\"?",
    "options": [
      "Biển 1.",
      "Biển 2 và biển 3.",
      "Biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 161,
    "question": "Biển nào báo hiệu \"Giao nhau có tín hiệu đèn\"?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Cả ba biển."
    ],
    "chapter": 4
  },
  {
    "id": 162,
    "question": "Biển nào báo hiệu nguy hiểm giao nhau với đường sắt?",
    "options": [
      "Biển 1 và biển 2.",
      "Biển 1 và biển 3.",
      "Biển 2 và biển 3.",
      "Cả ba biển."
    ],
    "chapter": 4
  },
  {
    "id": 163,
    "question": "Biển nào báo hiệu đường bộ giao nhau với đường sắt không có rào chắn?",
    "options": [
      "Biển 1 và biển 2.",
      "Biển 1 và biển 3.",
      "Biển 2 và biển 3.",
      "Cả ba biển."
    ],
    "chapter": 4
  },
  {
    "id": 164,
    "question": "Biển nào báo hiệu sắp đến chỗ giao nhau giữa đường bộ và đường sắt?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Biển 1 và biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 165,
    "question": "Biển nào báo hiệu \"Cửa chui\"?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 166,
    "question": "Hai biển này có ý nghĩa như thế nào?",
    "options": [
      "Để chỉ nơi đường sắt giao vuông góc với đường bộ không có rào chắn.",
      "Để báo trước sắp đến vị trí giao cắt đường bộ với đường sắt cùng mức, không vuông góc và không có người gác, không có rào chắn.",
      "Nơi đường sắt giao nhau với đường bộ."
    ],
    "chapter": 4
  },
  {
    "id": 167,
    "question": "Biển nào báo hiệu \"Hết đoạn đường ưu tiên\"?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 168,
    "question": "Biển nào báo hiệu, chỉ dẫn xe đi trên đường này được quyền ưu tiên qua nơi giao nhau?",
    "options": [
      "Biển 1 và biển 2.",
      "Biển 1 và biển 3.",
      "Biển 2 và biển 3.",
      "Cả ba biển."
    ],
    "chapter": 4
  },
  {
    "id": 169,
    "question": "Biển nào báo hiệu \"Giao nhau với đường không ưu tiên\"?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Biển 2 và biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 170,
    "question": "Biển nào báo hiệu \"Giao nhau với đường ưu tiên\"?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Cả ba biển."
    ],
    "chapter": 4
  },
  {
    "id": 171,
    "question": "Biển nào báo hiệu \"Đường giao nhau\" của các tuyến đường cùng cấp?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 172,
    "question": "Biển nào báo hiệu \"Đường hai chiều\"?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 173,
    "question": "Biển nào báo hiệu phải giảm tốc độ, nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 174,
    "question": "Biển nào chỉ dẫn \"Được ưu tiên qua đường hẹp\"?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Biển 2 và biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 175,
    "question": "Biển nào báo hiệu \"Đường đôi\"?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 176,
    "question": "Biển nào báo hiệu \"Kết thúc đường đôi\"?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 177,
    "question": "Biển nào báo hiệu \"Giao nhau với đường hai chiều\"?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 178,
    "question": "Biển nào báo hiệu \"Giao nhau với đường hai chiều\"?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 179,
    "question": "Biển nào báo hiệu \"Chú ý chướng ngại vật\"?",
    "options": [
      "Biển 1.",
      "Biển 2 và biển 3.",
      "Cả ba biển."
    ],
    "chapter": 4
  },
  {
    "id": 180,
    "question": "Biển nào báo hiệu \"Đường hầm\"?",
    "options": [
      "Cả ba biển.",
      "Biển 2.",
      "Biển 2 và biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 181,
    "question": "Biển nào dưới đây là biển \"Cầu hẹp\"?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 182,
    "question": "Gặp biển nào người tham gia giao thông phải đi chậm và thận trọng đề phòng khả năng xuất hiện và di chuyển bất ngờ của trẻ em trên mặt đường?",
    "options": [
      "Biển 1.",
      "Biển 2."
    ],
    "chapter": 4
  },
  {
    "id": 183,
    "question": "Biển nào chỉ dẫn nơi bắt đầu đoạn đường dành cho người đi bộ?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 184,
    "question": "Biển nào dưới đây báo hiệu gần đến đoạn đường thường có trẻ em đi ngang qua?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Cả ba biển."
    ],
    "chapter": 4
  },
  {
    "id": 185,
    "question": "Biển nào sau đây là biển \"Dốc xuống nguy hiểm\"?",
    "options": [
      "Biển 1.",
      "Biển 2."
    ],
    "chapter": 4
  },
  {
    "id": 186,
    "question": "Biển báo này có ý nghĩa như thế nào?",
    "options": [
      "Báo hiệu đường có ổ gà, lồi lõm.",
      "Báo hiệu đường có gồ giảm tốc phía trước."
    ],
    "chapter": 4
  },
  {
    "id": 187,
    "question": "Các biển báo này có ý nghĩa như thế nào?",
    "options": [
      "Để báo trước gần tới đoạn đường có hiện tượng đất đá từ trên ta luy dương sụt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường.",
      "Để báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi văng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông.",
      "Để cảnh báo những đoạn nền đường yếu, đoạn đường đang theo dõi lún mà việc vận hành xe ở tốc độ cao có thể gây nguy hiểm."
    ],
    "chapter": 4
  },
  {
    "id": 188,
    "question": "Biển nào báo hiệu các phương tiện phải tuân thủ tốc độ tối đa cho phép trên từng làn đường?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "chapter": 4
  },
  {
    "id": 189,
    "question": "Khi gặp biển nào thì các phương tiện không được đi vào, trừ xe ô tô và xe mô tô?",
    "options": [
      "Biển 1.",
      "Biển 2."
    ],
    "chapter": 4
  },
  {
    "id": 190,
    "question": "Biển này có ý nghĩa như thế nào?",
    "options": [
      "Chỉ hướng đi phải theo.",
      "Biển báo hiệu cho người lái xe biết số lượng làn đường trên mặt đường và hướng đi trên mỗi làn đường phải theo.",
      "Chỉ hướng đường phải theo."
    ],
    "chapter": 4
  },
  {
    "id": 191,
    "question": "Biển nào (đặt trước ngã ba, ngã tư) cho phép xe được rẽ sang hướng khác?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Không biển nào."
    ],
    "chapter": 4
  },
  {
    "id": 192,
    "question": "Biển nào báo hiệu \"Hướng đi thẳng phải theo\"?",
    "options": [
      "Biển 1.",
      "Biển 2."
    ],
    "chapter": 4
  },
  {
    "id": 193,
    "question": "Biển nào báo hiệu \"Đường một chiều\"?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "chapter": 4
  },
  {
    "id": 194,
    "question": "Trong các biển dưới đây biển nào là biển \"Hết tốc độ tối đa cho phép\"?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Cả ba biển."
    ],
    "chapter": 4
  },
  {
    "id": 195,
    "question": "Trong các biển dưới đây biển nào là biển \"Hết tốc độ tối thiểu\"?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Cả ba biển."
    ],
    "chapter": 4
  },
  {
    "id": 196,
    "question": "Biển nào dưới đây báo hiệu hết cấm vượt?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Biển 2 và biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 197,
    "question": "Trong các biển dưới đây biển nào là biển \"Hết mọi lệnh cấm\"?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Cả ba biển."
    ],
    "chapter": 4
  },
  {
    "id": 198,
    "question": "Biển nào cho phép được quay đầu xe đi theo hướng ngược lại khi đặt biển trước ngã ba, ngã tư?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Không biển nào."
    ],
    "chapter": 4
  },
  {
    "id": 199,
    "question": "Biển nào không cho phép rẽ phải?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Biển 1 và biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 200,
    "question": "Khi đến chỗ giao nhau, gặp biển nào thì người lái xe không được cho xe đi thẳng, phải rẽ sang hướng khác?",
    "options": [
      "Biển 1 và biển 2.",
      "Biển 1 và biển 3.",
      "Biển 2 và biển 3.",
      "Cả ba biển."
    ],
    "chapter": 4
  },
  {
    "id": 201,
    "question": "Biển số 1 có ý nghĩa như thế nào?",
    "options": [
      "Biển chỉ dẫn hết cấm đỗ xe theo giờ trong khu vực.",
      "Biển chỉ dẫn hết hiệu lực khu vực đỗ xe trên các tuyến đường đối ngoại.",
      "Biển chỉ dẫn khu vực đỗ xe trên các tuyến đường đối ngoại."
    ],
    "chapter": 4
  },
  {
    "id": 202,
    "question": "Biển nào chỉ dẫn cho người đi bộ sử dụng cầu vượt qua đường?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển.",
      "Không biển nào."
    ],
    "chapter": 4
  },
  {
    "id": 203,
    "question": "Biển nào chỉ dẫn cho người đi bộ sử dụng hầm chui qua đường?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển.",
      "Không biển nào."
    ],
    "chapter": 4
  },
  {
    "id": 204,
    "question": "Biển nào báo hiệu \"Nơi đỗ xe dành cho người khuyết tật\"?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 205,
    "question": "Gặp biển báo này, người tham gia giao thông phải xử lý như thế nào?",
    "options": [
      "Dừng xe tại khu vực có trạm Cảnh sát giao thông.",
      "Tiếp tục lưu thông với tốc độ bình thường.",
      "Phải giảm tốc độ đến mức an toàn và không được vượt khi đi qua khu vực này."
    ],
    "chapter": 4
  },
  {
    "id": 206,
    "question": "Gặp biển báo dưới đây, người lái xe có bắt buộc phải chạy vòng theo đảo an toàn theo hướng mũi tên khi muốn chuyển hướng hay không?",
    "options": [
      "Bắt buộc.",
      "Không bắt buộc."
    ],
    "chapter": 4
  },
  {
    "id": 207,
    "question": "Biển nào báo hiệu \"Cầu vượt liên thông\"?",
    "options": [
      "Biển 2 và biển 3.",
      "Biển 1 và biển 2.",
      "Biển 1 và biển 3.",
      "Cả ba biển."
    ],
    "chapter": 4
  },
  {
    "id": 208,
    "question": "Biển số 1 có ý nghĩa như thế nào?",
    "options": [
      "Đi thẳng hoặc rẽ trái trên cầu vượt.",
      "Đi thẳng hoặc rẽ phải trên cầu vượt.",
      "Báo hiệu cầu vượt liên thông."
    ],
    "chapter": 4
  },
  {
    "id": 209,
    "question": "Biển nào báo hiệu \"Tuyến đường cầu vượt cắt qua\"?",
    "options": [
      "Biển 1 và biển 2.",
      "Biển 1 và biển 3.",
      "Biển 2 và biển 3."
    ],
    "chapter": 4
  },
  {
    "id": 210,
    "question": "Biển báo dưới đây có ý nghĩa như thế nào?",
    "options": [
      "Chỉ dẫn khoảng cách đến làn đường cứu nạn (làn thoát xe khẩn cấp).",
      "Báo hiệu đường cụt phía trước.",
      "Báo hiệu nút giao gần nhất phía trước.",
      "Báo hiệu trạm dừng nghỉ phía trước."
    ],
    "chapter": 4
  },
  {
    "id": 211,
    "question": "Tại đoạn đường có biển \"Làn đường dành riêng cho từng loại xe\" dưới đây, các phương tiện có được phép chuyển sang làn khác để đi theo hành trình mong muốn khi đến gần nơi đường bộ giao nhau hay không?",
    "options": [
      "Được phép chuyển sang làn khác.",
      "Không được phép chuyển sang làn khác, chỉ được đi trong làn quy định theo biển."
    ],
    "chapter": 4
  },
  {
    "id": 212,
    "question": "Biển nào chỉ dẫn người lái xe đi được cả hai hướng?",
    "options": [
      "Biển 1.",
      "Biển 2."
    ],
    "chapter": 4
  },
  {
    "id": 213,
    "question": "Biển này có ý nghĩa như thế nào?",
    "options": [
      "Chỉ dẫn chướng ngại vật phía trước để cảnh báo phía trước có sự cản trở lưu thông bình thường (nằm bên trong phần xe chạy hay ngay sát phần đường xe chạy) và chỉ dẫn hướng đi qua đó cần đặt biển.",
      "Chỉ dẫn hướng rẽ để nhắc người điều khiển phương tiện chuẩn bị đổi hướng đi khi sắp vào đường cong nguy hiểm, có bán kính cong nhỏ."
    ],
    "chapter": 4
  },
  {
    "id": 214,
    "question": "Vạch mũi tên chỉ hướng trên mặt đường nào dưới đây cho phép xe chỉ được đi thẳng và rẽ phải?",
    "options": [
      "Vạch 1.",
      "Vạch 2 và vạch 3.",
      "Vạch 3.",
      "Vạch 1 và vạch 2."
    ],
    "chapter": 4
  },
  {
    "id": 215,
    "question": "Vạch kẻ đường nào dưới đây là vạch phân chia hai chiều xe chạy (vạch tim đường), xe không được lấn làn, không được đè lên vạch?",
    "options": [
      "Vạch 1.",
      "Vạch 2.",
      "Vạch 3.",
      "Cả ba vạch. CHƯƠNG V. GIẢI THẾ SA HÌNH VÀ KỸ NĂNG XỬ LÝ TÌNH HUỐNG GIAO THÔNG"
    ],
    "chapter": 4
  },
  {
    "id": 216,
    "question": "Theo hướng mũi tên, xe nào chấp hành đúng quy tắc giao thông?",
    "options": [
      "Xe khách, xe tải, xe mô tô.",
      "Xe tải, xe mô tô.",
      "Chỉ xe con."
    ],
    "chapter": 5
  },
  {
    "id": 217,
    "question": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Xe tải, xe khách, xe con, xe mô tô.",
      "Xe tải, xe mô tô, xe khách, xe con.",
      "Xe khách, xe tải, xe con, xe mô tô.",
      "Xe mô tô, xe khách, xe tải, xe con."
    ],
    "chapter": 5
  },
  {
    "id": 218,
    "question": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Xe tải, xe con, xe mô tô.",
      "Xe con, xe tải, xe mô tô.",
      "Xe mô tô, xe con, xe tải.",
      "Xe con, xe mô tô, xe tải."
    ],
    "chapter": 5
  },
  {
    "id": 219,
    "question": "Trường hợp này xe nào được quyền đi trước?",
    "options": [
      "Xe mô tô.",
      "Xe con."
    ],
    "chapter": 5
  },
  {
    "id": 220,
    "question": "Xe nào được quyền đi trước trong trường hợp này?",
    "options": [
      "Xe mô tô.",
      "Xe cứu thương đi làm nhiệm vụ cấp cứu."
    ],
    "chapter": 5
  },
  {
    "id": 221,
    "question": "Theo tín hiệu đèn, xe nào được phép đi?",
    "options": [
      "Xe con và xe khách.",
      "Xe mô tô."
    ],
    "chapter": 5
  },
  {
    "id": 222,
    "question": "Theo tín hiệu đèn, xe nào đi là đúng quy tắc giao thông?",
    "options": [
      "Xe khách, xe mô tô.",
      "Xe con, xe tải.",
      "Xe tải, xe mô tô."
    ],
    "chapter": 5
  },
  {
    "id": 223,
    "question": "Các xe đi theo hướng mũi tên, những xe nào vi phạm quy tắc giao thông?",
    "options": [
      "Xe khách, xe tải, xe mô tô.",
      "Xe tải, xe con, xe mô tô.",
      "Xe khách, xe con, xe mô tô."
    ],
    "chapter": 5
  },
  {
    "id": 224,
    "question": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Xe khách, xe tải, xe mô tô, xe con.",
      "Xe con, xe khách, xe tải, xe mô tô.",
      "Xe mô tô, xe tải, xe khách, xe con.",
      "Xe mô tô, xe tải, xe con, xe khách."
    ],
    "chapter": 5
  },
  {
    "id": 225,
    "question": "Trong trường hợp này xe nào đỗ vi phạm quy tắc giao thông?",
    "options": [
      "Xe tải.",
      "Xe con và mô tô.",
      "Cả ba xe.",
      "Xe con và xe tải."
    ],
    "chapter": 5
  },
  {
    "id": 226,
    "question": "Theo hướng mũi tên, những hướng nào xe gắn máy được phép đi?",
    "options": [
      "Cả ba hướng.",
      "Chỉ hướng 1 và 3.",
      "Chỉ hướng 1."
    ],
    "chapter": 5
  },
  {
    "id": 227,
    "question": "Xe nào đỗ vi phạm quy tắc giao thông?",
    "options": [
      "Cả hai xe.",
      "Không xe nào vi phạm.",
      "Chỉ xe mô tô vi phạm.",
      "Chỉ xe tải vi phạm."
    ],
    "chapter": 5
  },
  {
    "id": 228,
    "question": "Xe nào đỗ vi phạm quy tắc giao thông?",
    "options": [
      "Chỉ xe mô tô.",
      "Chỉ xe tải.",
      "Cả ba xe.",
      "Chỉ xe mô tô và xe tải."
    ],
    "chapter": 5
  },
  {
    "id": 229,
    "question": "Xe nào được quyền đi trước trong trường hợp này?",
    "options": [
      "Xe con.",
      "Xe mô tô."
    ],
    "chapter": 5
  },
  {
    "id": 230,
    "question": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Xe con (A), xe mô tô, xe con (B), xe đạp.",
      "Xe con (B), xe đạp, xe mô tô, xe con (A).",
      "Xe con (A), xe con (B), xe mô tô + xe đạp.",
      "Xe mô tô + xe đạp, xe con (A), xe con (B)."
    ],
    "chapter": 5
  },
  {
    "id": 231,
    "question": "Xe nào được quyền đi trước trong trường hợp này?",
    "options": [
      "Xe mô tô.",
      "Xe con."
    ],
    "chapter": 5
  },
  {
    "id": 232,
    "question": "Xe nào vi phạm quy tắc giao thông?",
    "options": [
      "Xe khách.",
      "Xe mô tô.",
      "Xe con.",
      "Xe con và xe mô tô."
    ],
    "chapter": 5
  },
  {
    "id": 233,
    "question": "Các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Các xe ở phía tay phải và tay trái của người điều khiển được phép đi thẳng.",
      "Cho phép các xe ở mọi hướng được phép rẽ phải.",
      "Tất cả các xe phải dừng lại trước ngã tư, trừ những xe đã ở trong ngã tư được phép tiếp tục đi."
    ],
    "chapter": 5
  },
  {
    "id": 234,
    "question": "Theo hướng mũi tên, xe nào được phép đi?",
    "options": [
      "Xe mô tô, xe con.",
      "Xe con, xe tải.",
      "Xe mô tô, xe tải.",
      "Cả ba xe."
    ],
    "chapter": 5
  },
  {
    "id": 235,
    "question": "Trong hình dưới đây, xe nào chấp hành đúng quy tắc giao thông?",
    "options": [
      "Chỉ xe khách, xe mô tô.",
      "Tất cả các loại xe trên.",
      "Không xe nào chấp hành đúng quy tắc giao thông."
    ],
    "chapter": 5
  },
  {
    "id": 236,
    "question": "Theo hướng mũi tên, những hướng nào xe mô tô được phép đi?",
    "options": [
      "Cả ba hướng.",
      "Hướng 1 và 2.",
      "Hướng 1 và 3.",
      "Hướng 2 và 3."
    ],
    "chapter": 5
  },
  {
    "id": 237,
    "question": "Trong trường hợp này, thứ tự xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Xe công an đi làm nhiệm vụ khẩn cấp, xe quân sự đi làm nhiệm vụ khẩn cấp, xe con + xe mô tô.",
      "Xe quân sự đi làm nhiệm vụ khẩn cấp, xe công an đi làm nhiệm vụ khẩn cấp, xe con + xe mô tô.",
      "Xe mô tô + xe con, xe quân sự đi làm nhiệm vụ khẩn cấp, xe công an đi làm nhiệm vụ khẩn cấp."
    ],
    "chapter": 5
  },
  {
    "id": 238,
    "question": "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
    "options": [
      "Xe con (E), xe mô tô (C).",
      "Xe tải (A), xe mô tô (D).",
      "Xe khách (B), xe mô tô (C).",
      "Xe khách (B), xe mô tô (D)."
    ],
    "chapter": 5
  },
  {
    "id": 239,
    "question": "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
    "options": [
      "Xe con (B), xe mô tô (C).",
      "Xe con (A), xe mô tô (C).",
      "Xe con (E), xe mô tô (D).",
      "Tất cả các loại xe trên."
    ],
    "chapter": 5
  },
  {
    "id": 240,
    "question": "Theo tín hiệu đèn, xe nào phải dừng lại là đúng quy tắc giao thông?",
    "options": [
      "Xe khách, xe mô tô.",
      "Xe tải, xe mô tô.",
      "Xe con, xe tải."
    ],
    "chapter": 5
  },
  {
    "id": 241,
    "question": "Bạn có được phép vượt xe mô tô phía trước không?",
    "options": [
      "Cho phép.",
      "Không được vượt."
    ],
    "chapter": 5
  },
  {
    "id": 242,
    "question": "Theo tín hiệu đèn của xe cơ giới, xe nào vi phạm quy tắc giao thông?",
    "options": [
      "Xe mô tô.",
      "Xe ô tô con.",
      "Không xe nào vi phạm.",
      "Cả hai xe. Câu 243 . Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
      "Xe con.",
      "Xe tải.",
      "Xe con, xe tải."
    ],
    "chapter": 5
  },
  {
    "id": 243,
    "question": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
    "options": [
      "Xe con.",
      "Xe tải.",
      "Xe con, xe tải."
    ],
    "chapter": 5
  },
  {
    "id": 244,
    "question": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
    "options": [
      "Xe con, xe tải, xe khách.",
      "Xe tải, xe khách, xe mô tô.",
      "Xe khách, xe mô tô, xe con.",
      "Cả bốn xe."
    ],
    "chapter": 5
  },
  {
    "id": 245,
    "question": "Các xe đi theo hướng mũi tên, xe nào chấp hành đúng quy tắc giao thông?",
    "options": [
      "Xe tải, xe mô tô.",
      "Xe khách, xe mô tô.",
      "Xe tải, xe con.",
      "Xe mô tô, xe con."
    ],
    "chapter": 5
  },
  {
    "id": 246,
    "question": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
    "options": [
      "Xe của bạn, xe mô tô, xe con.",
      "Xe con, xe của bạn, xe mô tô.",
      "Xe mô tô, xe con, xe của bạn."
    ],
    "chapter": 5
  },
  {
    "id": 247,
    "question": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
    "options": [
      "Xe của bạn, xe mô tô, xe con.",
      "Xe con, xe của bạn, xe mô tô.",
      "Xe mô tô, xe con, xe của bạn."
    ],
    "chapter": 5
  },
  {
    "id": 248,
    "question": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
    "options": [
      "Xe của bạn, xe mô tô, xe đạp.",
      "Xe mô tô, xe đạp, xe của bạn.",
      "Xe đạp, xe mô tô, xe của bạn."
    ],
    "chapter": 5
  },
  {
    "id": 249,
    "question": "Xe nào dừng đúng theo quy tắc giao thông?",
    "options": [
      "Xe con.",
      "Xe mô tô.",
      "Cả 2 xe đều đúng."
    ],
    "chapter": 5
  },
  {
    "id": 250,
    "question": "Trong tình huống dưới đây, xe đầu kéo kéo rơ moóc (xe container) đang rẽ phải, xe con màu xanh và xe máy phía sau xe container đi như thế nào để bảo đảm an toàn?",
    "options": [
      "Vượt về phía bên phải để đi tiếp.",
      "Giảm tốc độ chờ xe container rẽ xong rồi tiếp tục đi.",
      "Vượt về phía bên trái để đi tiếp."
    ],
    "chapter": 5
  }
];
