import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar, Phone, Mail  } from "lucide-react";
import { useParams } from "react-router-dom";
import { doctors } from "../data/doctors";

export default function DoctorDetails() {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return (
      <p className="text-center text-red-600 font-semibold py-20">
        Doctor not found!
      </p>
    );
  }

  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="relative bg-[#041c33] text-white pt-20 pb-[3rem] px-2 md:px-16">
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Doctor Details
          </h1>
          <nav className="text-gray-300  flex items-centertext-sm space-x-2">
            <a>
              <Link to="/" className="font-bold">
                Home
              </Link>
            </a>
            <span className="flex items-center">
              <ChevronRight size={20} />
            </span>
            <a className="font-bold">
              <Link to="/services">Services</Link>
            </a>
          </nav>
        </div>
      </section>

      <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-6 border-b pb-6">
            <img
              src={doctor.img}
              alt={doctor.name}
              className="w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-white shadow-md object-cover"
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {doctor.name}
              </h2>
              <p className="text-blue-600 font-medium text-lg">
                {doctor.specialty}
              </p>
              <p className="text-sm text-gray-600 flex items-center justify-center md:justify-start gap-2 mt-2">
                <Mail size={16} /> {doctor.email}
              </p>
              <p className="text-sm text-gray-600 flex items-center justify-center md:justify-start gap-2">
                <Phone size={16} /> {doctor.phone}
              </p>
              <p className="text-sm text-gray-600 flex items-center justify-center md:justify-start gap-2">
                <Calendar size={16} /> Experience: {doctor.experience}
              </p>
              <button className="mt-4 px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                Make Appointment
              </button>
            </div>
          </div>

          {/* About */}
          <div className="py-6 border-b">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Introducing the Doctor:
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {doctor.about}
            </p>
          </div>

          {/* Stats */}
          <div className="py-6 border-b flex flex-wrap justify-center gap-6">
            {doctor.stats.map((s, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-blue-50 text-blue-600 text-lg font-semibold shadow">
                  {s.value}
                </div>
                <p className="text-xs md:text-sm text-gray-600 mt-2">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Appointment Form */}
          <div className="py-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Apply for Appointment
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border rounded-md p-2 text-sm w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border rounded-md p-2 text-sm w-full"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border rounded-md p-2 text-sm w-full"
              />
              <input
                type="date"
                className="border rounded-md p-2 text-sm w-full"
              />
              <select className="border rounded-md p-2 text-sm w-full">
                <option>{doctor.name}</option>
              </select>
              <select className="border rounded-md p-2 text-sm w-full">
                <option>{doctor.specialty}</option>
              </select>
              <div className="md:col-span-2 flex items-center gap-2 text-sm mt-2">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">I agree to terms and conditions.</label>
              </div>
              <button
                type="submit"
                className="md:col-span-2 mt-2 px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                Appointment Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
