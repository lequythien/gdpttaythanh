import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/gdpttaythanh.png";
import { FiMenu, FiX } from "react-icons/fi";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    tintuc: false,
    tuhoc: false,
  });

  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Kiểm tra kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Đóng menu khi click ngoài và khóa/mở scroll body
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setDropdowns({ tintuc: false, tuhoc: false });
      }
    };

    // Khóa scroll ngang khi menu mở
    if (isOpen && isMobile) {
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowX = "auto";
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflowX = "auto"; // Reset khi unmount
    };
  }, [isOpen, isMobile]);

  const toggleDropdown = (name) => {
    setDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const closeMenu = () => {
    setIsOpen(false);
    setDropdowns({ tintuc: false, tuhoc: false });
  };

  return (
    <div className="bg-[#4A2D1F] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-3 py-2">
        <div className="flex items-center justify-between text-white">
          {!isMobile && (
            <div className="flex w-full items-center">
              {/* Cột trái: Logo */}
              <div className="flex-shrink-0">
                <img
                  onClick={() => navigate("/")}
                  src={Logo}
                  alt="Logo"
                  className="h-16 w-auto cursor-pointer"
                />
              </div>

              {/* Cột giữa: Menu */}
              <ul className="flex-grow flex justify-center space-x-6 text-sm font-semibold items-center">
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                      : "hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 hover:pb-1"
                  }
                >
                  TRANG CHỦ
                </NavLink>
                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                      : "hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 hover:pb-1"
                  }
                >
                  GIỚI THIỆU
                </NavLink>
                <div className="dropdown relative group">
                  <button className="hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 hover:pb-1 flex items-center">
                    TIN TỨC - SỰ KIỆN
                  </button>
                  <div className="dropdown-content absolute bg-[#da7600] rounded-lg text-white shadow-lg hidden group-hover:block">
                    <NavLink
                      to="/news/phat-giao"
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        isActive
                          ? "block px-4 py-2 text-yellow-400"
                          : "block px-4 py-2 hover:text-yellow-400"
                      }
                    >
                      TIN PHẬT GIÁO
                    </NavLink>
                    <NavLink
                      to="/news/gdpt"
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        isActive
                          ? "block px-4 py-2 text-yellow-400"
                          : "block px-4 py-2 hover:text-yellow-400"
                      }
                    >
                      TIN GĐPT
                    </NavLink>
                  </div>
                </div>
                <div className="dropdown relative group">
                  <button className="hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 hover:pb-1 flex items-center">
                    TU HỌC
                  </button>
                  <div className="dropdown-content absolute bg-[#da7600] rounded-lg text-white shadow-lg hidden group-hover:block">
                    <NavLink
                      to="/tu-hoc/huan-luyen"
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        isActive
                          ? "block px-4 py-2 text-yellow-400"
                          : "block px-4 py-2 hover:text-yellow-400"
                      }
                    >
                      HUẤN LUYỆN
                    </NavLink>
                    <NavLink
                      to="/tu-hoc/huynh-truong"
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        isActive
                          ? "block px-4 py-2 text-yellow-400"
                          : "block px-4 py-2 hover:text-yellow-400"
                      }
                    >
                      HUYNH TRƯỞNG
                    </NavLink>
                    <NavLink
                      to="/tu-hoc/nganh-thanh"
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        isActive
                          ? "block px-4 py-2 text-yellow-400"
                          : "block px-4 py-2 hover:text-yellow-400"
                      }
                    >
                      NGÀNH THANH
                    </NavLink>
                    <NavLink
                      to="/tu-hoc/nganh-thieu"
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        isActive
                          ? "block px-4 py-2 text-yellow-400"
                          : "block px-4 py-2 hover:text-yellow-400"
                      }
                    >
                      NGÀNH THIẾU
                    </NavLink>
                    <NavLink
                      to="/tu-hoc/nganh-dong"
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        isActive
                          ? "block px-4 py-2 text-yellow-400"
                          : "block px-4 py-2 hover:text-yellow-400"
                      }
                    >
                      NGÀNH ĐỒNG
                    </NavLink>
                  </div>
                </div>
                <NavLink
                  to="/sinh-hoat"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                      : "hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 hover:pb-1"
                  }
                >
                  SINH HOẠT
                </NavLink>
                <NavLink
                  to="/van-nghe"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                      : "hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 hover:pb-1"
                  }
                >
                  VĂN NGHỆ
                </NavLink>
                <NavLink
                  to="/noi-quy"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                      : "hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 hover:pb-1"
                  }
                >
                  NỘI QUY
                </NavLink>
                <NavLink
                  to="/lien-he"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                      : "hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 hover:pb-1"
                  }
                >
                  LIÊN HỆ
                </NavLink>
              </ul>

              {/* Cột phải: Thanh tìm kiếm */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    className="bg-white text-black px-4 py-1 rounded-lg w-40 focus:outline-none"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Mobile layout */}
          {isMobile && (
            <>
              <img
                onClick={() => navigate("/")}
                src={Logo}
                alt="Logo"
                className="h-16 w-auto cursor-pointer"
              />
              <button
                className="text-2xl lg:hidden focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <FiX /> : <FiMenu />}
              </button>
            </>
          )}
        </div>

        {/* Menu trên mobile */}
        {isMobile && (
          <ul
            ref={menuRef}
            className={`fixed top-16 left-0 w-full bg-[#4A2D1F] text-white font-semibold transition-all duration-300 ease-in-out max-h-screen overflow-y-auto overflow-x-hidden ${
              isOpen ? "opacity-100" : "opacity-0 h-0"
            }`}
          >
            <li className="px-6 py-3">
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 block" : "hover:text-yellow-400 block"
                }
              >
                TRANG CHỦ
              </NavLink>
            </li>
            <li className="px-6 py-3">
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 block" : "hover:text-yellow-400 block"
                }
              >
                GIỚI THIỆU
              </NavLink>
            </li>
            <li className="px-6 py-3">
              <button
                onClick={() => toggleDropdown("tintuc")}
                className="flex justify-between items-center w-full hover:text-yellow-400"
              >
                TIN TỨC - SỰ KIỆN
                {dropdowns.tintuc ? (
                  <IoMdRemove className="text-xl" />
                ) : (
                  <IoMdAdd className="text-xl" />
                )}
              </button>
              <ul
                className={`pl-6 mt-2 space-y-3 ${dropdowns.tintuc ? "block" : "hidden"}`}
              >
                <NavLink
                  to="/news/phat-giao"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400 block" : "hover:text-yellow-400 block py-3"
                  }
                >
                  TIN PHẬT GIÁO
                </NavLink>
                <NavLink
                  to="/news/gdpt"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400 block" : "hover:text-yellow-400 block py-3"
                  }
                >
                  TIN GĐPT
                </NavLink>
              </ul>
            </li>
            <li className="px-6 py-3">
              <button
                onClick={() => toggleDropdown("tuhoc")}
                className="flex justify-between items-center w-full hover:text-yellow-400"
              >
                TU HỌC
                {dropdowns.tuhoc ? (
                  <IoMdRemove className="text-xl" />
                ) : (
                  <IoMdAdd className="text-xl" />
                )}
              </button>
              <ul
                className={`pl-6 mt-2 space-y-3 ${dropdowns.tuhoc ? "block" : "hidden"}`}
              >
                <NavLink
                  to="/tu-hoc/huan-luyen"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400 block" : "hover:text-yellow-400 block py-3"
                  }
                >
                  HUẤN LUYỆN
                </NavLink>
                <NavLink
                  to="/tu-hoc/huynh-truong"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400 block" : "hover:text-yellow-400 block py-3"
                  }
                >
                  HUYNH TRƯỞNG
                </NavLink>
                <NavLink
                  to="/tu-hoc/nganh-thanh"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400 block" : "hover:text-yellow-400 block py-3"
                  }
                >
                  NGÀNH THANH
                </NavLink>
                <NavLink
                  to="/tu-hoc/nganh-thieu"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400 block" : "hover:text-yellow-400 block py-3"
                  }
                >
                  NGÀNH THIẾU
                </NavLink>
                <NavLink
                  to="/tu-hoc/nganh-dong"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400 block" : "hover:text-yellow-400 block py-3"
                  }
                >
                  NGÀNH ĐỒNG
                </NavLink>
              </ul>
            </li>
            <li className="px-6 py-3">
              <NavLink
                to="/sinh-hoat"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 block" : "hover:text-yellow-400 block"
                }
              >
                SINH HOẠT
              </NavLink>
            </li>
            <li className="px-6 py-3">
              <NavLink
                to="/van-nghe"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 block" : "hover:text-yellow-400 block"
                }
              >
                VĂN NGHỆ
              </NavLink>
            </li>
            <li className="px-6 py-3">
              <NavLink
                to="/noi-quy"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 block" : "hover:text-yellow-400 block"
                }
              >
                NỘI QUY
              </NavLink>
            </li>
            <li className="px-6 py-3">
              <NavLink
                to="/lien-he"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 block" : "hover:text-yellow-400 block"
                }
              >
                LIÊN HỆ
              </NavLink>
            </li>
            <li className="px-6 py-3">
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
  );
};

export default Navbar;
  