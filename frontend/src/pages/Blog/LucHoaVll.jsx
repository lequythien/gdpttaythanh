import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../assets/luchoavll/luchoa1.jpg";
import Img2 from "../assets/luchoavll/luchoa2.jpg";
import Img3 from "../assets/luchoavll/luchoa3.jpg";
import Img4 from "../assets/luchoavll/luchoa4.jpg";
import Img5 from "../assets/luchoavll/luchoa5.jpg";
import Img6 from "../assets/luchoavll/luchoa6.jpg";
import Img7 from "../assets/luchoavll/luchoa7.jpg";
import Img8 from "../assets/luchoavll/luchoa8.jpg";
import Img9 from "../assets/luchoavll/luchoa9.jpg";
import Img10 from "../assets/luchoavll/luchoa10.jpg";

import ImgNB1 from "../assets/mualantet2025/anh3.jpg";
import ImgNB2 from "../assets/aduclocuyen/anh3.jpg";

import { HiCalendarDateRange } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";

const LucHoaVll = () => {
  // Hàm giới hạn văn bản
  const truncateDescription = (text) => {
    const maxLength = 70; // Giới hạn khoảng 70 ký tự (tương đương 15-20 chữ tiếng Việt)
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const post = {
    title:
      "TRẠI HỌP BẠN LỤC HÒA VII NĂM 2024 DO PHÂN BAN GĐPT HUYỆN QUẢNG ĐIỀN TỔ CHỨC TẠI CHÙA SƠN TÙNG, XÃ QUẢNG VINH",
    date: "03/08/2024",
    author: "GĐPT Tây Thành",
    content: [
      {
        text: "Trại Họp Bạn Lục Hòa VII năm 2024, một sự kiện đặc biệt diễn ra 5 năm một lần, đã được Phân ban GĐPT huyện Quảng Điền tổ chức tại chùa Sơn Tùng, xã Quảng Vinh. Đây là nơi mà các anh chị em áo lam GĐPT từ khắp nơi hội tụ về, cùng nhau chia sẻ niềm vui và tinh thần đoàn kết giao lưu, học hỏi.",
        image: Img1,
        imageCaption:
          "Anh chị em đơn vị GĐPT Tây Thành check-in tại cổng trại Lục Hòa VII năm 2024 tại chùa Sơn Tùng",
      },
      {
        text: "Ngày đầu tiên của trại là thời điểm các trại sinh bắt đầu hành trình của mình. Từ việc dựng trại, phân chia đội nhóm đến chuẩn bị cho các hoạt động sắp tới, không khí tràn đầy sự háo hức và năng lượng tích cực của tuổi trẻ.",
        image: Img2,
        imageCaption: "Ngày đầu tiên nhập trại của đơn vị GĐPT Tây Thành",
      },
      {
        text: "Chùa Sơn Tùng nổi bật với vẻ đẹp thanh bình, được bao quanh bởi thiên nhiên xanh mát. Không gian này không chỉ mang lại sự yên tĩnh mà còn là nguồn cảm hứng cho các hoạt động tâm linh và sinh hoạt tập thể trong suốt thời gian diễn ra trại.",
        image: Img3,
        imageCaption: "Toàn cảnh chùa Sơn Tùng trong ánh hoàng hôn",
      },
      {
        text: "Một trong những hoạt động không thể thiếu là ghi lại những khoảnh khắc đáng nhớ. Các trại sinh hào hứng check-in khắp nơi trên đất trại, lưu giữ kỷ niệm đẹp bên bạn bè và khung cảnh tuyệt vời của chùa Sơn Tùng.",
        image: Img4,
        imageCaption: "Check-in cho mọi người biết mình có đi trại nè",
      },
      {
        text: "Trại Lục Hòa VII là dịp để các đơn vị GĐPT như đơn vị GĐPT Tây Thành ôn lại những kỷ niệm xưa, đồng thời tạo nên những dấu ấn mới. Mỗi bức ảnh chụp được trưng bày tại đây đều chứa đựng câu chuyện riêng, gắn kết tình cảm với nhau của đơn vị.",
        image: Img5,
        imageCaption:
          "Một số hình ảnh hoạt động của đơn vị GĐPT Tây Thành trưng bày trên đất trại Lục Hòa VII năm 2024",
      },
      {
        text: "Bữa cơm đầu tiên tại trại không chỉ là dịp để nạp năng lượng mà còn là thời gian để các trại sinh quây quần bên nhau, chia sẻ câu chuyện và cảm nhận sự ấm áp của tình anh em trong gia đình GĐPT.",
        image: Img6,
        imageCaption: "Bữa cơm đầu tiên trên đất trại Lục Hòa VII năm 2024",
      },
      {
        image: Img7,
        imageCaption: "Chụp tấm hình chung cái nào mọi người",
      },
      {
        image: Img8,
        imageCaption: "Cười lên check-in cái nè",
      },
      {
        image: Img9,
        imageCaption: "Khi tập trung toàn trại vẫn không quên check-in",
      },
      {
        text: "Đêm lửa trại là điểm nhấn không thể bỏ qua của trại Lục Hòa VII. Ánh lửa bập bùng, tiếng hát vang vọng và những điệu múa đã tạo nên một không gian kết nối đầy cảm xúc giữa các trại sinh.",
        image: Img10,
        imageCaption: "Đêm lửa trại kết thân của trại Lục Hòa VII năm 2024",
      },
    ],
  };

  // Dữ liệu bài viết liên quan
  const relatedPosts = [
    {
      id: 1,
      title: "GIA ĐÌNH PHẬT TỬ TÂY THÀNH TỔ CHỨC MÚA LÂN TẾT ẤT TỴ 2025",
      date: "15/03/2019",
      image: ImgNB1,
      link: "/sinh-hoat/mua-lan-tet-2025",
      description:
        "Gia đình Phật tử Tây Thành tổ chức múa lân tết Ất Tỵ 2025",
    },
    {
      id: 2,
      title: "6 HUYNH TRƯỞNG GĐPT TÂY THÀNH THAM DỰ LIÊN TRAI HUẤN LUYỆN HUYNH TRƯỞNG CẤP 1 A DỤC KHÓA 40 VÀ SƠ CẤP LỘC UYỂN KHÓA 69 TẠI CHÙA SƠN NGUYÊN, HUYỆN A LƯỚI",
      date: "08/07/2024",
      image: ImgNB2,
      link: "/tu-hoc/lien-trai-huan-luyen-2024",
      description:
        "Trong không khí trang nghiêm tại chùa Sơn Nguyên, huyện A Lưới, Liên trại huấn luyện Huynh trưởng cấp I A Dục khóa 40 và Sơ cấp Lộc Uyển khóa 69 đã diễn ra với sự tham gia của hàng chục Huynh trưởng từ khắp nơi, trong đó có 6 thành viên từ Gia đình Phật tử Tây Thành.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans min-h-screen">
      {/* Tiêu đề bài viết */}
      <h1 className="text-3xl md:text-4xl text-gray-900 font-bold mb-6 border-b-2 border-gray-200 pb-4">
        {post.title}
      </h1>

      {/* Thông tin metadata */}
      <div className="text-gray-600 text-sm mb-8 flex flex-col md:flex-row gap-2 md:gap-4">
        <span className="flex items-center">
          <HiCalendarDateRange className="mr-2" /> Ngày đăng: {post.date}
        </span>
        <span className="hidden md:inline">|</span>
        <span className="flex items-center">
          <FaUser className="mr-2" /> Tác giả: {post.author}
        </span>
      </div>

      {/* Nội dung bài viết */}
      <div className="space-y-12">
        {post.content.map((section, index) => (
          <div key={index} className="text-gray-700 leading-relaxed">
            {section.text && (
              <p className="mb-4 text-lg text-gray-800">{section.text}</p>
            )}
            <div className="mb-6">
              <img
                src={section.image}
                alt={post.title}
                className="w-full h-auto max-h-[500px] rounded-lg object-cover shadow-md"
              />
              <p className="text-center text-gray-500 italic mt-2 text-sm">
                {section.imageCaption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Kết bài */}
      <div className="text-gray-700 leading-relaxed mt-10 bg-white">
        <p className="mb-4 text-lg">
          Trại Họp Bạn Lục Hòa VII năm 2024 không chỉ là một sự kiện định kỳ mà
          còn là một hành trình ý nghĩa, nơi các trại sinh được sống trong tinh
          thần hòa hợp, sẻ chia và trân quý những giá trị cao đẹp của đạo Phật
          và tình người.
        </p>
        <p className="text-right text-sm text-gray-600">
          Tác giả: {post.author}
        </p>
      </div>

      {/* Bài viết liên quan */}
      <div className="mt-12">
        <h2 className="text-2xl text-gray-800 font-semibold mb-6 border-b-2 border-gray-200 pb-2">
          Bài viết nổi bật liên quan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts.map((related) => (
            <Link
              key={related.id}
              to={related.link}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-[350px]"
            >
              <img
                src={related.image}
                alt={related.title}
                className="w-full h-40 object-cover rounded-t-xl flex-shrink-0"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg text-gray-800 font-medium mb-2 line-clamp-2">
                  {truncateDescription(related.title)}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{related.date}</p>
                <p className="text-gray-700 text-sm flex-grow">
                  {truncateDescription(related.description)}
                </p>
                <span className="text-blue-600 text-sm font-medium mt-2 inline-block hover:underline">
                  Xem thêm
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LucHoaVll;
