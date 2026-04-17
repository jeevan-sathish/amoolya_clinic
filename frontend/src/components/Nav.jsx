import React from "react";
import logo from "../assets/logo.jpeg";
import { FaClinicMedical } from "react-icons/fa";

const Nav = () => {
  // 🧠 Time Logic
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours + minutes / 60;

  const isOpen =
    (currentTime >= 9 && currentTime < 14) || // 9 AM - 2 PM
    (currentTime >= 17.5 && currentTime < 21.5); // 3 PM - 9:30 PM

  return (
    <div className="w-full sticky top-0 h-16 bg-gray-900 flex items-center justify-between px-6 shadow-md z-50">
      {/* Left - Logo + Name */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-700">
          <img src={logo} alt="Logo" className="w-full h-full object-cover" />
        </div>

        <div className="flex items-center gap-2 text-white font-semibold text-lg">
          <FaClinicMedical className="text-green-500" />
          <span>Amoolya Clinic</span>
        </div>
      </div>

      {/* Right - Status */}
      <div className="flex items-center gap-2">
        <span
          className={`animate-pulse px-3 py-1 text-sm rounded-full font-medium ${
            isOpen ? "bg-green-600 text-white" : "bg-red-600 text-white"
          }`}
        >
          {isOpen ? "Open Now" : "Closed"}
        </span>
      </div>
    </div>
  );
};

export default Nav;
