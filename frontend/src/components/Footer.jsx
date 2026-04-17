import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUserMd,
  FaClinicMedical,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 px-6 py-8">
      {" "}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Clinic Info */}
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <FaClinicMedical className="text-blue-400" />
            Amoolya Clinic
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Providing trusted healthcare services with compassion and care.
          </p>
        </div>

        {/* Doctor Info */}
        <div>
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <FaUserMd className="text-green-400" />
            Doctor
          </h2>
          <p className="mt-3 text-sm">
            Dr. Shivkumar K <br />
            MBBS, CCDM, AFIH
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-white">Contact</h2>

          <p className="mt-3 flex items-start gap-2 text-sm">
            <FaPhoneAlt className="mt-1 text-yellow-400" />
            <span>+91 8971147061</span>
          </p>

          <p className="mt-3 flex items-start gap-2 text-sm">
            <FaMapMarkerAlt className="mt-1 text-red-400" />
            <span>
              Banashankari Complex,
              <br />
              Nanneshwara Temple Road,
              <br />
              Hebbal, Mysore - 570017
            </span>
          </p>
        </div>
      </div>
      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Amoolya Clinic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
