import React from "react";

const Hero = () => {
  return (
    <div>
      <img
        className="w-full object-cover"
        src="https://i.pinimg.com/1200x/ff/e4/02/ffe4024257107a895d895edd54877ac1.jpg"
        alt=""
      />
      <div className="absolute top-22 h-174 inset-0 bg-black/60"></div>
    </div>
  );
};

export default Hero;
