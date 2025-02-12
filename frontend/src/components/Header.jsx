import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
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
    title: "Gia đình Phật tử Tây Thành tổ chức múa lân Tết Ất Tỵ 2025",
    date: "29/01/2025",
    image: Tintuc1,
  },
  {
    id: 2,
    title:
      "Gia đình Phật tử Tây Thành tham gia giải Liên hoan múa lân Kiên Thệ 3, do BHD PB tỉnh Thừa Thiên Huế tổ chức.",
    date: "16/09/2024",
    image: Tintuc2,
  },
  {
    id: 3,
    title: "Gia đình Phật tử Tây Thành tổ chức Hội trại Mục Kiền Liên PL.2568",
    date: "17/08/2024",
    image: Tintuc3,
  },
  {
    id: 4,
    title:
      "Gia đình Phật tử Tây Thành tham gia trại Họp bạn Lục Hòa VII do Phân ban GĐPT huyện Quảng Điển tổ chức tại chùa Sơn Tùng, xã Quảng Vinh",
    date: "03/08/2024",
    image: Tintuc4,
  },
  {
    id: 5,
    title:
      "6 Huynh trưởng GĐPT Tây Thành tham dự Liên trại Huấn luyện Huynh trưởng Cấp 1 A Dục khóa 40 và Sơ cấp Lộc Uyển khóa 69 tại chùa Sơn Nguyên, huyện A Lưới",
    date: "08/07/2024",
    image: Tintuc5,
  },
  {
    id: 6,
    title:
      "Các mầm măng của Gia đình Phật tử Tây Thành tham dự trại Huấn luyện đầu thứ đàn Tuyết Sơn tại chùa Cổ Tháp, xã Quảng Vinh",
    date: "01/07/2024",
    image: Tintuc6,
  },
  {
    id: 7,
    title: "Gia đình Phật tử Tây Thành tổ chức Hội trại Lâm Tỳ Ni PL.2568",
    date: "25/05/2024",
    image: Tintuc7,
  },
];

const Header = () => {
  return (
    <div className="bg-[#f9f0e5] py-6 px-1 md:px-8">
      <div className="container mx-auto px-4">
        <h2 className="text-[#d4955c] font-bold text-xl mb-4">TIN NHANH</h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
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
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />

                <div className="absolute inset-0 bg-black opacity-40"></div>

                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <a
                    href="#"
                    className="text-sm font-semibold text-yellow-400 hover:text-blue-50"
                  >
                    {news.title.length > 60
                      ? news.title.slice(0, 60) + "..."
                      : news.title}
                  </a>
                  <p className="text-xs flex items-center mt-1">
                    📅 {news.date}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
