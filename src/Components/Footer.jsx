import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 dark:text-gray-400 py-5 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Royal Fix Auto Repair
          </h2>
          <p className="text-gray-400">
            Providing expert car repairs, maintenance, and diagnostics. Quality service you can trust at Royal Fix Auto.
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer Navigation">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#Home" className="hover:text-red-600 transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#Services" className="hover:text-red-600 transition-colors duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="#Booking" className="hover:text-red-600 transition-colors duration-300">
                Booking
              </a>
            </li>
            <li>
              <a href="#FAQ" className="hover:text-red-600 transition-colors duration-300">
                FAQ
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:text-red-600 transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Royal Fix Auto</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Royal Fix Auto on Facebook"
              className="hover:text-red-600 transition-colors duration-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              aria-label="Royal Fix Auto on Twitter"
              className="hover:text-red-600 transition-colors duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              aria-label="Royal Fix Auto on Instagram"
              className="hover:text-red-600 transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-12">
        &copy; {new Date().getFullYear()} Royal Fix Auto Repair. All rights reserved.
      </div>
    </footer>
  );
}
