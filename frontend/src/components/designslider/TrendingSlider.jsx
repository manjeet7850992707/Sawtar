// src/components/TrendSlider.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import slider1 from '../../assets/img/trend/slider1.jpg'

const trends = [
  {
    image: slider1,
    title: "Minimalist Living",
    subtitle: "Simplicity is the new luxury",
  },
  {
    image: slider1,
    title: "Boho Chic",
    subtitle: "Colorful comfort & patterns",
  },
  {
    image: slider1,
    title: "Industrial Loft",
    subtitle: "Raw, rugged aesthetics",
  },
  {
    image: slider1,
    title: "Nature-Inspired",
    subtitle: "Green and earthy tones",
  },
  {
    image: slider1,
    title: "Retro Revival",
    subtitle: "Vintage meets modern",
  },
  {
    image: slider1,
    title: "Japandi Style",
    subtitle: "Japanese + Scandinavian blend",
  },
];

const TrendSlider = () => {
  return (
    <div className="w-full bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 text-center mb-6">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">
          Trending Design Styles
        </h2>
        <p className="text-slate-500">
          Explore popular interior styles & stay ahead of the trend.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={5}
        spaceBetween={20}
        className="px-4"
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {trends.map((trend, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md group cursor-pointer">
              <img
                src={trend.image}
                alt={trend.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
                <h3 className="text-lg font-semibold">{trend.title}</h3>
                <p className="text-sm">{trend.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendSlider;
