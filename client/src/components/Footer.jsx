import React from "react";
import { assets, footer_data } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-[#5044E5]/3">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        <div>
          <img src={assets.logo} alt="Logo" className="w-32 sm:w-56"/>
          <p className="max-w-[410px] mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit unde, nemo ipsa recusandae perferendis obcaecati magni reiciendis eius voluptatem repudiandae nisi porro a soluta, atque maxime aperiam dolore. Eius.</p>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {footer_data.map((section, index) => (
            <div key={index} className="min-w-[120px]">
              <h2 className="font-semibold text-base text-gray-900 mb-2 md:mb-5">{section.title}</h2>
              <ul className="text-sm space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline cursor-pointer transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center py-4 text-sm md:text-base text-gray-500/80">
        GIA ĐÌNH PHẬT TỬ TÂY THÀNH
      </p>
    </div>
  );
};

export default Footer;
