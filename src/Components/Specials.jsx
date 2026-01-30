import React from "react";

const offers = [
  {
    title: "Free Oil Change",
    description: "Get a complimentary oil change with any full-service appointment this month.",
    cta: "Book Now",
  },
  {
    title: "50% Off Tire Rotation",
    description: "Keep your tires in top shape with our limited-time tire rotation discount.",
    cta: "Reserve Spot",
  },
  {
    title: "Brake Check Special",
    description: "Ensure your safety with a comprehensive brake inspection for only $29.99.",
    cta: "Schedule Today",
  },
];

export default function SpecialOffers() {
  return (
    <section
      id="Specials"
      className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-20 px-4 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase tracking-wide">
            Special Offers
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Current Promotions
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            Check out our latest offers to keep your vehicle in peak condition without breaking the bank.
          </p>
        </div>

        {/* Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {offer.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {offer.description}
                </p>
              </div>
              <button className="mt-auto bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                {offer.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
