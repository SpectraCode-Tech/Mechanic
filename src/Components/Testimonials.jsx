import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";

// SEO-Optimized Testimonials Data
const testimonials = [
  {
    name: "Dana Alloush",
    role: "Customer",
    feedback:
      "Great place! Friendly, honest, and fast service highly recommend.",
    avatar: user1,
  },
  {
    name: "Mary Smith",
    role: "Car Enthusiast",
    feedback:
      "Their service is top-notch! The mechanics explained everything clearly, and my car feels brand new after visiting Royal Fix Auto Repair.",
    avatar: user2,
  },
  {
    name: "James Wilson",
    role: "Business Owner",
    feedback:
      "I trust Royal Fix Auto Repair with all my company vehicles. Excellent service and very skilled staff.",
    avatar: user3,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrent((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        ),
      8000
    );
    return () => clearInterval(interval);
  }, []);

  const goNext = () =>
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );

  const goPrev = () =>
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      aria-label="Customer testimonials for Royal Fix Auto Repair"
      className="py-16 bg-gray-50 dark:bg-black transition-colors"
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* SEO Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          What Our Clients Say
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          Trusted by car owners, enthusiasts, and businesses — see why customers
          choose <strong>Royal Fix Auto Repair</strong> for reliable, expert auto care.
        </p>

        {/* Testimonial Card */}
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition duration-500">
            <p className="text-gray-600 dark:text-gray-300 italic mb-6">
              "{t.feedback}"
            </p>

            <div className="flex items-center justify-center">
              <img
                src={t.avatar}
                alt={`Photo of ${t.name}, a customer of Royal Fix Auto Repair`}
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-800 dark:text-white">
                  {t.name}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {t.role}
                </p>
              </div>
            </div>

            {/* Star Ratings */}
            <div className="flex justify-center mt-4 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-yellow-400"
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>

          {/* Prev / Next Buttons */}
          <button
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="absolute top-1/2 -translate-y-1/2 left-0 bg-black/30 dark:bg-white/10 hover:bg-black/50 dark:hover:bg-white/20 p-3 rounded-full text-white dark:text-gray-200 transition"
          >
            <ArrowLeft size={24} />
          </button>

          <button
            onClick={goNext}
            aria-label="Next testimonial"
            className="absolute top-1/2 -translate-y-1/2 right-0 bg-black/30 dark:bg-white/10 hover:bg-black/50 dark:hover:bg-white/20 p-3 rounded-full text-white dark:text-gray-200 transition"
          >
            <ArrowRight size={24} />
          </button>
        </div>

        {/* Navigation Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`View testimonial ${index + 1}`}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                index === current
                  ? "bg-red-600 dark:bg-red-500 scale-110"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
