import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#e6cdaa]">
      <div className="container mx-auto px-10">
        {/* Chia footer thành 2 cột */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phần thông tin liên hệ (bên trái) */}
          <div>
            <h1 className="text-[#853f26] text-2xl font-bold my-3">
              THÔNG TIN LIÊN HỆ
            </h1>
            <p>
              Địa chỉ: Xóm 12, thôn Tây Thành, xã Quảng Thành, huyện Quảng Điền,
              Thành phố Huế
            </p>
            <p>
              Số điện thoại: 0365142649, Htr. Tập sự Quảng Tấn - Lê Quý
              Thiện, Liên đoàn trưởng GĐPT Tây Thành.
            </p>
            <p>
              Fanpage:{" "}
              <a href="#" className="text-blue-600">
                facebook.com/@gdpttaythanh
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="#" className="text-blue-600">
                gdpttaythanh@gmail.com
              </a>
            </p>
            <p>
              Tiktok:{" "}
              <a href="#" className="text-blue-600">
                tiktok.com/@gdpttaythanh
              </a>
            </p>
            <p>
              Youtube:{" "}
              <a href="#" className="text-blue-600">
                youtube.com/@gdpttaythanh
              </a>
            </p>
          </div>

          {/* Phần nút liên hệ và lượt truy cập (bên phải) */}
          <div className="flex flex-col items-center justify-center md:items-end">
            <button className="bg-[#69301a] text-white px-6 py-2 rounded-full flex items-center mb-3">
              ✉️ Liên hệ - Góp ý
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
