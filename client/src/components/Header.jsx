import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-[#5044E5]/40 bg-[#5044E5]/10 rounded-full text-sm text-[#5044E5] font-medium">
          <p>New: AI feature integrated</p>
          <img src={assets.star_icon} alt="" className="w-2.5" />
        </div>

        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700">
          Your own <span className="text-[#5044E5]">Blogging</span> <br />{" "}
          platform.
        </h1>

        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs">
          This is a blogging platform where you can share your thoughts, ideas,
          and stories with the world. Create an account, start writing, and
          connect with a community of readers and writers.
        </p>

        <form className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden">
          <input type="text" placeholder="Search for Blogs" required className="w-full pl-4 outline-none"/>
          <button type="submit" className="bg-[#5044E5] text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer">Search</button>
        </form>
      </div>
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-1 opacity-50"
      />
    </div>
  );
};

export default Header;
