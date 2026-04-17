import React from "react";
import logo from "../assets/logo.jpeg";
import { FaClinicMedical } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="w-full sticky top-0 h-14 bg-gray-900 flex flex-row  gap-[10px] items-center px-4 z-50">
      <div className="w-10 h-10 rounded-full">
        <img src={logo} alt="Logo" style={{ borderRadius: "50%" }} />
      </div>
      <div className="animate-pulse text-lg font-bold text-green-600 flex flex-row items-center gap-2">
        <FaClinicMedical className="text-red-700" />
        <p>Amoolya Clinic</p>
      </div>
    </div>
  );
};

export default Nav;
