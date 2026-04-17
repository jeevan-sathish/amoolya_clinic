import React, { useState } from "react";
import ContactSticky from "./ContactSticky";
import hero from "../assets/heroImg.jpeg";

const Main = () => {
  const [showTimings, setShowTimings] = useState(false);

  return (
    <div className="w-full min-h-screen bg-black">
      <ContactSticky />

      {/* HERO SECTION */}
      <div className="w-full min-h-screen relative flex items-center justify-center overflow-y-auto overflow-x-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Hero"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl space-y-2 py-10">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
            Compassionate Care for a Healthier Tomorrow
          </h1>

          <p className="text-gray-300 text-lg md:text-xl">
            Welcome to{" "}
            <span className="text-green-400 font-semibold">Amoolya Clinic</span>
          </p>

          <p className="text-gray-400 text">
            Expert care by Dr. Shivkumar <br />
            <span className="text-gray-300"> K (MBBS, CCDM, AFIH)</span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <a
              href="tel:+919876543210"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/917022077342"
              target="_blank"
              rel="noopener noreferrer"
              className="border w-75 border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-6 py-3 rounded-lg font-medium transition"
            >
              WhatsApp
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            <button
              onClick={() => setShowTimings(!showTimings)}
              className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition font-medium"
            >
              {showTimings ? "Hide Timings" : "View Clinic Timings"}
            </button>

            {showTimings && (
              <div className="bg-gray-900 text-gray-300 rounded-xl shadow-lg p-6 w-full max-w-md border border-gray-800">
                <h2 className="text-xl font-semibold text-white mb-4 text-center">
                  Clinic Timings
                </h2>

                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span className="text-green-400 font-medium">Open</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Morning</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Evening</span>
                    <span>5:30 PM - 9:30 PM</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-red-400 font-medium">Closed</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
