import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import slideimage from '../assets/img/slide1.png';
import slideimage1 from '../assets/img/slide2.png';

const steps = [
  { before: slideimage, after: slideimage, title: "Meet Designer", desc: "We discuss your vision and requirements for the space." },
  { before: slideimage1, after: slideimage1, title: "Seal the Deal", desc: "Our designers create initial concepts for your review." },
  { before: slideimage, after: slideimage, title: "Place the Order", desc: "You select materials, colors, and finishes." },
  { before: slideimage1, after: slideimage1, title: "Installation Begins", desc: "Our team brings the design to life with precision." },
  { before: slideimage, after: slideimage, title: "Move In", desc: "We reveal your beautifully transformed space!" }
];

const StepCarousel = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBefore(prev => !prev);
      if (!showBefore) {
        setCurrentStep(prev => (prev + 1) % steps.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [showBefore]);

  const handlePrev = () => {
    setCurrentStep(prev => (prev === 0 ? steps.length - 1 : prev - 1));
    setShowBefore(true);
  };

  const handleNext = () => {
    setCurrentStep(prev => (prev + 1) % steps.length);
    setShowBefore(true);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">Home Interiors in 5 Easy Steps</h2>
        <p className="text-gray-600 text-lg">Our proven process to create your dream space</p>
      </div>

      {/* Step Indicators with Dotted Line */}
      <div className="relative flex justify-between items-center mb-12 px-4 md:px-10">
        {/* Dotted Line */}
        <div className="absolute top-7 left-14 right-14 h-1 z-0 flex justify-between items-center">
          {steps.slice(0, -1).map((_, i) => (
            <div
              key={i}
              className="h-1 w-full mx-1"
              style={{
                backgroundImage: i < currentStep
                  ? 'linear-gradient(to right, #D26D45 50%, transparent 50%)'
                  : 'linear-gradient(to right, #e5e7eb 50%, transparent 50%)',
                backgroundSize: '8px 2px',
                backgroundRepeat: 'repeat-x'
              }}
            />
          ))}
        </div>

        {/* Circles */}
        {steps.map((step, i) => (
          <div key={i} className="z-10 flex flex-col items-center relative">
            <div className={`
              w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg 
              transition-all duration-300 ease-in-out
              ${i === currentStep ? 'bg-[#D26D45] text-white scale-110 shadow-xl' : 
                i < currentStep ? 'bg-[#D26D45] text-white' : 
                'bg-gray-300 text-gray-600'}
            `}>
              {i + 1}
            </div>
            <span className={`mt-2 text-sm font-medium text-center whitespace-nowrap w-24 
              ${i === currentStep ? 'text-[#D26D45]' : 'text-gray-500'}`}>
              {step.title}
            </span>
          </div>
        ))}
      </div>

      {/* Image Carousel - Show 3 Cards */}
      <div className="relative flex items-center justify-center mb-6">
        <button
          onClick={handlePrev}
          className="absolute left-[-30px] text-2xl p-2 bg-white rounded-full shadow hover:bg-gray-100 z-10"
        >
          <FaChevronLeft className="text-[#D26D45]" />
        </button>

        <div className="flex gap-6 overflow-hidden px-4">
          {[-1, 0, 1].map(offset => {
            const index = (currentStep + offset + steps.length) % steps.length;
            const isActive = offset === 0;
            return (
              <div
                key={index}
                className={`transition-all duration-500 ease-in-out rounded-xl shadow-xl bg-[#f1cdbb] 
                ${isActive ? 'scale-110 z-10' : 'scale-95 opacity-80'} 
                w-[250px] md:w-[300px] h-[350px] flex-shrink-0`}
              >
                <img
                  src={showBefore ? steps[index].before : steps[index].after}
                  alt={steps[index].title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-[-30px] text-2xl p-2 bg-white rounded-full shadow hover:bg-gray-100 z-10"
        >
          <FaChevronRight className="text-[#D26D45]" />
        </button>
      </div>

      {/* Step Description */}
      <div className="text-center mt-8">
        <h3 className="text-2xl font-bold text-[#D26D45] mb-2">
          Step {currentStep + 1}: {steps[currentStep].title}
        </h3>
        <p className="text-gray-600 max-w-xl mx-auto">{steps[currentStep].desc}</p>
      </div>
    </div>
  );
};

export default StepCarousel;
