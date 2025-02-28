import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import SinhHoat from "./pages/SinhHoat";
import LucHoaVll from "./pages/Blog/LucHoaVll";
import ADucLocUyen from "./pages/Blog/ADucLocUyen";
import MuaLanTet2025 from "./pages/Blog/MuaLanTet2025";
import ToTop from "./ToTop";
import Search from "./components/Search";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sinh-hoat" element={<SinhHoat />} />
        <Route path="/sinh-hoat/luc-hoa-vii-2024" element={<LucHoaVll />} />
        <Route path="/sinh-hoat/mua-lan-tet-2025" element={<MuaLanTet2025 />} />
        <Route path="/sinh-hoat/aduc-locuyen" element={<ADucLocUyen />} />
        <Route
          path="/tu-hoc/lien-trai-huan-luyen-2024"
          element={<ADucLocUyen />}
        />
      </Routes>
      <Footer />
      <ToTop />
    </div>
  );
};

export default App;
