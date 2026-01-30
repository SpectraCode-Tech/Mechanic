import React from "react";

const Reviews = () => {
    return (
        <div>
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
                        Trusted by car owners, enthusiasts, and businesses — see why
                        customers choose <strong>Royal Fix Auto Repair</strong> for
                        reliable, expert auto care.
                    </p>
                </div>

                {/* Elfsight Google Reviews | Untitled Google Reviews */}
                <script src="https://elfsightcdn.com/platform.js" async></script>
                <div
                    className="elfsight-app-0d91026c-4ed5-444e-908f-3ed9a4880062 px-7 dark:*:bg-black"
                    data-elfsight-app-lazy
                ></div>
            </section>
        </div>
    );
};

export default Reviews;
