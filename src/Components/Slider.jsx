import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import workImg from "../assets/work.jpg";
import tireImg from "../assets/tire.jpg";
import carupImg from "../assets/carup.jpg";

const slides = [
  {
    image: workImg,
    tagline: "Precision • Performance • Power",
    headline: "Your Trusted Automotive Experts",
    href: "#Booking",
    cta: "Book Appointment",
  },
  {
    image: tireImg,
    tagline: "Diagnostics • Repairs • Maintenance",
    headline: "Advanced Auto Repairs for All Models",
    href: "#Services",
    cta: "Explore Services",
  },
  {
    image: carupImg,
    tagline: "Fast • Reliable • Affordable",
    headline: "Keeping Your Car in Peak Condition",
    href: "#Contact",
    cta: "Contact Us Today",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goNext = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const goPrev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div id="Home" className="relative w-full h-[90vh] overflow-hidden">
      {/* Background images */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt={slide.headline}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-20"></div>

      {/* Current Slide Content */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="text-center text-white px-4 max-w-2xl">
          <p className="text-sm md:text-lg font-light tracking-widest uppercase mb-3">
            {slides[current].tagline}
          </p>
          <h1 className="text-2xl md:text-5xl font-bold mb-6 leading-tight">
            {slides[current].headline}
          </h1>
          <a
            href={slides[current].href}
            className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-full text-sm md:text-lg font-semibold shadow-lg"
          >
            {slides[current].cta}
          </a>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goPrev}
        className="absolute top-1/2 -translate-y-1/2 left-4 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white transition z-40"
      >
        <ArrowLeft size={24} />
      </button>

      <button
        onClick={goNext}
        className="absolute top-1/2 -translate-y-1/2 right-4 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white transition z-40"
      >
        <ArrowRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-2 z-40">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              index === current ? "bg-red-600 scale-110" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
