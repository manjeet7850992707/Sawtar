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
    role: "Homeowner, Tamil Nadu",
    desc: "A freelance designer brought our dream home to life. Everything was well-communicated and on time, from 3D visualization to final delivery.",
    videoUrl: testimonialvideo,
  },
  {
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "R. Kumar",
    role: "Tenant, Bangalore",
    desc: "I was able to hire an interior expert and also purchase high-quality furnishings from one place. Everything was smooth and professional.",
    videoUrl: testimonialvideo,
  },
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Priya Sharma",
    role: "Buyer, Delhi",
    desc: "Loved the seamless experience of browsing designer products, getting estimates, and hiring a freelancer directly through the platform.",
    videoUrl: testimonialvideo,
  },
  {
    img: "https://randomuser.me/api/portraits/women/35.jpg",
    name: "Anita Reddy",
    role: "Interior Designer, Hyderabad",
    desc: "This platform connects me with amazing clients looking to beautify their homes. It’s easy to showcase my work and build trust.",
    videoUrl: testimonialvideo,
  },
  {
    img: "https://randomuser.me/api/portraits/men/58.jpg",
    name: "Vikram Singh",
    role: "Freelancer, Mumbai",
    desc: "Great visibility for my freelance services and products. I’ve been able to grow my interior design business faster than ever.",
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
      {/* Video Preview */}
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

      {/* Client Info */}
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
              What Our Clients Say
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Real Stories From Our Home Design Community
            </h1>
            <p className="text-gray-600 mt-2">
              Hear from homeowners, tenants, designers, and freelancers who’ve
              transformed their spaces or businesses with us. From hiring pros to
              buying interior products — it’s all possible here.
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
