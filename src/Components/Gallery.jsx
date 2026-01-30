import React, { useState } from "react";

// Importing images
import work from "../assets/work.jpg";
import blackImg from "../assets/garage.jpg";
import carup from "../assets/carup.jpg";
import oil from "../assets/oil.jpg";
import engine from "../assets/engine.jpg";
import tools from "../assets/tools.jpg";

const images = [
  { src: work, alt: "Professional mechanic working on a vehicle" },
  { src: blackImg, alt: "Mechanic working in our garage" },
  { src: carup, alt: "Car lifted for expert maintenance and inspection" },
  { src: oil, alt: "High-quality oil change service" },
  { src: engine, alt: "Advanced engine diagnostics with modern tools" },
  { src: tools, alt: "Premium automotive tools and equipment" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState({ isOpen: false, imgSrc: "", alt: "" });

  const openLightbox = (img) => {
    setLightbox({ isOpen: true, imgSrc: img.src, alt: img.alt });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, imgSrc: "", alt: "" });
  };

  return (
    <section
      id="Gallery"
      className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-500"
      aria-labelledby="gallery-title"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <header className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase tracking-wide">
            Our Work
          </p>
          <h2
            id="gallery-title"
            className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-100"
          >
            Gallery
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Explore our workshop, services, and the level of quality we deliver every day.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, index) => (
            <figure
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openLightbox(img)}
              role="button"
              tabIndex={0}
              aria-label={`View enlarged image: ${img.alt}`}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-48 md:h-60 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <p className="text-white text-sm md:text-lg font-semibold">
                  {img.alt}
                </p>
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.imgSrc}
              alt={lightbox.alt}
              className="w-full h-auto rounded-lg shadow-2xl transition duration-500"
            />

            {/* Close button */}
            <button
              onClick={closeLightbox}
              aria-label="Close image preview"
              className="absolute top-3 right-3 text-white bg-red-600 rounded-full w-10 h-10 flex items-center justify-center text-xl hover:bg-red-700 transition"
            >
              &times;
            </button>

            <figcaption className="text-white text-center mt-2 text-sm md:text-base">
              {lightbox.alt}
            </figcaption>
          </div>
        </div>
      )}
    </section>
  );
}
