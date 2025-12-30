import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 max-md:m-6 border border-[#5044E5]/30 shadow-xl shadow-[#5044E5]/15 rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full py-6 text-center">
            <h1 className="text-3xl font-bold text-green-600">
              <span className="text-blue-600">ADMIN </span>
              GĐPT TÂY THÀNH
            </h1>
            <p classNam="font-light">
              Nhập đúng tài khoản và mật khẩu để truy cập vào trang quản trị.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-6 w-full sm:max-w-md text-gray-600"
          >
            <div className="flex flex-col">
              <label>Tài khoản</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                required
                placeholder="Nhập tài khoản của bạn"
                className="border-b-2 border-gray-300 p-2 outline-none mb-6"
              />
            </div>
            <div className="flex flex-col">
              <label>Mật khẩu</label>
              <input
                type="password"
                required
                placeholder="Nhập mật khẩu của bạn"
                className="border-b-2 border-gray-300 p-2 outline-none mb-6"
              />
            </div>
            <button
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="submit"
              className="w-full py-3 font-medium bg-[#5044E5] text-white rounded cursor-pointer hover:bg-[#5044E5]/90 transition-all"
            >
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
