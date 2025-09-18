import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* ====== Top 3 Cards ====== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
              <Phone size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
            <p className="text-sm text-gray-600 mt-2">+92 123 4567890</p>
          </div>

          {/* Email */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
              <Mail size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Email</h3>
            <p className="text-sm text-gray-600 mt-2">info@example.com</p>
          </div>

          {/* Address */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100 text-red-600 mb-4">
              <MapPin size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Address</h3>
            <p className="text-sm text-gray-600 mt-2">123 Main Street, Lahore</p>
          </div>
        </div>

        {/* ====== Map + Form Section ====== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.887991271915!2d67.05806841479837!3d24.860734984055954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33df64d59e4d9%3A0xa7c11f9e7af3e1d9!2sKarachi%20Pakistan!5e0!3m2!1sen!2s!4v1678543096401!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-[#041c33] text-white shadow-md rounded-2xl p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Let’s Talk...</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Your Email *
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border text-white rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Messages"
                  className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
