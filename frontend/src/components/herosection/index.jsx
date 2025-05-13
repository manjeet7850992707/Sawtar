import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import homeimage from "../../assets/img/homepageimage2-min.png";

const featureCards = [
  {
    id: 1,
    title: "AI-Based Interior Design Planner",
    description:
      "Create your dream home with our AI-powered interior design tool. Personalized suggestions, styling tips, and layout planning.",
    subtext: "Smart, intuitive, and stylish.",
    image: "https://img.icons8.com/ios-filled/100/ffffff/artificial-intelligence.png",
    buttonText: "Start Designing",
    link: "/ai-design",
  },
  {
    id: 2,
    title: "Freelancer & Service Marketplace",
    description:
      "Find top designers, architects, and service providers. Hire professionals for any project, big or small.",
    subtext: "Connect with the best in the industry.",
    image: "https://img.icons8.com/ios-filled/100/ffffff/person.png",
    buttonText: "Explore Marketplace",
    link: "/freelancer-marketplace",
  },
  {
    id: 3,
    title: "Interior Product E-commerce Store",
    description:
      "Shop home décor, furniture, and accessories from trusted brands. Quick delivery and quality guaranteed.",
    subtext: "Shop now, style your space.",
    image: "https://img.icons8.com/ios/100/ffffff/shopping-cart--v1.png",
    buttonText: "Start Shopping",
    link: "/shop",
  },
 
  {
    id: 4,
    title: "Community-driven Social Media for Design Enthusiasts",
    description:
      "Share your designs, get inspired, and connect with others in the design community. Join the conversation today.",
    subtext: "Inspire, share, and connect.",
    image: "https://img.icons8.com/ios-filled/100/ffffff/group-background-selected.png",
    buttonText: "Join Now",
    link: "/social",
  },
];

const HeroSection = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const cardRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, [currentCard]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % featureCards.length);
    }, 6000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div
      className="relative h-screen w-full overflow-hidden text-white"
      style={{
        backgroundImage: `url(${homeimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 h-full w-full grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-16 lg:px-24 gap-10 pt-20">
        {/* Left Section */}
        <div className="rounded-2xl p-6 md:p-10 text-white max-w-2xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Transform Your <br />
            Home with Innovation
          </h2>

          <p className="text-lg sm:text-xl mb-4 font-medium">
            2025's Interior Design Revolution
            <div className="w-44 h-1 bg-gradient-to-r from-[#e6a272] to-transparent mt-2"></div>
          </p>

          <p className="text-base sm:text-lg leading-relaxed opacity-90 max-w-xl mb-6">
            From 3D visualizations to shopping your favorite styles and even joining our social design network – we have it all.
          </p>

          <Link
            to="/get-started"
            className="inline-block bg-[#D26C44] hover:bg-[#f0b185] text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            Get Started
          </Link>
        </div>

        {/* Right Section */}
        <div className="w-full h-[500px] relative">
          <div
            ref={cardRef}
            key={featureCards[currentCard].id}
            className="absolute w-full h-full p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg text-white flex flex-col justify-between transition-all duration-500"
          >
            <div>
              <div className="mb-6">
                <img
                  src={featureCards[currentCard].image}
                  alt={featureCards[currentCard].title}
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-3xl font-bold mb-3">
                {featureCards[currentCard].title}
              </h3>
              <p className="text-lg opacity-90 mb-2">
                {featureCards[currentCard].description}
              </p>
              <p className="text-sm text-white/80 italic">
                {featureCards[currentCard].subtext}
              </p>
            </div>
            <div className="mt-6">
              <Link
                to={featureCards[currentCard].link}
                className="inline-block bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
              >
                {featureCards[currentCard].buttonText}
              </Link>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="absolute -bottom-12 w-full flex justify-center gap-3">
            {featureCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`w-3 h-3 rounded-full ${
                  currentCard === index ? "bg-white" : "bg-white/40"
                } transition-all`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Decor Elements */}
      <div className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-purple-500/20 blur-xl animate-pulse" />
      <div className="absolute bottom-1/3 right-20 w-24 h-24 rounded-full bg-amber-500/20 blur-xl animate-pulse" />
    </div>
  );
};

export default HeroSection;
