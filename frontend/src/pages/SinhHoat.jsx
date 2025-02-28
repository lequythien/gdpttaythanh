import React, { useState } from "react";
import { Link } from "react-router-dom";
import Img1 from "./assets/luchoavll/luchoa1.jpg";
import Img2 from "./assets/mualantet2025/anh1.jpg";
import Img3 from "./assets/aduclocuyen/anh3.jpg";
import Img4 from "./assets/mualankienthe/anh1.jpg";
import Img5 from "./assets/trailamtyni2024/anh1.jpg";


const SinhHoat = () => {
  const initialPosts = [
    {
      id: 1,
      title:
        "TRẠI HỌP BẠN LỤC HÒA VII NĂM 2024 DO PHÂN BAN GĐPT HUYỆN QUẢNG ĐIỀN TỔ CHỨC TẠI CHÙA SƠN TÙNG, XÃ QUẢNG VINH",
      date: "03/08/2024",
      image: Img1,
      description:
        "Sự kiện đặc biệt 5 năm một lần với các hoạt động giao lưu, học hỏi tại chùa Sơn Tùng.",
      link: "/sinh-hoat/luc-hoa-vii-2024",
      category: "Hội trại",
    },
    {
      id: 2,
      title: "GIA ĐÌNH PHẬT TỬ TÂY THÀNH TỔ CHỨC MÚA LÂN TẾT ẤT TỴ 2025",
      date: "29/01/2025",
      image: Img2,
      description: "Gia đình Phật tử Tây Thành tổ chức múa lân Tết Ất Tỵ 2025",
      link: "/sinh-hoat/mua-lan-tet-2025",
      category: "Hoạt động",
    },
    {
      id: 3,
      title:
        "6 HUYNH TRƯỞNG GĐPT TÂY THÀNH THAM DỰ LIÊN TRAI HUẤN LUYỆN HUYNH TRƯỞNG CẤP 1 A DỤC KHÓA 40 VÀ SƠ CẤP LỘC UYỂN KHÓA 69 TẠI CHÙA SƠN NGUYÊN, HUYỆN A LƯỚI",
      date: "08/07/2024",
      image: Img3,
      description:
        "Trong không khí trang nghiêm tại chùa Sơn Nguyên, huyện A Lưới, Liên trại huấn luyện Huynh trưởng cấp I A Dục khóa 40 và Sơ cấp Lộc Uyển khóa 69 đã diễn ra với sự tham gia của hàng chục Huynh trưởng từ khắp nơi, trong đó có 6 thành viên từ Gia đình Phật tử Tây Thành.",
      link: "/tu-hoc/lien-trai-huan-luyen-2024",
      category: "Huấn luyện",
    },
    {
      id: 4,
      title:
        "GIA ĐÌNH PHẬT TỬ TÂY THÀNH THAM GIA GIẢI LIÊN HOAN MÚA LÂN KIÊN THỆ 3, DO BHD PB TỈNH THỪA THIÊN HUẾ TỔ CHỨC",
      date: "16/09/2024",
      image: Img4,
      description:
        "Ngày 16/09/2024, không khí tại Tổ đình Từ Đàm - Huế trở nên rộn ràng hơn bao giờ hết khi Gia đình Phật tử Tây Thành hòa mình vào giải Liên hoan múa lân Kiên Thệ 3. Đây không chỉ là một sân chơi giao lưu mà còn là dịp để các đội lân thể hiện tinh thần đoàn kết và tài năng điêu luyện của mình.",
      link: "/sinh-hoat/lien-hoan-mua-lan-2024",
      category: "Hoạt động",
    },
    {
      id: 5,
      title:
        "GIA ĐÌNH PHẬT TỬ TÂY THÀNH TỔ CHỨC HỘI TRẠI LÂM TỲ NI PL.2568",
      date: "25/05/2024",
      image: Img5,
      description:
        "",
      link: "/sinh-hoat/trai-lam-ty-ni-2024",
      category: "Sinh hoạt",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [sortOrder, setSortOrder] = useState("newest");
  const postsPerPage = 6;

  const filteredPosts = initialPosts
    .filter((post) =>
      selectedCategory === "Tất cả" ? true : post.category === selectedCategory
    )
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "newest"
        ? new Date(b.date.split("/").reverse().join("-")) -
          new Date(a.date.split("/").reverse().join("-"))
        : new Date(a.date.split("/").reverse().join("-")) -
          new Date(b.date.split("/").reverse().join("-"))
    );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const truncateDescription = (text, maxLength = 35) =>
    text.length <= maxLength ? text : text.substring(0, maxLength) + "...";

  const truncateTitle = (text, maxLength = 50) =>
    text.length <= maxLength ? text : text.substring(0, maxLength) + "...";

  const categories = ["Tất cả", "Hội trại", "Hoạt động", "Huấn luyện"];

  return (
    <div className="max-w-7xl mx-auto p-6 font-sans min-h-screen">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl text-gray-900 font-bold mb-6 text-center border-b-2 border-gray-200 pb-4">
        Sinh Hoạt GĐPT Tây Thành
      </h1>

      {/* Thanh tìm kiếm và bộ lọc */}
      <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Tìm kiếm bài viết..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="newest">Mới nhất</option>
            <option value="oldest">Cũ nhất</option>
          </select>
        </div>
      </div>

      {/* Nội dung chính */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar - Bài viết nổi bật (bên trái) */}
        <div className="lg:w-1/3 order-2 lg:order-1">
          <div className="bg-white p-5 rounded-xl border shadow-lg">
            <h3 className="text-xl text-gray-800 font-semibold mb-6 border-b pb-2">
              Bài viết nổi bật
            </h3>
            {initialPosts.slice(0, 6).map((post) => (
              <Link
                key={post.id}
                to={post.link}
                className="flex items-start mb-6 hover:bg-gray-100 p-3 rounded-lg transition-colors"
              >
                <img
                  src={post.image}
                  alt={truncateTitle(post.title)}
                  className="w-20 h-20 object-cover rounded-md mr-4 flex-shrink-0"
                />
                <div className="flex-1">
                  <h4 className="text-gray-800 font-medium line-clamp-2 hover:text-blue-600 transition-colors">
                    {truncateTitle(post.title)}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                    {truncateDescription(post.description)}
                  </p>
                  <p className="text-gray-500 text-xs mt-2">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Danh sách bài viết (bên phải) */}
        <div className="flex-1 order-1 lg:order-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentPosts.map((post) => (
              <Link
                key={post.id}
                to={post.link}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-[420px] transform transition-transform duration-300"
              >
                <img
                  src={post.image}
                  alt={truncateTitle(post.title)}
                  className="w-full h-52 object-cover rounded-t-xl flex-shrink-0"
                />
                <div className="p-5 flex flex-col flex-grow">
                  <h2 className="text-xl text-gray-800 font-semibold mb-2 line-clamp-2">
                    {truncateTitle(post.title)}
                  </h2>
                  <p className="text-gray-500 text-sm mb-3">{post.date}</p>
                  <p className="text-gray-600 text-sm flex-grow">
                    {truncateDescription(post.description)}
                  </p>
                  <span className="text-blue-600 text-sm font-medium mt-3 inline-block hover:underline">
                    Xem thêm
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Phân trang */}
          {filteredPosts.length > postsPerPage && (
            <div className="mt-10 flex justify-center items-center space-x-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Trước
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    currentPage === index + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Sau
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinhHoat;
