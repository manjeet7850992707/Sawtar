import React from "react";
import  banner from "../../assets/img/ecommercebanner.png"

const EcommerceBanner = () => {
 

  return (
    <div
      className="relative w-full max-w-7xl mx-auto h-[400px] bg-cover bg-center flex items-center justify-center text-white  overflow-hidden"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text + Button */}
      <div className="relative z-10 text-center px-4">
        <p className="uppercase tracking-widest text-sm mb-2">
          Interior E-commerce
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Shop Premium Furniture, Decor & Designer Essentials
        </h1>
        <button className="mt-4 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default EcommerceBanner;
