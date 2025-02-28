import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#f7e1b5] pt-6">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-3">
          {/* Cột thông tin chiếm 2/3 trên desktop */}
          <div className="md:col-span-2">
            <h1 className="text-[#6d2b15] text-2xl font-bold my-3">
              THÔNG TIN LIÊN HỆ
            </h1>
            <p className="text-[#4a2d19] font-medium flex items-center mb-2 md:mb-0">
              Địa chỉ: Xóm 12, thôn Tây Thành, xã Quảng Thành, huyện Quảng Điền,
              Thành phố Huế.
            </p>
            <p className="text-[#4a2d19] font-medium flex items-center mb-2 md:mb-0">
              Số điện thoại: 0365142649, Htr. Tập sự Quảng Tấn - Lê Quý Thiện,
              Liên đoàn trưởng GĐPT Tây Thành.
            </p>
            <p className="text-[#4a2d19] font-medium flex items-center">
              Fanpage:
              <a
                href="https://www.facebook.com/profile.php?id=100068896704733"
                className="text-[#d97706] font-semibold ml-1 hover:underline"
              >
                facebook.com/@gdpttaythanh
              </a>
            </p>
            <p className="text-[#4a2d19] font-medium flex items-center">
              Tiktok:
              <a
                href="https://www.tiktok.com/@gdpttaythanh"
                className="text-[#d97706] font-semibold ml-1 hover:underline"
              >
                tiktok.com/@gdpttaythanh
              </a>
            </p>
            <p className="text-[#4a2d19] font-medium flex items-center">
              Youtube:
              <a
                href="https://www.youtube.com/@gdpttaythanh"
                className="text-[#d97706] font-semibold ml-1 hover:underline"
              >
                youtube.com/@gdpttaythanh
              </a>
            </p>
          </div>

          {/* Cột nút liên hệ (căn giữa trên mobile, phải trên desktop) */}
          <div className="flex flex-col items-center md:items-end justify-center">
            <button className="bg-[#a53f2b] text-white px-6 py-2 rounded-full flex items-center shadow-md hover:bg-[#822f21] transition duration-300">
              <a href="mailto:gdpttaythanh@gmail.com">✉️ Liên hệ - Góp ý</a>
            </button>
          </div>
        </div>
      </div>

      {/* Thanh bản quyền */}
      <div className="bg-[#8c6239] text-white text-center py-2 mt-4">
        <p>© 2025 - Bản quyền thuộc GĐPT Tây Thành</p>
      </div>
    </div>
  );
};

export default Footer;
