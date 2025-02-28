import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import Tintuc1 from "../assets/tintuc1.jpg";
import Tintuc2 from "../assets/tintuc2.jpg";
import Tintuc3 from "../assets/tintuc3.jpg";
import Tintuc4 from "../assets/tintuc4.jpg";
import Tintuc5 from "../assets/tintuc5.jpg";
import Tintuc6 from "../assets/tintuc6.jpg";
import Tintuc7 from "../assets/tintuc7.jpg";

import "swiper/css";
import "swiper/css/navigation";

const newsData = [
  {
    id: 1,
    title: "GIA ĐÌNH PHẬT TỬ TÂY THÀNH TỔ CHỨC MÚA LÂN TẾT ẤT TỴ 2025",
    date: "29/01/2025",
    image: Tintuc1,
    link: "/sinh-hoat/mua-lan-tet-2025",
  },
  {
    id: 2,
    title:
      "GIA ĐÌNH PHẬT TỬ TÂY THÀNH THAM GIA GIẢI LIÊN HOAN MÚA LÂN KIÊN THỆ 3, DO BHD PB TỈNH THỪA THIÊN HUẾ TỔ CHỨC.",
    date: "16/09/2024",
    image: Tintuc2,
    link: "/sinh-hoat/lien-hoan-mua-lan-2024",
  },
  {
    id: 3,
    title: "Gia đình Phật tử Tây Thành tổ chức Hội trại Mục Kiền Liên PL.2568",
    date: "17/08/2024",
    image: Tintuc3,
    link: "/tin-tuc/hoi-trai-muc-kien-lien-2024",
  },
  {
    id: 4,
    title:
      "TRẠI HỌP BẠN LỤC HÒA VII NĂM 2024 DO PHÂN BAN GĐPT HUYỆN QUẢNG ĐIỀN TỔ CHỨC TẠI CHÙA SƠN TÙNG, XÃ QUẢNG VINH",
    date: "03/08/2024",
    image: Tintuc4,
    link: "/sinh-hoat/luc-hoa-vii-2024",
  },
  {
    id: 5,
    title:
      "6 HUYNH TRƯỞNG GĐPT TÂY THÀNH THAM DỰ LIÊN TRAI HUẤN LUYỆN HUYNH TRƯỞNG CẤP 1 A DỤC KHÓA 40 VÀ SƠ CẤP LỘC UYỂN KHÓA 69 TẠI CHÙA SƠN NGUYÊN, HUYỆN A LƯỚI",
    date: "08/07/2024",
    image: Tintuc5,
    link: "/tu-hoc/lien-trai-huan-luyen-2024",
  },
  {
    id: 6,
    title:
      "Các mầm măng của Gia đình Phật tử Tây Thành tham dự trại Huấn luyện đầu thứ đàn Tuyết Sơn tại chùa Cổ Tháp, xã Quảng Vinh",
    date: "01/07/2024",
    image: Tintuc6,
    link: "/tin-tuc/trai-huan-luyen-tuyet-son-2024",
  },
  {
    id: 7,
    title: "Gia đình Phật tử Tây Thành tổ chức Hội trại Lâm Tỳ Ni PL.2568",
    date: "25/05/2024",
    image: Tintuc7,
    link: "/tin-tuc/hoi-trai-lam-ty-ni-2024",
  },
];

const Header = () => {
  return (
    <div className="bg-header bg-[#f9f0e5]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full py-6">
          <div className="container mx-auto">
            <h2 className="text-[#d4955c] font-bold text-xl mb-4">TIN NHANH</h2>

            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={15}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 },
              }}
              navigation
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              speed={1000}
            >
              {newsData.map((news) => (
                <SwiperSlide key={news.id}>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-48 object-cover md:h-64 lg:h-80"
                    />

                    <div className="absolute inset-0 bg-black opacity-40"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                      {news.link ? (
                        <Link
                          to={news.link}
                          className="text-sm font-semibold text-yellow-400 hover:text-blue-50 line-clamp-2"
                        >
                          {news.title}
                        </Link>
                      ) : (
                        <a
                          href="#"
                          className="text-sm font-semibold text-yellow-400 hover:text-blue-50 line-clamp-2 cursor-not-allowed"
                        >
                          {news.title}
                        </a>
                      )}
                      <p className="text-xs flex items-center mt-1">
                        <i className="fa-regular fa-calendar mr-2"></i>{" "}
                        {news.date}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
