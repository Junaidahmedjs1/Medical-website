import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const TeamMembers = () => {
  const doctors = [
    { id: 1, name: "Dr. Sohel Islam", role: "Chief Pathologist", img: "/doc1.jpg" },
    { id: 2, name: "Dr. Tanvir Alam", role: "Cardiologist", img: "/doc2.jpg" },
    { id: 3, name: "Dr. Omar Farooq", role: "Pediatrician", img: "/doc6.jpg" },
    { id: 4, name: "Dr. Nadia Raza", role: "Dermatologist", img: "/doc4.jpg" },
    { id: 5, name: "Dr. Bilal Ahmed", role: "Orthopedic", img: "/doc5.jpg" },
    { id: 6, name: "Dr. Zara Ali", role: "Neurologist", img: "/doc3.jpg" },
  ];

  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="relative bg-[#041c33] text-white pt-20 pb-[3rem] px-4 md:px-16">
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Doctors</h1>
          <nav className="text-gray-300 flex items-center text-sm space-x-2">
            <Link to="/" className="font-bold hover:text-white">Home</Link>
            <ChevronRight size={20} />
            <span className="font-bold">Doctors</span>
          </nav>
        </div>
      </section>

      {/* ===== Team Section ===== */}
      <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Meet Our Specialists
          </h2>

          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {doctors.map((p) => (
              <article
                key={p.id}
                className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative mb-6">
                  <div className="absolute -inset-2 rounded-full blur-xl opacity-25 group-hover:opacity-40 transition"
                       style={{ background: "rgba(37, 99, 235, 0.4)" }} />
                  <div className="relative rounded-full w-32 h-32 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{p.role}</p>

                {/* Social Icons */}
                <div className="mt-4 flex items-center gap-3">
                  {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow cursor-pointer"
                    >
                      <Icon size={16} />
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Link
                  to={`/doctor/${p.id}`}
                  className="mt-6 inline-block px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium shadow hover:bg-blue-700 transition"
                >
                  View Profile
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMembers;
