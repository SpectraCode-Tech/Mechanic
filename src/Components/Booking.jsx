import React, { useState } from "react";

const BookingSection = () => {
  const [service, setService] = useState("");
  const [otherService, setOtherService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [toast, setToast] = useState({ message: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedService = service === "other" ? otherService : service;

    const formData = {
      fullName,
      email,
      phone,
      service: selectedService,
      date,
      time,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzHhbmMacYeoAF1wvppJyM-RSHpwTuEEj5QndTUN0bCTYdViLMeKkLf2vrTkUdLmiXCYg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      setToast({ message: "Booking submitted successfully!", type: "success" });

      // Clear form fields
      setService("");
      setOtherService("");
      setDate("");
      setTime("");
      setFullName("");
      setEmail("");
      setPhone("");

      // Hide toast after 3 seconds
      setTimeout(() => setToast({ message: "", type: "" }), 3000);
    } catch (error) {
        console.error("Booking submit error:", error);
      setToast({
        message: "Failed to submit booking. Try again.",
        type: "error",
      });
      setTimeout(() => setToast({ message: "", type: "" }), 3000);
    }
  };

  return (
    <section
      id="Booking"
      className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-500 relative"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10">
          Book an Appointment with Royal Fix Auto Repair
        </h2>

        {/* Toast Notification */}
        {toast.message && (
          <div
            className={`fixed top-5 left-1/2 -translate-x-1/2 px-6 py-4 rounded shadow-lg z-50 transition-opacity duration-500 ${
              toast.type === "success"
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {toast.message}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 transition-colors duration-500"
        >
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block dark:text-gray-200 font-semibold mb-1"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              className="w-full border rounded-lg p-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="Enter full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block dark:text-gray-200 font-semibold mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border rounded-lg p-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block dark:text-gray-200 font-semibold mb-1"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              className="w-full border rounded-lg p-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Service Dropdown */}
          <div>
            <label
              htmlFor="service"
              className="block dark:text-gray-200 font-semibold mb-1"
            >
              Service Needed
            </label>
            <select
              id="service"
              className="w-full border p-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="">Select a service</option>
              <option value="Oil Change">Oil Change</option>
              <option value="Brake Repair">Brake Repair</option>
              <option value="Engine Diagnostics">Engine Diagnostics</option>
              <option value="Battery Replacement">Battery Replacement</option>
              <option value="Wheel Alignment">Wheel Alignment</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Other Service Text Field */}
          {service === "other" && (
            <div>
              <label
                htmlFor="otherService"
                className="block dark:text-gray-200 font-semibold mb-1"
              >
                Enter Custom Service
              </label>
              <input
                id="otherService"
                type="text"
                className="w-full border rounded-lg p-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                placeholder="Describe the service you need"
                value={otherService}
                onChange={(e) => setOtherService(e.target.value)}
                required
              />
            </div>
          )}

          {/* Date Picker */}
          <div>
            <label
              htmlFor="date"
              className="block dark:text-gray-200 font-semibold mb-1"
            >
              Preferred Date
            </label>
            <input
              id="date"
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className="w-full border rounded-lg p-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          {/* Time Picker */}
          <div>
            <label
              htmlFor="time"
              className="block dark:text-gray-200 font-semibold mb-1"
            >
              Preferred Time
            </label>
            <input
              id="time"
              type="time"
              min={
                date === new Date().toISOString().split("T")[0]
                  ? new Date().toLocaleTimeString("en-GB", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : undefined
              }
              className="w-full border rounded-lg p-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingSection;
