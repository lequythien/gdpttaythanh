import React from "react";
import { Link } from "react-router-dom";
import { HiCalendarDateRange } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import Img1 from "../assets/mualantet2025/anh1.jpg";
import Img2 from "../assets/mualantet2025/anh2.jpg";
import Img3 from "../assets/mualantet2025/anh3.jpg";
import ImgNB1 from "../assets/luchoavll/luchoa1.jpg";

const MuaLanTet2025 = () => {
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
        text: "",
        image: Img1,
        imageCaption: "Hình ảnh múa lân xông đất tết năm 2025",
      },
      {
        text: ".",
        image: Img2,
        imageCaption:
          "Hình ảnh khai lân tại chùa Tây Thiên - Niệm Phật đường Tây Thành trước khi xuất phát đến các nhà dân",
      },
      {
        text: "",
        image: Img3,
        imageCaption: "Hình ảnh lân đến nhà xông đất.",
      },
    ],
  };

  // Dữ liệu bài viết liên quan với tiêu đề mới
  const relatedPosts = [
    {
      id: 1,
      title: "Trại Lục Hòa VII 2024: Hành Trình Gắn Kết Tại Chùa Sơn Tùng",
      date: "03/08/2024",
      image: ImgNB1,
      link: "/sinh-hoat/luc-hoa-vii-2024",
      description:
        "Trại Họp Bạn Lục Hòa VII năm 2024, một sự kiện đặc biệt diễn ra 5 năm một lần, đã được Phân ban GĐPT huyện Quảng Điền tổ chức tại chùa Sơn Tùng, xã Quảng Vinh. Đây là nơi mà các anh chị em áo lam GĐPT từ khắp nơi hội tụ về, cùng nhau chia sẻ niềm vui và tinh thần đoàn kết giao lưu, học hỏi.",
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
                className="w-full h-auto rounded-lg shadow-md"
              />
              <p className="text-center text-gray-500 italic mt-2 text-sm">
                {section.imageCaption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Kết bài */}
      <div className="text-gray-700 leading-relaxed mt-10 bg-white p-6">
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
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-[350px] transform transition-transform duration-300"
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