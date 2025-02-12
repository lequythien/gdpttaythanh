import React from "react";
import Sukien1 from "../assets/sukien1.jpg";
import Sukien2 from "../assets/sukien2.jpg";
import Sukien3 from "../assets/tintuc5.jpg";
import Sukien4 from "../assets/tintuc1.jpg";
import Sukien5 from "../assets/tintuc3.jpg";
import Sukien6 from "../assets/tintuc6.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const events = [
  {
    image: Sukien2,
    title:
      "Gia đình Phật tử Tây Thành tham gia giải Liên hoan múa lân Kiên Thệ 3",
    date: "16/09/2024",
  },
  {
    image: Sukien3,
    title: "6 Huynh trưởng GĐPT Tây Thành tham dự Liên trại Huấn luyện",
    date: "08/07/2024",
  },
  {
    image: Sukien4,
    title: "Gia đình Phật tử Tây Thành tổ chức múa lân Tết Ất Tỵ 2025",
    date: "29/01/2025",
  },
  {
    image: Sukien5,
    title: "Gia đình Phật tử Tây Thành tổ chức Hội trại Mục Kiền Liên",
    date: "17/08/2024",
  },
  {
    image: Sukien6,
    title:
      "Các mầm măng của Gia đình Phật tử Tây Thành tham dự trại Huấn luyện",
    date: "01/07/2024",
  },
];

const Event = () => {
  return (
    <div className="flex flex-col md:flex-row py-12 px-4 md:px-12 space-y-8 md:space-y-0 md:space-x-8">
      <div className="w-full md:w-1/2 flex flex-col items-center relative">
        <div className="w-full h-80 md:h-auto bg-cover bg-center rounded-lg relative">
          <img
            src={Sukien1}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Social Media Links - Placed over the image */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            <ul className="flex space-x-8">
              <li>
                <a href="#" className="text-white hover:text-blue-500">
                  <i className="fa-brands fa-facebook-f text-2xl"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-black">
                  <i className="fa-brands fa-tiktok text-2xl"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-red-500">
                  <i className="fa-brands fa-youtube text-2xl"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  <i className="fa-solid fa-envelope text-2xl"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-4 md:p-0 bg-white">
        <h1 className="text-xl md:text-3xl font-bold text-[#853f26] mb-2">
          GIA ĐÌNH PHẬT TỬ TÂY THÀNH
        </h1>
        <p className="text-base md:text-lg font-medium text-[#d97a5e]">
          <i className="fa-solid fa-location-dot mr-2 text-[#d97a5e]"></i>
          Thôn Tây Thành, xã Quảng Thành, huyện Quảng Điền, thành phố Huế
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-[#d97a5e] mt-6 mb-4">
          HOẠT ĐỘNG NỔI BẬT
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          className="mySwiper"
          speed={1000}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <a
                    href="#"
                    className="text-l md:text-xl font-semibold text-[#853f26] hover:text-blue-400 transition-colors"
                  >
                    {event.title.slice(0, 28)}...
                  </a>
                  <p className="text-yellow-600 mt-2">📅 {event.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Event;
