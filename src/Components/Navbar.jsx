import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const navLinks = [
    { id: "home", name: "Home", href: "#Home" },
    { id: "about", name: "About Us", href: "#About" },
    { id: "services", name: "Services", href: "#Services" },
    { id: "gallery", name: "Gallery", href: "#Gallery" },
    { id: "booking", name: "Booking", href: "#Booking" },
    { id: "specials", name: "Special Offers", href: "#Specials" },
    { id: "contact", name: "Contact", href: "#Contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (!section) return;

        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActive(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set active on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg z-50 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <a
          href="#Home"
          className="text-sm sm:text-xl font-black sm:tracking-tight flex items-center gap-2 group"
        >
          <span className="text-gray-900 dark:text-white">Royal Fix</span>
          <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            Auto Repair
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 dark:text-gray-200 font-medium">
          {navLinks.map((link) => (
            <li key={link.id} className="relative group">
              <a
                href={link.href}
                className={`transition-colors pb-1 ${
                  active === link.id
                    ? "text-red-600 dark:text-red-400 font-semibold"
                    : "hover:text-red-600 dark:hover:text-red-400"
                }`}
              >
                {link.name}
              </a>

              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-red-600 dark:bg-red-400 transition-all duration-300 ${
                  active === link.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Theme Switch & Mobile Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            className="w-11 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition relative"
          >
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                theme === "dark" ? "translate-x-5" : ""
              }`}
            ></div>

            {theme === "light" ? (
              <Sun size={14} className="absolute right-1 text-yellow-500" />
            ) : (
              <Moon size={14} className="absolute left-1 text-gray-200" />
            )}
          </button>

          <button
            className="md:hidden text-gray-800 dark:text-gray-200"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 shadow-lg transition-all overflow-hidden ${
          isOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 text-gray-800 dark:text-gray-200">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition-colors ${
                  active === link.id
                    ? "text-red-600 dark:text-red-400 font-semibold"
                    : "hover:text-red-600 dark:hover:text-red-400"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
