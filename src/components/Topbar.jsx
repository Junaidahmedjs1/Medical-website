import React from "react";
import { Phone, Clock, Mail } from "lucide-react";

const Topbar = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      {/* Left Half (Blue Background) */}
      <div className="w-full md:w-1/2 bg-[#0d6dfd] text-white flex flex-col md:flex-row items-center justify-center gap-3 md:gap-10 px-4 py-2 text-sm">
        {/* Help Line */}
        <div className="flex items-center gap-2">
          <Phone size={16} className="text-lime-200" />
          <span>Help Line:</span>
          <span className="hover:text-[#092833] cursor-pointer transition">
            +208-6666-0112
          </span>
        </div>

        {/* Open Hours */}
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-lime-200" />
          <span className="text-center md:text-left">
            Open Hours: Mon - Fri 8.00 am - 6.00 pm
          </span>
        </div>
      </div>

      {/* Right Half (Black Background) */}
      <div className="w-full md:w-1/2 bg-[#041c33] text-white flex items-center justify-center px-4 py-2 text-sm">
        <div className="flex items-center gap-2 hover:text-[#0d62ca] cursor-pointer transition">
          <Mail size={16} className="text-lime-200" />
          <span>info@example.com</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
