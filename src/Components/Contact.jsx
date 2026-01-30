import React from "react";

export default function ContactSection() {
  return (
    <section
      id="Contact"
      className="bg-white dark:bg-black text-gray-900 dark:text-white py-20 px-4 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase tracking-wide">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Contact Our Workshop
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            Have questions or need an appointment? Fill out the form below and
            we’ll get back to you promptly.
          </p>
        </div>

        {/* Contact Form */}
        <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white focus:border-red-600 focus:ring focus:ring-red-600 focus:ring-opacity-50 outline-none transition-colors duration-300"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white focus:border-red-600 focus:ring focus:ring-red-600 focus:ring-opacity-50 outline-none transition-colors duration-300"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 font-semibold">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Your Phone Number"
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white focus:border-red-600 focus:ring focus:ring-red-600 focus:ring-opacity-50 outline-none transition-colors duration-300"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="message" className="mb-2 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your Message"
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white focus:border-red-600 focus:ring focus:ring-red-600 focus:ring-opacity-50 outline-none resize-none transition-colors duration-300"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 transition px-8 py-3 rounded-full text-white font-semibold shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Embedded Map */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
            <iframe
              title="Workshop Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.5998289027575!2d-79.73815342508166!3d43.23884907913317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ca337a4af0fe7%3A0x48c01a249815e6da!2sRoyal%20Fix%20Auto%20Repair!5e0!3m2!1sen!2sng!4v1769799709549!5m2!1sen!2sn"
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[400px] grayscale-20 hover:grayscale-0 transition duration-300"
            ></iframe>
          </div>

          <p className="text-center text-gray-600 dark:text-gray-400 mt-4 text-sm">
            Visit our workshop location on the map above.
          </p>
        </div>
      </div>
    </section>
  );
}
