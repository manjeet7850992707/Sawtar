import React from 'react';

const AIPoweredEcosystemSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#e6a272] to-[#D26C44] py-20">
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 container mx-auto px-6 md:px-16 text-white text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          India’s First AI-Powered Interior Ecosystem
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-xl mb-4 font-medium">
          Combining Design, Marketplace, and Freelance Services
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg leading-relaxed opacity-90 max-w-3xl mx-auto mb-6">
          Explore the future of interior design with AI-driven tools that help you plan your space, shop for the best furniture, and hire top freelancers – all in one place. Join a vibrant ecosystem revolutionizing how we design and live.
        </p>

        {/* Explore More Button */}
        <a
          href="#explore-more"
          className="inline-block bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
        >
          Explore More
        </a>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-purple-500/20 blur-xl animate-pulse" />
      <div className="absolute bottom-1/3 right-20 w-24 h-24 rounded-full bg-amber-500/20 blur-xl animate-pulse" />
    </section>
  );
};

export default AIPoweredEcosystemSection;
