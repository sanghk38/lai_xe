// Correct answers for 250 questions - A1 driving license exam 2025
// Answer index is 0-based (0 = option 1, 1 = option 2, etc.)
// Based on official Bộ Công An / Cục CSGT answer keys

const CORRECT_ANSWERS = {
    // CHƯƠNG I: QUY ĐỊNH CHUNG VÀ QUY TẮC GIAO THÔNG ĐƯỜNG BỘ (Câu 1-100)
    1: 1,   // Phần đường xe chạy
    2: 1,   // Có đủ chiều rộng cho xe chạy an toàn
    3: 0,   // Khoảng trống kích thước giới hạn chiều rộng, chiều cao
    4: 1,   // Phân chia phần đường xe chạy thành hai chiều riêng biệt...
    5: 1,   // Là vạch chỉ sự phân chia làn đường
    6: 0,   // Là người điều khiển xe cơ giới, thô sơ, máy chuyên dùng
    7: 0,   // Là người điều khiển xe cơ giới
    8: 1,   // Ô tô, rơ moóc, sơ mi rơ moóc, xe chở người 4 bánh...
    9: 0,   // Xe đạp, xích lô, xe lăn, xe vật nuôi kéo
    10: 2,  // Cả hai ý trên
    11: 2,  // Cả hai ý trên
    12: 2,  // Cả hai ý trên
    13: 1,  // CSGT và người được giao nhiệm vụ hướng dẫn GT
    14: 1,  // Rải vật sắc nhọn
    15: 2,  // Cả hai ý trên
    16: 2,  // Được cơ quan có thẩm quyền cấp phép
    17: 1,  // Tùy theo mức độ vi phạm, xử lý hành chính hoặc hình sự
    18: 0,  // Bị nghiêm cấm
    19: 0,  // Người điều khiển xe ô tô, mô tô, đạp, gắn máy
    20: 3,  // Cả ba ý trên
    21: 2,  // Cả hai ý trên
    22: 1,  // Cải tạo trái phép, cố ý can thiệp...
    23: 2,  // Cả hai ý trên
    24: 1,  // Bị nghiêm cấm
    25: 2,  // Lạng lách, đánh võng, rú ga liên tục
    26: 2,  // Năm nhóm biển
    27: 1,  // Quan sát, giảm tốc độ hoặc dừng lại
    28: 3,  // Cả ba ý trên
    29: 3,  // Phía trước và phía sau dừng lại; trái phải được đi
    30: 2,  // Tất cả các hướng phải dừng lại, trừ xe đã trong khu vực giao nhau
    31: 0,  // Theo hiệu lệnh người điều khiển giao thông
    32: 1,  // Biển báo hiệu tạm thời
    33: 0,  // Dừng lại trước vạch dừng
    34: 2,  // Không vượt quá tốc độ tối đa cho phép
    35: 1,  // Đi về bên phải theo chiều đi của mình
    36: 1, // Äi trÃªn lÃ n ÄÆ°á»ng bÃªn trÃ¡i.
    37: 2,  // Khi xe sau xin vượt nếu đủ điều kiện an toàn
    38: 0,  // Mỗi chiều 1 làn, sang bên trái để lên trước
    39: 1,  // Không được phép vượt
    40: 2,  // Báo hiệu nhấp nháy bằng đèn chiếu sáng hoặc còi
    41: 1,  // Từ 05 giờ đến 22 giờ
    42: 2,  // Chỉ bật đèn chiếu gần (đèn cốt)
    43: 0,  // Dùng tay cầm và sử dụng điện thoại
    44: 0,  // Trên cầu hẹp 1 làn, nơi giao nhau, gặp xe ưu tiên
    45: 2,  // Cả hai ý trên
    46: 3,  // Cả ba ý trên
    47: 1,  // Trước khi thay đổi làn đường
    48: 2,  // Cả hai ý trên
    49: 3,  // Không được phép
    50: 0,  // Buông cả hai tay; đứng, nằm trên xe; sử dụng chân chống
    51: 0,  // Buông cả hai tay; sử dụng xe để kéo, đẩy...
    52: 3,  // Ý 1 và ý 2
    53: 3,  // Không được phép
    54: 0,  // Đội mũ bảo hiểm đúng quy chuẩn và cài quai đúng quy cách
    55: 0,  // Chở người bệnh, áp giải, trẻ em dưới 12, người già yếu/khuyết tật
    56: 3,  // Cả ba ý trên
    57: 2,  // Cả hai ý trên
    58: 1,  // Đi xe dàn hàng ngang, đi xe vào phần đường dành cho người đi bộ
    59: 2,  // Không được sử dụng
    60: 1,  // Không được phép
    61: 3,  // Xử phạt cả người điều khiển và người được chở
    62: 0,  // Phải đội mũ bảo hiểm đúng quy chuẩn...
    63: 1,  // Xe cơ giới, xe máy chuyên dùng xuống trước
    64: 2,  // Chỉ được báo hiệu bằng đèn
    65: 1,  // Giảm tốc độ, có tín hiệu rẽ phải, đi sát bên phải
    66: 0,  // Giảm tốc độ và cho xe đi về bên phải
    67: 3,  // Cả ba ý trên
    68: 0,  // Quan sát, giảm tốc độ hoặc dừng lại
    69: 2,  // Nhường đường cho xe đi trên đường ưu tiên/đường chính
    70: 1, // NhÆ°á»ng ÄÆ°á»ng cho xe Äi Äáº¿n tá»« bÃªn trÃ¡i.
    71: 0,  // Phải nhường đường cho xe đi đến từ bên phải
    72: 1,  // Xe ưu tiên gồm xe chữa cháy, quân sự, công an...
    73: 0,  // Giảm tốc độ, đi sát lề đường bên phải hoặc dừng lại
    74: 2,  // Được vượt khi bảo đảm an toàn
    75: 0,  // Không được vượt
    76: 0,  // Dừng lại về bên phải, trước vạch dừng xe và quan sát hai phía
    77: 2,  // Dừng lại về bên phải đường, trước vạch dừng xe
    78: 3,  // Cả ba ý trên
    79: 0,  // Bật đèn chiếu gần; không dừng đỗ trong hầm...
    80: 3,  // Cả ba ý trên
    81: 0, // Xe phÃ­a trÆ°á»c cÃ³ tÃ­n hiá»u ráº½ trÃ¡i hoáº·c Äang ráº½ trÃ¡i hoáº·c khi xe chuy...
    82: 0,  // Giảm tốc độ, có tín hiệu rẽ phải, đi sát bên phải
    83: 0,  // Xe máy chuyên dùng tốc độ nhỏ hơn tối thiểu, xe mô tô, xe thô sơ, người đi bộ
    84: 2,  // 18 tuổi
    85: 1,  // Xe gắn máy
    86: 1, // Xe mÃ´ tÃ´ ba bÃ¡nh.
    87: 0,  // Xe mô tô hai bánh dung tích đến 125 cm3
    88: 2,  // Cả hai ý trên
    89: 0,  // Phải đủ tuổi, sức khỏe, có GPLX phù hợp
    90: 3,  // Cả ba ý trên
    91: 1,  // Được phục hồi đủ 12 điểm nếu không bị trừ điểm trong 12 tháng
    92: 1,  // Sau 06 tháng, kiểm tra kiến thức pháp luật, đạt yêu cầu
    93: 0,  // Tiếp tục chịu trách nhiệm của chủ xe
    94: 0,  // 60 km/h
    95: 1,  // 50 km/h
    96: 2, // Xe buÃ½t; Ã´ tÃ´ Äáº§u kÃ©o kÃ©o sÆ¡ mi rÆ¡ moÃ³c (trá»« Ã´ tÃ´ Äáº§u kÃ©o kÃ©o sÆ¡ m...
    97: 2, // Xe buÃ½t; Ã´ tÃ´ Äáº§u kÃ©o kÃ©o sÆ¡ mi rÆ¡ moÃ³c (trá»« Ã´ tÃ´ Äáº§u kÃ©o kÃ©o sÆ¡ m...
    98: 0,  // Gặp biển báo nguy hiểm và cảnh báo
    99: 1,  // Quan sát, giảm tốc độ đi qua hoặc dừng lại
    100: 2, // Cả hai ý trên

    // CHƯƠNG II: VĂN HÓA GIAO THÔNG (Câu 101-110)
    101: 0, // Luôn tuân thủ pháp luật, nhường nhịn, giúp đỡ
    102: 2, // Cả hai ý trên
    103: 0, // Thiếu văn hóa GT, vi phạm pháp luật
    104: 0, // Hiểu biết, chấp hành, ý thức trách nhiệm, tôn trọng
    105: 0, // Đi bên phải, đúng phần đường, đội mũ bảo hiểm đúng
    106: 0, // Đi bên phải, đúng phần đường, dừng đỗ đúng nơi, đã uống rượu bia không lái
    107: 0, // Chỉ bấm còi khi thật sự cần thiết
    108: 3, // Cả ba ý trên
    109: 0, // Giúp đỡ, cứu chữa, báo tin, bảo vệ hiện trường
    110: 2, // Kiên nhẫn, tuân thủ, di chuyển đúng phần đường bên phải

    // CHƯƠNG III: KỸ THUẬT LÁI XE (Câu 111-125)
    111: 0, // Giữ tay ga phù hợp, sử dụng phanh trước và phanh sau
    112: 0, // Quan sát, giảm tốc độ, về số thấp, quay vòng tốc độ phù hợp
    113: 2, // Cả hai ý trên
    114: 1, // Xăng sinh học và khí sinh học
    115: 2, // Cả hai ý trên
    116: 1, // Giảm tốc độ, chạy cách xa, bật đèn sương mù và đèn chiếu gần
    117: 0, // Giảm tốc độ, giữ vững tay lái, nhìn chếch sang lề phải
    118: 2, // Giảm hết ga, sử dụng đồng thời cả phanh sau và phanh trước
    119: 1, // Giảm tốc độ để dừng xe ở nơi cho phép
    120: 2, // Chỉ sử dụng phanh trước
    121: 3, // Cả ba ý trên
    122: 3, // Ý 1 và ý 2
    123: 2, // Quan sát an toàn phía sau cả bên trái và bên phải
    124: 2, // TÄng ga tá»« tá»«, giáº£m ga tháº­t nhanh.
    125: 3, // Cả ba ý trên

    // CHƯƠNG IV: BÁO HIỆU ĐƯỜNG BỘ (Câu 126-215)
    126: 2, // Biển 1 và biển 3
    127: 0, // Biá»n 1 vÃ  biá»n 2.
    128: 2, // Cáº£ hai biá»n.
    129: 0, // Biển 1
    130: 2, // Biá»n 2 vÃ  biá»n 3.
    131: 1, // Biá»n 2.
    132: 0, // Biá»n 1.
    133: 1, // Biá»n 2.
    134: 0, // Biá»n 1 vÃ  biá»n 2.
    135: 0, // Biển 1 và biển 2
    136: 1, // Biá»n 2.
    137: 2, // Cáº£ hai biá»n.
    138: 0, // Biển 1
    139: 1, // Biển 2
    140: 2, // Biển 1 và biển 2
    141: 1, // Biá»n 2.
    142: 0, // Biển 1
    143: 1, // Tá»c Äá» tá»i thiá»u cho phÃ©p vá» ban ÄÃªm cho cÃ¡c phÆ°Æ¡ng tiá»n lÃ  70 km/h.
    144: 0, // Có
    145: 1, // Cáº¥m cÃ¡c loáº¡i xe cÆ¡ giá»i vÃ  xe mÃ´ tÃ´ (trá»« xe Æ°u tiÃªn theo luáº­t Äá»nh)...
    146: 1, // Chiều dài đoạn đường cấm bóp còi
    147: 1, // Không được phép
    148: 1, // Biển 1 và biển 3
    149: 1, // Biá»n 2.
    150: 0, // Cáº¥m cÃ¡c loáº¡i xe á» biá»n phá»¥ Äi vÃ o.
    151: 1, // Cấm dừng và đỗ xe theo hướng bên phải
    152: 0, // Biển 1
    153: 1, // Biá»n 2.
    154: 0, // Tốc độ tối đa
    155: 0, // BÃ¡o hiá»u tá»c Äá» tá»i Äa cho phÃ©p cÃ¡c xe cÆ¡ giá»i cháº¡y.
    156: 0, // Biển 1
    157: 2, // Biển 3
    158: 0, // Biá»n 1.
    159: 3, // Cả ba biển
    160: 0, // Biển 1
    161: 2, // Biá»n 3.
    162: 1, // Biá»n 1 vÃ  biá»n 3.
    163: 2, // Biá»n 2 vÃ  biá»n 3.
    164: 0, // Biá»n 1.
    165: 1, // Biển 2
    166: 0, // Äá» chá» nÆ¡i ÄÆ°á»ng sáº¯t giao vuÃ´ng gÃ³c vá»i ÄÆ°á»ng bá» khÃ´ng cÃ³ rÃ o...
    167: 2, // Biá»n 3.
    168: 1, // Biển 1 và biển 3
    169: 1, // Biá»n 2.
    170: 2, // Biá»n 3.
    171: 0, // Biển 1
    172: 1, // Biá»n 2.
    173: 1, // Biá»n 2.
    174: 2, // Biá»n 3.
    175: 2, // Biá»n 3.
    176: 2, // Biá»n 3.
    177: 1, // Biá»n 2.
    178: 1, // Biển 2
    179: 1, // Biá»n 2 vÃ  biá»n 3.
    180: 1, // Biển 2
    181: 1, // Biển 2
    182: 1, // Biá»n 2.
    183: 1, // Biển 2
    184: 1, // Biá»n 2.
    185: 0, // Biá»n 1.
    186: 1, // Báo hiệu đường có gồ giảm tốc
    187: 0, // Báo trước đất đá sụt lở bất ngờ
    188: 2, // Cáº£ hai biá»n.
    189: 0, // Biá»n 1.
    190: 1, // Biển báo hiệu số lượng làn đường và hướng đi
    191: 2, // KhÃ´ng biá»n nÃ o.
    192: 0, // Biển 1
    193: 1, // Biá»n 2.
    194: 0, // Biển 1
    195: 2, // Biá»n 3.
    196: 3, // Biá»n 2 vÃ  biá»n 3.
    197: 1, // Biển 2
    198: 2, // Biá»n 3.
    199: 0, // Biá»n 1.
    200: 0, // Biá»n 1 vÃ  biá»n 2.
    201: 2, // Biển chỉ dẫn khu vực đỗ xe
    202: 0, // Biển 1
    203: 1, // Biển 2
    204: 1, // Biá»n 2.
    205: 2, // Phải giảm tốc độ đến mức an toàn
    206: 0, // Bắt buộc
    207: 2, // Biển 1 và biển 3
    208: 2, // Báo hiệu cầu vượt liên thông
    209: 0, // Biá»n 1 vÃ  biá»n 2.
    210: 0, // Chỉ dẫn khoảng cách đến làn đường cứu nạn
    211: 0, // Được phép chuyển sang làn khác
    212: 1, // Biá»n 2.
    213: 1, // Chỉ dẫn hướng rẽ
    214: 2, // Váº¡ch 3.
    215: 1, // Váº¡ch 2.

    // CHƯƠNG V: SA HÌNH VÀ XỬ LÝ TÌNH HUỐNG (Câu 216-250)
    216: 2, // Chá» xe con.
    217: 0, // Xe tải, xe khách, xe con, xe mô tô
    218: 0, // Xe táº£i, xe con, xe mÃ´ tÃ´.
    219: 1, // Xe con
    220: 0, // Xe mÃ´ tÃ´.
    221: 0, // Xe con và xe khách
    222: 1, // Xe con, xe tải
    223: 2, // Xe khÃ¡ch, xe con, xe mÃ´ tÃ´.
    224: 0, // Xe khÃ¡ch, xe táº£i, xe mÃ´ tÃ´, xe con.
    225: 0, // Xe táº£i.
    226: 0, // Cả ba hướng
    227: 2, // Chá» xe mÃ´ tÃ´ vi pháº¡m.
    228: 2, // Cáº£ ba xe.
    229: 0, // Xe con
    230: 0, // Xe con (A), xe mô tô, xe con (B), xe đạp
    231: 0, // Xe mÃ´ tÃ´.
    232: 2, // Xe con.
    233: 2, // Tất cả phải dừng lại, trừ xe đã trong ngã tư
    234: 2, // Xe mÃ´ tÃ´, xe táº£i.
    235: 1, // Tất cả các loại xe
    236: 2, // Hướng 1 và 3
    237: 1, // Xe quÃ¢n sá»± Äi lÃ m nhiá»m vá»¥ kháº©n cáº¥p, xe cÃ´ng an Äi lÃ m nhiá»m vá»¥ khá...
    238: 2, // Xe khÃ¡ch (B), xe mÃ´ tÃ´ (C).
    239: 2, // Xe con (E), xe mÃ´ tÃ´ (D).
    240: 2, // Xe con, xe tải
    241: 1, // Không được vượt
    242: 3, // Cáº£ hai xe. CÃ¢u 243 . CÃ¡c xe Äi theo hÆ°á»ng mÅ©i tÃªn, xe nÃ o vi pháº¡m quy táº¯...
    243: 0, // Xe con.
    244: 0, // Xe con, xe táº£i, xe khÃ¡ch.
    245: 1, // Xe khÃ¡ch, xe mÃ´ tÃ´.
    246: 2, // Xe mô tô, xe con, xe của bạn
    247: 2, // Xe mÃ´ tÃ´, xe con, xe cá»§a báº¡n.
    248: 2, // Xe Äáº¡p, xe mÃ´ tÃ´, xe cá»§a báº¡n.
    249: 0, // Xe con
    250: 1, // Giảm tốc độ chờ xe container rẽ xong rồi tiếp tục đi
};

// Câu hỏi điểm liệt (critical questions that lead to instant fail)
const CRITICAL_QUESTIONS = [18, 19, 20, 21, 22, 23, 24, 25];
