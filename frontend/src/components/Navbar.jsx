import React, { useState, useEffect } from "react";
import Logo from "../assets/gdpttaythanh.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Gọi ngay khi component mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#4A2D1F] text-white px-6 py-2 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-16 w-auto" />
        </a>

        {/* Nút menu trên mobile */}
        {isMobile && (
          <button
            className="text-white text-2xl lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        )}

        {/* Menu trên desktop */}
        {!isMobile && (
          <ul className="flex space-x-6 text-sm font-semibold">
            <li>
              <a
                href="#"
                className="text-yellow-400 border-yellow-400 pb-1"
              >
                TRANG CHỦ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                GIỚI THIỆU
              </a>
            </li>

            <li className="group relative">
              <p className="hover:text-yellow-400 cursor-pointer">
                TIN TỨC - SỰ KIỆN
              </p>
              <ul className="absolute left-0 mt-4 hidden group-hover:block bg-[#da7600] shadow-lg rounded-xl w-48 py-2 px-3 space-y-4">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    TIN PHẬT GIÁO
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    TIN GĐPT
                  </a>
                </li>
              </ul>
            </li>

            <li className="group relative">
              <p className="hover:text-yellow-400 cursor-pointer">
                TU HỌC
              </p>
              <ul className="absolute left-0 mt-4 hidden group-hover:block bg-[#da7600] shadow-lg rounded-xl w-48 py-2 px-3 space-y-4">
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    HUẤN LUYỆN
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    HUYNH TRƯỞNG
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    NGÀNH THANH
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    NGÀNH THIẾU
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    NGÀNH ĐỒNG
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className="hover:text-yellow-400">
                SINH HOẠT
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                VĂN NGHỆ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                NỘI QUY
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                LIÊN HỆ
              </a>
            </li>
          </ul>
        )}

        {/* Thanh tìm kiếm (Chỉ hiển thị trên desktop) */}
        {!isMobile && (
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="bg-white text-black px-4 py-1 rounded-lg w-40 focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        )}
      </div>

      {/* Menu trên mobile */}
      {isMobile && (
        <ul
          className={`fixed top-20 left-0 w-full bg-black transition-all duration-500 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          } overflow-hidden font-semibold flex flex-col space-y-6 py-4 px-6`}
        >
          <li>
            <a href="#" className="hover:text-yellow-400 block w-full">
              TRANG CHỦ
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400 block w-full">
              GIỚI THIỆU
            </a>
          </li>

          {/* Dropdown trên mobile */}
          <li className="relative w-full">
            <details className="w-full">
              <summary className="cursor-pointer hover:text-yellow-400 block w-full">
                TIN TỨC - SỰ KIỆN
              </summary>
              <ul className="mt-4 space-y-4 pl-4">
                <li>
                  <a href="#" className="hover:text-yellow-400 block w-full">
                    TIN PHẬT GIÁO
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 block w-full">
                    TIN GĐPT
                  </a>
                </li>
              </ul>
            </details>
          </li>

          <li className="relative w-full">
            <details className="w-full">
              <summary className="cursor-pointer hover:text-yellow-400 block w-full">
                TU HỌC
              </summary>
              <ul className="mt-4 space-y-4 pl-4">
                <li>
                  <a href="#" className="hover:text-yellow-400 block w-full">
                    HUẤN LUYỆN
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 block w-full">
                    HUYNH TRƯỞNG
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 block w-full">
                    NGÀNH THANH
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 block w-full">
                    NGÀNH THIẾU
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 block w-full">
                    NGÀNH ĐỒNG
                  </a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <a href="#" className="hover:text-yellow-400 block w-full">
              SINH HOẠT
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400 block w-full">
              VĂN NGHỆ
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400 block w-full">
              NỘI QUY
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400 block w-full">
              LIÊN HỆ
            </a>
          </li>

          <li className="w-full py-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="bg-white text-black px-4 py-1 rounded-lg w-full focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
