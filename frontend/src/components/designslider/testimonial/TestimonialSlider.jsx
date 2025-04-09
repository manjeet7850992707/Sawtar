import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import testimonialvideo from '../../../assets/video/testimonialvideo.mp4'; // Your local video file

const testimonials = [
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "S. Anandan",
    role: "Owner, Tamil Nadu",
    desc: "A Relationship Manager followed up with potential customers and ensured every detail was perfectly communicated. The follow-ups were timely and courteous.",
    videoUrl: testimonialvideo,
  },
  {
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "R. Kumar",
    role: "Tenant, Bangalore",
    desc: "99acres helped me find the perfect apartment with zero hassle. The customer service was excellent throughout the process.",
    videoUrl: testimonialvideo,
  },
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Priya Sharma",
    role: "Buyer, Delhi",
    desc: "The entire experience was seamless, and I loved how easy it was to browse and shortlist properties.",
    videoUrl: testimonialvideo,
  },
  {
    img: "https://randomuser.me/api/portraits/women/35.jpg",
    name: "Anita Reddy",
    role: "Owner, Hyderabad",
    desc: "Very happy with the support from 99acres. The listing process was simple, and I got responses quickly.",
    videoUrl: testimonialvideo,
  },
  {
    img: "https://randomuser.me/api/portraits/men/58.jpg",
    name: "Vikram Singh",
    role: "Dealer, Mumbai",
    desc: "Reliable platform and great visibility for my property listings. Highly recommended.",
    videoUrl: testimonialvideo,
  },
];

const TestimonialCard = ({ img, name, role, desc, videoUrl }) => {
  const [showMore, setShowMore] = useState(false);

  const limit = 100;
  const isLong = desc.length > limit;
  const shortText = desc.slice(0, limit);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white border border-gray-200 rounded-xl shadow p-4 h-[480px] flex flex-col justify-between mx-2"
    >
      {/* Directly show video */}
      <div className="mb-4 rounded overflow-hidden">
        <video
          className="w-full h-[200px] object-cover rounded"
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Text Content */}
      <div>
        <h4 className="font-semibold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-500 mb-2">{role}</p>
        <p className="text-gray-700 text-sm">
          {showMore ? desc : isLong ? shortText + "..." : desc}
        </p>
        {isLong && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-2 text-blue-500 underline text-xs"
          >
            {showMore ? "See less" : "See more"}
          </button>
        )}
      </div>
    </motion.div>
  );
};


const TestimonialSlider = () => {
  return (
<div className="relative pb-24 md:pb-24">
{/* Header Section */}
      <div className="relative bg-gray-300 py-12 md:py-24 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-16">
            <p className="text-sm font-semibold text-gray-500 uppercase">
              Testimonials
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              What our customers are saying about 99acres
            </h1>
            <p className="text-gray-600 mt-2">
              Hear from our satisfied buyers, tenants, owners and dealers
            </p>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="max-w-6xl mx-auto md:px-8">
        <div className="relative -mt-10 md:-mt-20 w-full">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
