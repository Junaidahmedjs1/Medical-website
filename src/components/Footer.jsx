import React from "react";
import {
  ChevronRight,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#041c33] text-white pt-10">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between gap-10 lg:gap-[8rem]">
          {/* Left Side (Logo + Newsletter + Social Links) */}
          <div className="lg:w-1/3">
            <img src="/logo-white.svg" alt="Logo" className="w-36 md:w-44" />
            <p className="max-w-md mt-4 text-[14px] text-gray-300">
              It is a long established fact that a reader will be distracted
              <br /> the road readable content of a page when looking at layout.
            </p>

            {/* Newsletter */}
            <div className="relative mt-6">
              <input
                type="email"
                className="w-full bg-white px-3 py-3 pr-28 border rounded-full text-gray-700 text-sm md:text-base"
                placeholder="Your Email Address"
              />
              <button className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center gap-1 md:gap-2 bg-[#0d6dfd] text-white px-3 py-3 md:px-4 md:py-3 rounded-r-full hover:bg-blue-600 text-sm md:text-base">
                Subscribe <ChevronRight size={16} />
              </button>
            </div>

            {/* Social Links */}
            <ul className="mt-6 flex items-center gap-3">
              <li className="bg-gray-800 rounded p-2 hover:bg-blue-600 cursor-pointer">
                <Facebook size={16} />
              </li>
              <li className="bg-gray-800 rounded p-2 hover:bg-blue-600 cursor-pointer">
                <Twitter size={16} />
              </li>
              <li className="bg-gray-800 rounded p-2 hover:bg-blue-600 cursor-pointer">
                <Youtube size={16} />
              </li>
              <li className="bg-gray-800 rounded p-2 hover:bg-blue-600 cursor-pointer">
                <Instagram size={16} />
              </li>
            </ul>
          </div>

          {/* Right Side (3 Columns) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 flex-1 gap-8 md:gap-12 lg:gap-16">
            {/* Quick Links */}
            <div>
              <h1 className="text-lg font-bold relative pb-2 mb-4">
                Quick Links
                <span className="absolute left-0 bottom-0 w-12 h-[2px] bg-blue-600"></span>
              </h1>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    General Health Check-Ups
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Stress & Lifestyle Counseling
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Vaccinations & Immunizations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Referral to Specialists
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h1 className="text-lg font-bold relative pb-2 mb-4">
                Company
                <span className="absolute left-0 bottom-0 w-12 h-[2px] bg-blue-600"></span>
              </h1>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Pages
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h1 className="text-lg font-bold relative pb-2 mb-4">
                Contact
                <span className="absolute left-0 bottom-0 w-12 h-[2px] bg-blue-600"></span>
              </h1>
              <ul className="space-y-3 text-[13px] text-gray-300">
                <li>
                  102/ B Street, New Elephant <br /> Road, Sandigo, USA
                </li>
                <li>
                  <span className="font-bold text-white">Email Us:</span> <br />
                  <a
                    href="mailto:info@example.com"
                    className="hover:text-blue-600">
                    info@example.com
                  </a>
                </li>
                <li>
                  <span className="font-bold text-white">Call Now:</span> <br />
                  <a href="tel:+20866660112" className="hover:text-blue-600">
                    +208-6666-0112
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10">
          {/* Centered Divider */}
          <hr className="w-1/2 mx-auto border-t border-gray-700" />

          <div className="max-w-7xl mx-auto mt-6 px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left Side */}
            <p className="text-sm text-gray-400 text-center md:text-left">
              &copy;{" "}
              <span className="text-[#0d6dfd] font-semibold">Meditics</span>{" "}
              2025. All Rights Reserved
            </p>

            {/* Center (Payment Methods) */}
            <div className="flex gap-3 justify-center flex-wrap">
              <img src="/payment-method-1.png" alt="Payment Method 1" className="h-7" />
              <img src="/payment-method-2.png" alt="Payment Method 2" className="h-7" />
              <img src="/payment-method-3.png" alt="Payment Method 3" className="h-7" />
              <img src="/payment-method-4.png" alt="Payment Method 4" className="h-7" />
              <img src="/payment-method-5.png" alt="Payment Method 5" className="h-7" />
            </div>

            {/* Right Side */}
            <div className="flex gap-4 text-sm text-gray-400 text-center md:text-right">
              <p className="hover:text-blue-500 cursor-pointer">Terms of Use</p>
              <p className="hover:text-blue-500 cursor-pointer">
                Privacy Environmental Policy
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
