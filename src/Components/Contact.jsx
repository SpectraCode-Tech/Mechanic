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
            Have questions or need an appointment? Fill out the form below and we’ll get back to you promptly.
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
      </div>
    </section>
  );
}
