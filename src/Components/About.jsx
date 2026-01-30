import React from "react";
import { Wrench, Clock, Users } from "lucide-react";
import mechanicShop from '../assets/shop.jpg';

export default function AboutUs() {
  return (
    <section
      id="About"
      className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={mechanicShop}
            alt="Royal Fix Auto Repair Workshop"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-center sm:text-left text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
            About Royal Fix Auto Repair
          </h2>
          <p className="text-center sm:text-left text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            At <strong>Royal Fix Auto Repair</strong>, we provide top-notch automotive repair
            services with a focus on quality, safety, and customer satisfaction. Our certified
            mechanics use the latest technology to keep your vehicle running smoothly.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col items-center text-center">
              <Wrench className="text-red-600 mb-2" size={32} />
              <h4 className="font-semibold text-gray-800 dark:text-gray-100">Expert Mechanics</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Certified and experienced team</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="text-red-600 mb-2" size={32} />
              <h4 className="font-semibold text-gray-800 dark:text-gray-100">Fast & Reliable</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Timely service for all repairs</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="text-red-600 mb-2" size={32} />
              <h4 className="font-semibold text-gray-800 dark:text-gray-100">Customer Focused</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Friendly support & guidance</p>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="#Booking"
            className="flex justify-self-center sm:block sm:justify-self-start mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition shadow-lg"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
