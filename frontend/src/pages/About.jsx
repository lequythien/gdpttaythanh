import React from "react";
import Img1 from "../assets/img_about1.jpg";
import Avatar1 from "../assets/thich_tam_dao.jpg";
import Avatar2 from "../assets/huynh_luong.jpg";
import Avatar3 from "../assets/truong_van_sung.jpg";
import Avatar4 from "../assets/le_quy_thien.jpg";
import Avatar5 from "../assets/huynh_thi_xuan_mai.jpg";
import Avatar6 from "../assets/huynh_tu_vy.jpg";
import Avatar7 from "../assets/truong_dinh_quang.jpg";
import Avatar8 from "../assets/tran_phuong_uyen.jpg";
import Avatar9 from "../assets/le_quy_phuoc.jpg";
import Avatar10 from "../assets/le_thi_tra_my.jpg";
import Avatar11 from "../assets/huynh_hieu.jpg";
import Avatar12 from "../assets/huynh_thi_my_lien.jpg";
import Avatar13 from "../assets/le_phu_hong_nhat.jpg";
import Avatar14 from "../assets/le_thi_hong_tham.jpg";

const members = [
  {
    title: "Đại Đức Thích Tâm Đạo",
    description:
      "Trưởng Ban hướng dẫn Phật tử GHPGVN huyện Quảng Điền, Trú trì chùa Cổ Tháp xã Quảng Vinh, Cố vấn giáo hạnh GĐPT Tây Thành.",
    image: Avatar1,
  },
  {
    title: "Nguyên Lự - Huỳnh Lưỡng",
    description: "Trưởng ban hộ tự Niệm Phật đường Tây Thành.",
    image: Avatar2,
  },
  {
    title: "Htr. Cấp Tín Nguyên Dũng - Trương Văn Sung",
    description:
      "Gia trưởng GĐPT Tây Thành, kiêm thư ký Ban hộ tự Niệm Phật đường Tây Thành.",
    image: Avatar3,
  },
  {
    title: "Htr. Tập sự Quảng Tấn - Lê Quý Thiện",
    description: "Liên đoàn trưởng GĐPT Tây Thành.",
    image: Avatar4,
  },
];

const staff = [
  {
    title: "THƯ KÝ",
    name: "Htr. Tập sự Quảng Trang - Huỳnh Thị Xuân Mai",
    image: Avatar5,
  },
  {
    title: "THỦ QUỸ",
    name: "Htr. Tập sự Quảng Ánh - Huỳnh Tú Vy",
    image: Avatar6,
  },
];

const teamLeaders = [
  {
    title: "ĐOÀN TRƯỞNG THIẾU NAM",
    name: "Htr. Tập sự Quảng Kiến - Trương Đình Quang",
    image: Avatar7,
  },
  {
    title: "ĐOÀN TRƯỞNG THIẾU NỮ",
    name: "Htr. Tập sự Quảng Tuệ - Trần Phương Uyên",
    image: Avatar8,
  },
  {
    title: "ĐOÀN TRƯỞNG OANH VŨ NAM",
    name: "Htr. Tập sự Quảng Phổ - Lê Quý Phước",
    image: Avatar9,
  },
  {
    title: "ĐOÀN TRƯỞNG OANH VŨ NỮ",
    name: "Htr. Tập sự Quảng Phước - Lê Thị Trà My",
    image: Avatar10,
  },
  {
    title: "ĐOÀN PHÓ THIẾU NAM",
    name: "Htr. Tập sự Quảng Nghiêm - Huỳnh Hiếu",
    image: Avatar11,
  },
  {
    title: "ĐOÀN PHÓ THIẾU NỮ",
    name: "Htr. Tập sự Quảng Diệu - Huỳnh Thị Mỹ Liên",
    image: Avatar12,
  },
  {
    title: "ĐOÀN PHÓ OANH VŨ NAM",
    name: "Htr. Tập sự Nhuận Bảo Minh - Lê Phụ Hồng Nhật",
    image: Avatar13,
  },
  {
    title: "ĐOÀN PHÓ OANH VŨ NỮ",
    name: "Htr. Tập sự Quảng Huyền - Lê Thị Hồng Thắm",
    image: Avatar14,
  },
];

const About = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center py-8"
      style={{
        backgroundImage: `url(${Img1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Lớp phủ nền mờ */}
      <div className="container mx-auto px-4 py-8 text-center space-y-6 relative z-10">
        {/* Banner */}
        <div className="text-white p-4 rounded-lg shadow-md text-center">
          <h3 className="text-3xl sm:text-5xl font-bold py-5">
            GIA ĐÌNH PHẬT TỬ TÂY THÀNH
          </h3>
          <p className="text-sm sm:text-lg md:text-xl font-semibold py-2">
            Thời gian sinh hoạt: Thứ 7 hằng tuần từ 19 giờ 00 phút - 21 giờ 30
            phút
          </p>
          <p className="text-sm sm:text-lg md:text-xl font-semibold py-2">
            Địa chỉ: Thôn Tây Thành, xã Quảng Thành, huyện Quảng Điền, Thành phố
            Huế
          </p>
        </div>

        {/* Danh sách thành viên chính */}
        {members.map((member, index) => (
          <div key={index} className="flex justify-center mb-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center w-full sm:w-80 lg:w-96">
              <img
                src={member.image || "/default-avatar.jpg"}
                alt={member.title}
                className="w-32 h-32 object-cover rounded-full border-4 border-gray-300"
              />
              <h1 className="font-bold text-xl mt-4">{member.title}</h1>
              <p className="text-base font-medium mt-2">{member.description}</p>
            </div>
          </div>
        ))}

        {/* Thư ký & Thủ quỹ */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 mb-8">
          {staff.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center w-full sm:w-80 lg:w-96"
            >
              <img
                src={item.image || "/default-avatar.jpg"}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-gray-300"
              />
              <h2 className="text-lg font-bold mt-4">{item.title}</h2>
              <p className="text-base font-medium mt-2">{item.name}</p>
            </div>
          ))}
        </div>

        {/* Các Đoàn trưởng & Đoàn phó */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {teamLeaders.map((leader, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={leader.image || "/default-avatar.jpg"}
                alt={leader.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-gray-300"
              />
              <h2 className="text-lg font-semibold mt-4">{leader.title}</h2>
              <p className="text-base font-medium mt-2">{leader.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
