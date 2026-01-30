import React from "react";
import { Wrench, Cpu, Battery, Droplet, GitBranch, Activity } from "lucide-react";

// SEO-optimized service data
const services = [
  {
    icon: <Wrench size={32} className="text-red-600 dark:text-red-500" />,
    title: "General Repairs",
    description:
      "Complete auto repairs for all vehicle types. Certified mechanics ensuring safe and reliable service.",
  },
  {
    icon: <Cpu size={32} className="text-red-600 dark:text-red-500" />,
    title: "Diagnostics",
    description:
      "Advanced vehicle diagnostics using modern equipment to identify issues accurately and quickly.",
  },
  {
    icon: <Battery size={32} className="text-red-600 dark:text-red-500" />,
    title: "Battery & Electrical",
    description:
      "Battery replacements, alternator checks, wiring repairs, and full electrical system servicing.",
  },
  {
    icon: <Droplet size={32} className="text-red-600 dark:text-red-500" />,
    title: "Oil & Fluid Change",
    description:
      "Professional oil and fluid replacement to improve engine health and vehicle performance.",
  },
  {
    icon: <GitBranch size={32} className="text-red-600 dark:text-red-500" />,
    title: "Tire & Suspension",
    description:
      "Tire balancing, rotation, replacement, and suspension system repair for a smoother ride.",
  },
  {
    icon: <Activity size={32} className="text-red-600 dark:text-red-500" />,
    title: "Performance Check",
    description:
      "Full engine performance testing, tuning, and preventive maintenance checks.",
  },
];

export default function Services() {
  return (
    <section
      id="Services"
      className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-6 md:px-12 text-center">

        {/* Section Title */}
        <h2
          id="services-heading"
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100"
        >
          Our Services
        </h2>

        {/* SEO-Friendly Description */}
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          At <strong>Royal Fix Auto Repair</strong>, we offer professional automotive services
          designed to keep your vehicle running safely, efficiently, and reliably.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition p-6 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
