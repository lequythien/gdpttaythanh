import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../assets/aduclocuyen/anh1.jpg";
import Img2 from "../assets/aduclocuyen/anh2.jpg";
import Img3 from "../assets/aduclocuyen/anh3.jpg";
import Img4 from "../assets/aduclocuyen/anh4.jpg";
import Img5 from "../assets/aduclocuyen/anh5.jpg";
import Img6 from "../assets/aduclocuyen/anh6.jpg";
import Img7 from "../assets/aduclocuyen/anh7.jpg";
import Img8 from "../assets/aduclocuyen/anh8.jpg";
import Img9 from "../assets/aduclocuyen/anh9.jpg";
import Img10 from "../assets/aduclocuyen/anh10.jpg";
import Img11 from "../assets/aduclocuyen/anh11.jpg";
import Img12 from "../assets/aduclocuyen/anh12.jpg";

import ImgNB1 from "../assets/luchoavll/luchoa1.jpg";
import ImgNB2 from "../assets/mualantet2025/anh3.jpg";
import ImgNB3 from "../assets/mualankienthe/anh1.jpg";

import { HiCalendarDateRange } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";

const ADucLocUyen = () => {
  const truncateDescription = (text) => {
    const maxLength = 70;
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const post = {
    title:
      "6 HUYNH TRƯỞNG GĐPT TÂY THÀNH THAM DỰ LIÊN TRAI HUẤN LUYỆN HUYNH TRƯỞNG CẤP 1 A DỤC KHÓA 40 VÀ SƠ CẤP LỘC UYỂN KHÓA 69 TẠI CHÙA SƠN NGUYÊN, HUYỆN A LƯỚI",
    date: "08/07/2024",
    author: "GĐPT Tây Thành",
    content: [
      {
        text: "Trong không khí trang nghiêm tại chùa Sơn Nguyên, huyện A Lưới, Liên trại huấn luyện Huynh trưởng cấp I A Dục khóa 40 và Sơ cấp Lộc Uyển khóa 69 đã diễn ra với sự tham gia của hàng chục Huynh trưởng từ khắp nơi, trong đó có 6 thành viên từ Gia đình Phật tử Tây Thành.",
        image: Img1,
        imageCaption:
          "Toàn cảnh Liên trại huấn luyện Huynh trưởng tại chùa Sơn Nguyên, nơi hội tụ tinh thần học hỏi và đoàn kết.",
      },
      {
        text: "Chư tôn đức cùng các anh trưởng từ Ban Hướng dẫn Phân ban GĐPT huyện Quảng Điền đã đến thăm và động viên các Huynh trưởng tham gia trại. Sự hiện diện của Chư tôn đức và các anh trưởng là nguồn cảm hứng lớn cho hành trình rèn luyện của anh chị em.",
        image: Img2,
        imageCaption:
          "Chư tôn đức và các anh trưởng Phân ban GĐPT huyện Quảng Điền chụp ảnh cùng các trại sinh trong ngày thăm trại.",
      },
      {
        text: "6 Huynh trưởng từ Gia đình Phật tử Tây Thành đã mang theo tinh thần nhiệt huyết, sẵn sàng học hỏi và cống hiến trong suốt khóa huấn luyện, góp phần khẳng định vai trò của đơn vị trong phong trào GĐPT huyện Quảng Điền.",
        image: Img3,
        imageCaption:
          "6 Huynh trưởng GĐPT Tây Thành chụp ảnh lưu niệm tại trại, thể hiện tinh thần gắn bó và quyết tâm.",
      },
      {
        text: "Những khoảnh khắc check-in tại trại không chỉ là kỷ niệm đẹp mà còn là minh chứng cho sự hào hứng của các Huynh trưởng khi được hòa mình vào không gian học tập và giao lưu đầy ý nghĩa.",
        image: Img4,
        imageCaption:
          "Một góc check-in rực rỡ sắc áo lam tại Liên trại huấn luyện Huynh trưởng tại chùa Sơn Nguyên.",
      },
      {
        text: "Không gian trại tràn ngập tiếng cười và sự gắn kết, nơi các Huynh trưởng cùng nhau chia sẻ kinh nghiệm và trau dồi kỹ năng lãnh đạo trong môi trường Phật giáo.",
        image: Img5,
        imageCaption:
          "Các Huynh trưởng GĐPT Tây Thành lưu lại khoảnh khắc vui vẻ bên nhau tại chùa Sơn Nguyên.",
      },
      {
        text: "Huynh trưởng Tập sự Quảng Tấn - Lê Quý Thiện, là 1 trong những Huynh trưởng của GĐPT Tây Thành đang tham gia trại A Dục khóa 40 với mong muốn hoàn thiện bản thân để phụng sự tổ chức tốt hơn.",
        image: Img6,
        imageCaption:
          "Huynh trưởng Quảng Tấn - Lê Quý Thiện tại trại A Dục khóa 40.",
      },
      {
        text: "5 Huynh trưởng từ GĐPT Tây Thành tham gia trại Lộc Uyển khóa 69, bước đầu làm quen với những bài học cơ bản để trở thành những người dẫn dắt thế hệ đàn em trong tương lai.",
        image: Img7,
        imageCaption:
          "5 Huynh trưởng GĐPT Tây Thành tại trại Lộc Uyển khóa 69, sẵn sàng cho hành trình mới.",
      },
      {
        text: "Những bức ảnh check-in không chỉ lưu giữ kỷ niệm mà còn là cách để các Huynh trưởng lan tỏa tinh thần trại đến cộng đồng, khơi dậy niềm tự hào về màu áo lam.",
        image: Img8,
        imageCaption:
          "Một khoảnh khắc check-in đầy năng lượng tại Liên trại huấn luyện Huynh trưởng.",
      },
      {
        text: "Đội ngũ Huynh trưởng A Dục khóa 40 của huyện Quảng Điền đã nhận được sự quan tâm đặc biệt từ Chư tôn đức, tạo động lực lớn để hoàn thành tốt khóa huấn luyện đầy thử thách này.",
        image: Img9,
        imageCaption:
          "Thượng tọa Thích Thường Chiếu chụp ảnh cùng các Huynh trưởng A Dục khóa 40 của huyện Quảng Điền.",
      },
      {
        text: "Đến thăm các Huynh trưởng đang tham dự Liên trại huấn luyện tại chùa Sơn Nguyên có: Đại Đức Thích Tâm Đạo - Trưởng Ban Hướng dẫn Phật tử GHPGVN huyện Quảng Điền, Htr. cấp Tấn Nhật Tâm - Hồ Tấn Hoàng - UV BHD Phân ban GĐPT tỉnh Thừa Thiên Huế, Trưởng BHD Phân ban GĐPT huyện Quảng Điền, và Htr. cấp Tấn Tâm Tráng - Phan Đình Luận - Phó trưởng thường trực BHD Phân ban GĐPT huyện Quảng Điền.",
        image: Img10,
        imageCaption:
          "Hình ảnh Chư Tôn đức ban đạo từ đến các anh chị Huynh trưởng đang tham gia trại huấn luyện.",
      },
      {
        text: "Toàn thể anh chị em Huynh trưởng A Dục và Lộc Uyển của huyện Quảng Điền đã cùng nhau tạo nên một bức tranh đoàn kết, thể hiện tinh thần học hỏi không ngừng nghỉ trong suốt thời gian diễn ra trại.",
        image: Img11,
        imageCaption:
          "Hình ảnh tập thể Huynh trưởng A Dục và Lộc Uyển huyện Quảng Điền trong ngày bế mạc trại.",
      },
      {
        text: "Các Huynh trưởng A Dục khóa 40 từ huyện Quảng Điền đã hoàn thành khóa huấn luyện với nhiều bài học quý giá, sẵn sàng áp dụng vào các hoạt động thực tiễn tại đơn vị của mình.",
        image: Img12,
        imageCaption:
          "Đội hình Huynh trưởng A Dục khóa 40 huyện Quảng Điền check-in tại cổng trại.",
      },
    ],
  };

  const relatedPosts = [
    {
      id: 1,
      title: "GIA ĐÌNH PHẬT TỬ TÂY THÀNH TỔ CHỨC MÚA LÂN TẾT ẤT TỴ 2025",
      date: "29/01/2025",
      image: ImgNB2,
      link: "/sinh-hoat/mua-lan-tet-2025",
      description:
        "Gia đình Phật tử Tây Thành tổ chức hoạt động múa lân truyền thống nhân dịp Tết Ất Tỵ 2025, mang đến không khí vui tươi và ý nghĩa cho cộng đồng.",
    },
    {
      id: 2,
      title:
        "GIA ĐÌNH PHẬT TỬ TÂY THÀNH THAM GIA GIẢI LIÊN HOAN MÚA LÂN KIÊN THỆ 3, DO BHD PB TỈNH THỪA THIÊN HUẾ TỔ CHỨC",
      date: "16/09/2024",
      image: ImgNB3,
      link: "/sinh-hoat/lien-hoan-mua-lan-2024",
      description:
        "Ngày 16/09/2024, không khí tại Tổ đình Từ Đàm - Huế trở nên rộn ràng hơn bao giờ hết khi Gia đình Phật tử Tây Thành hòa mình vào giải Liên hoan múa lân Kiên Thệ 3. Đây không chỉ là một sân chơi giao lưu mà còn là dịp để các đội lân thể hiện tinh thần đoàn kết và tài năng điêu luyện của mình.",
    },
    {
      id: 3,
      title:
        "TRẠI HỌP BẠN LỤC HÒA VII NĂM 2024 DO PHÂN BAN GĐPT HUYỆN QUẢNG ĐIỀN TỔ CHỨC TẠI CHÙA SƠN TÙNG",
      date: "03/08/2024",
      image: ImgNB1,
      link: "/sinh-hoat/luc-hoa-vii-2024",
      description:
        "Trại Lục Hòa VII năm 2024 tại chùa Sơn Tùng là sự kiện đặc biệt, nơi các anh chị em áo lam GĐPT huyện Quảng Điền hội tụ, giao lưu và gắn kết.",
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
                className="w-full h-auto max-h-max rounded-lg object-cover shadow-md"
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
          Liên trại huấn luyện Huynh trưởng cấp I A Dục khóa 40 và Sơ cấp Lộc
          Uyển khóa 69 tại chùa Sơn Nguyên không chỉ là cơ hội để các Huynh
          trưởng GĐPT Tây Thành nâng cao kỹ năng mà còn là dịp để khẳng định
          tinh thần đoàn kết và cống hiến. Những bài học từ trại sẽ là hành
          trang quý báu, giúp các anh chị em tiếp tục sứ mệnh dẫn dắt thế hệ trẻ
          trong môi trường Phật giáo đầy ý nghĩa.
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

export default ADucLocUyen;
