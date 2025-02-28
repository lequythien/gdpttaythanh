import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiCalendarDateRange } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import Img1 from "../assets/mualantet2025/mualantet2025.jpg";
import Img2 from "../assets/mualantet2025/anh.jpg";
import Img3 from "../assets/mualantet2025/anh1.jpg";
import Img4 from "../assets/mualantet2025/anh2.jpg";
import Img5 from "../assets/mualantet2025/anh3.jpg";
import Img6 from "../assets/mualantet2025/anh4.jpg";
import Img7 from "../assets/mualantet2025/anh5.jpg";
import Img8 from "../assets/mualantet2025/anh6.jpg";
import Img9 from "../assets/mualantet2025/anh7.jpg";
import Img10 from "../assets/mualantet2025/anh8.jpg";
import Img11 from "../assets/mualantet2025/anh9.jpg";
import Img12 from "../assets/mualantet2025/anh10.jpg";
import ImgNB1 from "../assets/luchoavll/luchoa1.jpg";
import ImgNB2 from "../assets/aduclocuyen/anh3.jpg";

const MuaLanTet2025 = () => {
  const location = useLocation(); // Hook to track route changes

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, [location.pathname]); // Runs whenever the pathname changes

  const truncateDescription = (text) => {
    const maxLength = 70;
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const post = {
    title: "GIA ĐÌNH PHẬT TỬ TÂY THÀNH TỔ CHỨC MÚA LÂN TẾT ẤT TỴ 2025",
    date: "26/02/2025",
    author: "GĐPT Tây Thành",
    content: [
      {
        text: "Mở đầu năm mới Ất Tỵ 2025, Gia đình Phật tử Tây Thành đã tổ chức chương trình múa lân truyền thống, mang đến không khí rộn ràng và ý nghĩa cho mọi người.",
        image: Img1,
        imageCaption:
          "Gia đình Phật tử Tây Thành tổ chức hoạt động múa lân xông đất Tết Ất Tỵ năm 2025.",
      },
      {
        text: "Hoạt động hái lộc đầu năm tại chùa Tây Thiên - Niệm Phật đường Tây Thành thu hút đông đảo Phật tử tham gia, cầu mong một năm mới an lành.",
        image: Img2,
        imageCaption:
          "Phật tử hái lộc đầu năm tại chùa Tây Thiên, nơi linh thiêng và ấm áp tình đạo.",
      },
      {
        text: "Buổi khai lân tại chùa Tây Thiên diễn ra trang nghiêm, đánh dấu sự khởi đầu cho chuỗi hoạt động Tết đầy ý nghĩa.",
        image: Img4,
        imageCaption:
          "Nghi thức khai lân tại chùa Tây Thiên, mở đầu cho mùa xuân rực rỡ.",
      },
      {
        text: "Đội lân Tây Thành đã đến từng nhà Phật tử để xông đất, mang theo lời chúc phúc và niềm vui ngày Tết.",
        image: Img3,
        imageCaption:
          "Đội lân rộn ràng đến xông đất, trao gửi niềm vui tại từng mái ấm gia đình.",
      },
      {
        text: "Đội múa lân Tây Thành biểu diễn đầy khí thế trong ngày đầu xuân Ất Tỵ 2025.",
        image: Img5,
        imageCaption:
          "Đội lân Tây Thành ghé thăm một gia đình Phật tử, mang theo may mắn đầu năm.",
      },
      {
        text: "",
        image: Img6,
        imageCaption: "Hình ảnh đoàn lân đến nhà xông đất.",
      },
      {
        text: "",
        image: Img7,
        imageCaption:
          "Hình ảnh đội lân biểu diễn trước sân nhà, thu hút sự chú ý của mọi người.",
      },
      {
        text: "",
        image: Img8,
        imageCaption:
          "Trẻ em thích thú vây quanh đội lân, đón nhận niềm vui ngày đầu xuân.",
      },
      {
        text: "Đội lân di chuyển qua từng con đường, lan tỏa không khí Tết khắp nơi.",
        image: Img9,
        imageCaption: "Hình ảnh đoàn lân đến nhà xông đất.",
      },
      {
        text: "",
        image: Img10,
        imageCaption:
          "Tiếng trống rộn ràng hòa cùng điệu múa lân, tạo nên bức tranh Tết sống động.",
      },
      {
        text: "Một gia đình Phật tử hân hoan đón đội lân đến xông đất ngày đầu năm.",
        image: Img11,
        imageCaption: "Hình ảnh đoàn lân đến nhà xông đất.",
      },
      {
        text: "Điệu múa lân mạnh mẽ kết thúc buổi xông đất, để lại ấn tượng sâu sắc.",
        image: Img12,
        imageCaption: "Hình ảnh đoàn lân đến nhà xông đất.",
      },
    ],
  };

  const relatedPosts = [
    {
      id: 1,
      title: "Trại Lục Hòa VII 2024: Hành Trình Gắn Kết Tại Chùa Sơn Tùng",
      date: "03/08/2024",
      image: ImgNB1,
      link: "/sinh-hoat/luc-hoa-vii-2024",
      description:
        "Trại Họp Bạn Lục Hòa VII năm 2024, một sự kiện đặc biệt diễn ra 5 năm một lần, đã được tổ chức tại chùa Sơn Tùng, xã Quảng Vinh, với sự tham gia của các anh chị em áo lam GĐPT từ khắp nơi.",
    },
    {
      id: 2,
      title:
        "6 HUYNH TRƯỞNG GĐPT TÂY THÀNH THAM DỰ LIÊN TRAI HUẤN LUYỆN HUYNH TRƯỞNG CẤP 1 A DỤC KHÓA 40 VÀ SƠ CẤP LỘC UYỂN KHÓA 69 TẠI CHÙA SƠN NGUYÊN, HUYỆN A LƯỚI",
      date: "08/07/2024",
      image: ImgNB2,
      link: "/tu-hoc/lien-trai-huan-luyen-2024",
      description:
        "Trong không khí trang nghiêm tại chùa Sơn Nguyên, huyện A Lưới, Liên trại huấn luyện Huynh trưởng cấp I A Dục khóa 40 và Sơ cấp Lộc Uyển khóa 69 đã diễn ra với sự tham gia của hàng chục Huynh trưởng từ khắp nơi, trong đó có 6 thành viên từ Gia đình Phật tử Tây Thành.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans min-h-screen">
      <h1 className="text-3xl md:text-4xl text-gray-900 font-bold mb-6 border-b-2 border-gray-200 pb-4">
        {post.title}
      </h1>

      <div className="text-gray-600 text-sm mb-8 flex flex-col md:flex-row gap-2 md:gap-4">
        <span className="flex items-center">
          <HiCalendarDateRange className="mr-2" /> Ngày đăng: {post.date}
        </span>
        <span className="hidden md:inline">|</span>
        <span className="flex items-center">
          <FaUser className="mr-2" /> Tác giả: {post.author}
        </span>
      </div>

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
                className="w-full h-auto rounded-lg shadow-md"
              />
              <p className="text-center text-gray-500 italic mt-2 text-sm">
                {section.imageCaption}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-gray-700 leading-relaxed mt-10 bg-white">
        <p className="mb-4 text-lg">
          Hoạt động múa lân xông đất đầu năm đã trở thành truyền thống thường
          niên của Gia đình Phật tử Tây Thành. Năm Ất Tỵ 2025, chương trình tiếp
          tục được tổ chức với sự tham gia nhiệt tình của các Huynh trưởng và
          đoàn sinh Gia đình Phật tử Tây Thành, mang đến niềm vui, may mắn và
          không khí Tết trọn vẹn cho mọi người.
        </p>
        <p className="text-right text-sm text-gray-600">
          Tác giả: {post.author}
        </p>
      </div>

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

export default MuaLanTet2025;