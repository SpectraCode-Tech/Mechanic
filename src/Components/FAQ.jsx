import React, { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "What types of vehicles do you service?",
    answer:
      "We service all types of cars, trucks, and SUVs, including domestic and foreign models.",
  },
  {
    question: "Do I need an appointment for a repair?",
    answer:
      "While walk-ins are welcome, we recommend booking an appointment to ensure faster service and availability.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, credit/debit cards, and most mobile payment options.",
  },
  {
    question: "Do you provide warranty on repairs?",
    answer:
      "Yes, we provide a warranty on parts and labor for all repairs performed at our workshop.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="FAQ"
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-20 px-4 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase tracking-wide">
            FAQ
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            Here are answers to some common questions about our services and policies.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="font-semibold">{faq.question}</span>
                <span className="text-red-600 font-bold text-xl transition-transform duration-300">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              {/* Smooth Slide Down */}
              <div
                className={`px-6 overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-96 py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
