import React from "react";

const Map = () => {
  return (
    <div className="mt-0 md:mt-10 mx-0">
      <div className="google-map-iframe w-full h-96 sm:h-80 md:h-[500px] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.8179339434146!2d107.55644237460933!3d16.535286726793796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141090c4c9f4447%3A0xbdbbb7b0b5169907!2zQ2jDuWEgVMOieSBUaMOgbmg!5e0!3m2!1svi!2s!4v1739520074539!5m2!1svi!2s"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
