import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactSticky = () => {
  const phoneNumber = "918791147061"; // replace with your number

  return (
    <div className="fixed right-4 top-2/3  -translate-y-1/2 flex flex-col gap-4 z-50">
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
      >
        <FaWhatsapp size={22} />
      </a>

      <a
        href={`tel:+${phoneNumber}`}
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
      >
        <FaPhoneAlt size={20} />
      </a>

      <a
        href="https://www.google.com/maps/search/?api=1&query=Banashankari+Complex+Nanneshwara+Temple+Road+Hebbal+Mysore+570017"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
      >
        <FaMapMarkerAlt size={20} />
      </a>
    </div>
  );
};

export default ContactSticky;
