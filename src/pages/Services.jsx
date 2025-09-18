import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const servicesitems = [
  {
    id: 1,
    title: "Clinical Pathology",
    desc: "Clinical pathology involves the analysis of blood, urine, and tissues.",
    img: "/service-1.jpg",
  },
  {
    id: 2,
    title: "Histopathology",
    desc: "Histopathology examines tissue samples under a microscope to detect.",
    img: "/service-2.jpg",
  },
  {
    id: 3,
    title: "Biochemistry",
    desc: "Biochemistry tests measure chemicals in blood and body fluids, helping.",
    img: "/service-3.jpg",
  },
  {
    id: 4,
    title: "Hematology (Blood Tests)",
    desc: "Hematology tests analyze blood components to detect anemia, infections",
    img: "/service-4.jpg",
  },
  {
    id: 5,
    title: "Urine & Stool Analysis",
    desc: "Urine and stool analysis help detect infections, digestive issues, kidney problems,",
    img: "/service-5.jpg",
  },
  {
    id: 6,
    title: "Hemoglobin (Hb)",
    desc: "Hemoglobin (Hb) is a vital protein in red blood cells that carries oxygen throughout",
    img: "/service-6.jpg",
  },
];

const departments = [
  "DERMATOLOGY",
  "ORTHOPEDICS",
  "NEUROLOGY",
  "CARDIOLOGY",
  "PEDIATRICS",
  "GYNECOLOGY",
];

const Services = () => {
  return (
    <>
      {/* ===== Hero / Breadcrumb Section ===== */}
      <section className="relative bg-[#041c33] text-white pt-20 pb-[3rem] px-2 md:px-16">
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Serivces
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
            <span className="font-bold">Services</span>
          </nav>
        </div>
      </section>

      {/* Cards */}
      <section className="py-12 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesitems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>

              {/* Hover Overlay Button */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
                  <Link to="/services-details" className="font-bold">
                    Learn More
                  </Link>
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-[#dbe9a1] py-3 overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={7}
          spaceBetween={52}
          freeModeMomentum={false} 
          allowTouchMove={false}
          speed={12000}
          autoplay={{
          pauseOnMouseEnter: true,
          }}>
          {departments.concat(departments).map((dept, idx) => (
            <SwiperSlide key={idx} className="w-auto">
              <span className="text-lg font-bold text-gray-900 flex items-center gap-2">
                {dept} <span className="text-blue-900">✚</span>
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Services;
