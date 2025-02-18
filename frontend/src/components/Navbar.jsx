import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/gdpttaythanh.png";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const menuRef = useRef(null); // Để theo dõi vùng menu
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Gọi ngay khi component mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Đóng menu khi click ngoài vùng menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Hàm đóng menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-[#4A2D1F] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-white px-6 py-2">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <img
              onClick={() => navigate("/")}
              src={Logo}
              alt="Logo"
              className="h-12 sm:h-14 lg:h-16 w-auto cursor-pointer"
            />

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
                <NavLink to="/" onClick={closeMenu} activeClassName="underline">
                  <li className="text-yellow-400 border-yellow-400 pb-1">
                    TRANG CHỦ
                  </li>
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  activeClassName="underline"
                >
                  <li className="hover:text-yellow-400">GIỚI THIỆU</li>
                </NavLink>

                <li className="group relative">
                  <p className="hover:text-yellow-400 cursor-pointer">
                    TIN TỨC - SỰ KIỆN
                  </p>
                  <ul className="absolute left-0 mt-4 hidden group-hover:block bg-[#da7600] shadow-lg rounded-xl w-48 py-2 px-3 space-y-4">
                    <NavLink
                      to="/news/phat-giao"
                      onClick={closeMenu}
                      activeClassName="underline"
                    >
                      <li className="my-2">TIN PHẬT GIÁO</li>
                    </NavLink>
                    <NavLink
                      to="/news/gdpt"
                      onClick={closeMenu}
                      activeClassName="underline"
                    >
                      <li className="my-2">TIN GĐPT</li>
                    </NavLink>
                  </ul>
                </li>

                <li className="group relative">
                  <p className="hover:text-yellow-400 cursor-pointer">TU HỌC</p>
                  <ul className="absolute left-0 mt-4 hidden group-hover:block bg-[#da7600] shadow-lg rounded-xl w-48 py-2 px-3 space-y-4">
                    <NavLink
                      to="/tu-hoc/huan-luyen"
                      onClick={closeMenu}
                      activeClassName="underline"
                    >
                      <li className="my-2">HUẤN LUYỆN</li>
                    </NavLink>
                    <NavLink
                      to="/tu-hoc/huynh-truong"
                      onClick={closeMenu}
                      activeClassName="underline"
                    >
                      <li className="my-2">HUYNH TRƯỞNG</li>
                    </NavLink>
                    <NavLink
                      to="/tu-hoc/nganh-thanh"
                      onClick={closeMenu}
                      activeClassName="underline"
                    >
                      <li className="my-2">NGÀNH THANH</li>
                    </NavLink>
                    <NavLink
                      to="/tu-hoc/nganh-thieu"
                      onClick={closeMenu}
                      activeClassName="underline"
                    >
                      <li className="my-2">NGÀNH THIẾU</li>
                    </NavLink>
                    <NavLink
                      to="/tu-hoc/nganh-dong"
                      onClick={closeMenu}
                      activeClassName="underline"
                    >
                      <li className="my-2">NGÀNH ĐỒNG</li>
                    </NavLink>
                  </ul>
                </li>

                <NavLink
                  to="/sinh-hoat"
                  onClick={closeMenu}
                  activeClassName="underline"
                >
                  <li className="hover:text-yellow-400">SINH HOẠT</li>
                </NavLink>

                <NavLink
                  to="/van-nghe"
                  onClick={closeMenu}
                  activeClassName="underline"
                >
                  <li className="hover:text-yellow-400">VĂN NGHỆ</li>
                </NavLink>

                <NavLink
                  to="/noi-quy"
                  onClick={closeMenu}
                  activeClassName="underline"
                >
                  <li className="hover:text-yellow-400">NỘI QUY</li>
                </NavLink>

                <NavLink
                  to="/lien-he"
                  onClick={closeMenu}
                  activeClassName="underline"
                >
                  <li className="hover:text-yellow-400">LIÊN HỆ</li>
                </NavLink>
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
              ref={menuRef}
              className={`fixed top-16 left-0 w-full bg-black transition-all duration-500 ease-in-out ${
                isOpen
                  ? "max-h-screen opacity-100 visible"
                  : "max-h-0 opacity-0 invisible"
              } overflow-hidden font-semibold flex flex-col space-y-6 py-4 px-6`}
            >
              <NavLink to="/" onClick={closeMenu} activeClassName="underline">
                <li className="hover:text-yellow-400 block w-full">
                  TRANG CHỦ
                </li>
              </NavLink>

              <NavLink
                to="/about"
                onClick={closeMenu}
                activeClassName="underline"
              >
                <li className="hover:text-yellow-400 block w-full">
                  GIỚI THIỆU
                </li>
              </NavLink>

              {/* Dropdown trên mobile */}
              <li className="relative w-full">
                <details className="w-full">
                  <summary className="cursor-pointer hover:text-yellow-400 block w-full">
                    TIN TỨC - SỰ KIỆN
                  </summary>
                  <ul className="mt-4 space-y-4 pl-4">
                    <NavLink
                      to="/news/phat-giao"
                      onClick={closeMenu}
                      activeClassName="underline"
                    >
                      <li className="mb-4">TIN PHẬT GIÁO</li>
                    </NavLink>
                    <NavLink
                      to="/news/gdpt"
                      onClick={closeMenu}
                      activeClassName="underline"
                    >
                      <li>TIN GĐPT</li>
                    </NavLink>
                  </ul>
                </details>
              </li>

              <li className="relative w-full">
                <details className="w-full">
                  <summary className="cursor-pointer hover:text-yellow-400 block w-full">
                    TU HỌC
                  </summary>
                  <ul className="mt-4 space-y-6 pl-4">
                    <NavLink
                      to="/tu-hoc/huan-luyen"
                      onClick={closeMenu}
                      activeClassName="underline"
                    >
                      <li className="mb-4">HUẤN LUYỆN</li>
                    </NavLink>
                    <NavLink
                      to="/tu-hoc/huynh-truong"
                      onClick={closeMenu}
                      activeClassName="underline"
                    >
                      <li className="mb-4">HUYNH TRƯỞNG</li>
                    </NavLink>
                    <NavLink
                      to="/tu-hoc/nganh-thanh"
                      onClick={closeMenu}
                      activeClassName="underline"
                    >
                      <li className="mb-4">NGÀNH THANH</li>
                    </NavLink>
                    <NavLink
                      to="/tu-hoc/nganh-thieu"
                      onClick={closeMenu}
                      activeClassName="underline"
                    >
                      <li className="mb-4">NGÀNH THIẾU</li>
                    </NavLink>
                    <NavLink
                      to="/tu-hoc/nganh-dong"
                      onClick={closeMenu}
                      activeClassName="underline"
                    >
                      <li>NGÀNH ĐỒNG</li>
                    </NavLink>
                  </ul>
                </details>
              </li>

              <NavLink
                to="/sinh-hoat"
                onClick={closeMenu}
                activeClassName="underline"
              >
                <li className="hover:text-yellow-400 block w-full">
                  SINH HOẠT
                </li>
              </NavLink>
              <NavLink
                to="/van-nghe"
                onClick={closeMenu}
                activeClassName="underline"
              >
                <li className="hover:text-yellow-400 block w-full">VĂN NGHỆ</li>
              </NavLink>
              <NavLink
                to="/noi-quy"
                onClick={closeMenu}
                activeClassName="underline"
              >
                <li className="hover:text-yellow-400 block w-full">NỘI QUY</li>
              </NavLink>
              <NavLink
                to="/lien-he"
                onClick={closeMenu}
                activeClassName="underline"
              >
                <li className="hover:text-yellow-400 block w-full">LIÊN HỆ</li>
              </NavLink>

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
      </div>
    </div>
  );
};

export default Navbar;
