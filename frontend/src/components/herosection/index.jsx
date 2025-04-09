import React, { useEffect } from 'react';
import homeimage from '../../assets/img/homepageimage2.png'

const HeroSection = () => {
  useEffect(() => {
    // Parallax effect
    const handleMouseMove = (e) => {
      const imageContainer = document.querySelector(".image-container");
      if (imageContainer) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        imageContainer.style.transform = `translateX(${xAxis}px) translateY(${yAxis}px)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Fade-in effect
    const content = document.querySelector(".content");
    const imageContainer = document.querySelector(".image-container");

    if (content && imageContainer) {
      content.style.opacity = "0";
      imageContainer.style.opacity = "0";

      content.style.transition = "opacity 1.5s ease";
      imageContainer.style.transition = "opacity 2s ease";

      setTimeout(() => {
        content.style.opacity = "1";
        imageContainer.style.opacity = "1";
      }, 300);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="relative h-screen w-full overflow-hidden text-white "
      style={{
        backgroundImage: `url(${homeimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="relative h-full w-full flex items-center justify-between px-6 md:px-12 lg:px-20">
        {/* Text content */}
      {/* Text content */}
<div className="content z-10 max-w-2xl bg-black/40 backdrop-blur-sm rounded-2xl p-8">
  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
    Transform Your Space Into a Stylish Haven
  </h2>
  <div className="text-lg sm:text-xl md:text-2xl font-normal mb-4">
    <span>Subheading like Date - 2025</span>
    <div className="w-44 h-1 bg-gradient-to-r from-[#e6a272] to-transparent mt-2"></div>
  </div>
  <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80 max-w-lg">
    This webpage consists of a transitioned web style providing a better workflow on the left side, displaying the text. This has been driving the world crazy.
  </p>
</div>


        {/* Parallax image container (invisible background layer) */}
        <div className="image-container absolute top-0 right-0 w-full h-full bg-cover bg-center pointer-events-none" />
      </div>
    </div>
  );
};

export default HeroSection;
