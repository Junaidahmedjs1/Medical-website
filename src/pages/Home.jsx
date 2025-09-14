import React from "react";
import {
  Heart,
  MoveUpRight,
  CircleChevronRight,
  FileText,
  Stethoscope,
  HeartPulse,
} from "lucide-react";
import CTASection from "../components/CtaSection";
import Testonomials from "../components/Testonomials";

const services = [
  {
    icon: <FileText size={32} className="text-blue-600" />,
    title: "General Health Check-Ups",
    desc: "Regular health check-ups help detect potential issues early, ensuring timely treatment, better.",
  },
  {
    icon: <Stethoscope size={32} className="text-blue-600" />,
    title: "Specialist Consultations",
    desc: "Access to experienced specialists for personalized guidance and expert medical care.",
  },
  {
    icon: <HeartPulse size={32} className="text-blue-600" />,
    title: "Emergency Care",
    desc: "Quick and reliable emergency medical assistance whenever you need urgent treatment.",
  },
];

const qualifications = [
  {
    university: "Oxford University",
    duration: "Jan 2014 - Dec 2018",
    degree: "Bachelor of Medicine & Bachelor of  Surgery ( MBBS )",
  },
  {
    university: "Oxford University",
    duration: "Jan 2014 - Dec 2018",
    degree: "Bachelor of Medicine & Bachelor of Surgery ( MBBS )",
  },
  {
    university: "Oxford University",
    duration: "Jan 2014 - Dec 2018",
    degree: "Bachelor of Medicine & Bachelor of Surgery ( MBBS )",
  },
  {
    university: "Oxford University",
    duration: "Jan 2014 - Dec 2018",
    degree: "Bachelor of Medicine & Bachelor of Surgery ( MBBS )",
  },
];

const awards = [
  "/award-1.svg",
  "/award-2.svg",
  "/award-3.svg",
  "/award-4.svg",
  "/award-5.svg",
  "/award-6.svg",
];

const Home = () => {
  return (
    <>
      <section className=" bg-[#041c33] mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-6 gap-10">
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          {/* Heading with Heart Icon */}
          <h1 className="flex rounded-full max-w-[170px] border-2 border-[#dbe9a1] md:justify-start gap-3 text-3xl font-semibold text-[#dbe9a1] ">
            <Heart size={40} fill="#dbe9a1" color="#dbe9a1" /> Hi I AM
          </h1>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold  text-white leading-snug">
            Meet Dr. Tushar Raja <br />
            — Your Trusted <br />
            Healthcare Partner
          </h2>

          {/* Description */}
          <p className="text-lg text-[#a8b8bf] max-w-lg">
            Dr. Tushar is a highly experienced and compassionate
            [Specialization, e.g., General Physician / Cardiologist /
            Dermatologist] dedicated to providing exceptional care.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="text-white flex gap-2 items-center bg-[#0d6dfd] hover:bg-lime-300 hover:text-black font-semibold px-6 py-3 rounded-md shadow">
              BOOK APPOINTMENT <MoveUpRight size={16} />
            </button>
            <button className="bg-transparent border flex items-center gap-2 hover:bg-white hover:text-black text-white font-semibold px-6 py-3 rounded-md">
              VIEW SCHEDULE <MoveUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/Doctor.png"
            alt="Doctor"
            className="w-full max-w-sm md:max-w-md object-contain"
          />
        </div>
        <div className="ul-sidebar-footer">
          <span className="ul-sidebar-footer-title">Follow us</span>
          <div className="ul-sidebar-footer-social">
            <a href="#">
              <i className="flaticon-facebook" />
            </a>
            <a href="#">
              <i className="flaticon-twitter" />
            </a>
            <a href="#">
              <i className="flaticon-instagram" />
            </a>
            <a href="#">
              <i className="flaticon-youtube" />
            </a>
          </div>
        </div>
      </section>

      <section
        className="w-full bg-white bg-no-repeat bg-right bg-contain py-10 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-start md:items-center gap-8"
        style={{ backgroundImage: "url('/about-vector.svg')" }}>
        {/* Left Card */}
        <div className="bg-gradient-to-b from-[#0a1931] to-[#1d3557] rounded-xl text-white p-8 w-full md:w-1/3 shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-center">
            Time For Meet
          </h3>

          <div className="border-t border-gray-500 my-4"></div>

          <div className="mb-6 text-center">
            <p className="font-medium  text-gray-400">Monday - Friday</p>
            <p className="text-sm  text-gray-400">9:00 PM - 06:00 PM</p>
          </div>
          <div className="border-t border-gray-500 my-4"></div>

          <div className="mb-6 text-center">
            <p className="font-medium  text-gray-400">Saturday - Sunday</p>
            <p className="text-sm  text-gray-400">9:00 PM - 06:00 PM</p>
          </div>
          <div className="border-t border-gray-500 my-4"></div>

          <div className="bg-[#0d6dfd] mt-6 py-3 rounded-lg text-center">
            <p className="text-sm">For Emergency Care</p>
            <a
              href="tel:+20866660112"
              className="font-semibold text-white hover:underline">
              +208-6666-0112
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 ">
          <button className="flex items-center gap-2 text-blue-600 border px-2 py-2 rounded-full text-sm font-medium mb-4">
            <Heart className="text-[#0d6dfd]" fill="#0d6dfd" color="#0d6dfd" />{" "}
            About Me
          </button>

          <h2 className="text-sm md:text-3xl font-bold  mb-2 text-gray-800">
            My Journey in Medicine
          </h2>

          <p className="text-gray-500 text-[13px] leading-relaxed">
            I'm Dr. Tushar Raja a{" "}
            <span className="font-semibold">
              [Specialization, e.g., Internal Medicine Specialist]
            </span>{" "}
            with a passion for providing holistic, evidence-based medical care.
            With over 12 years of experience, I’ve had the privilege of treating
            thousands of patients with empathy, accuracy, and dedication.
          </p>

          <p className="text-gray-500 text-[13px] mb-6">
            I strongly believe that medicine is not just about treating
            diseases, but about understanding people, building trust, and
            guiding them toward long-term wellness.
          </p>

          <p className="font-semibold  flex gap-1 items-center mb-6">
            <CircleChevronRight fill="#0d6dfd" color="white" size={24} />
            Doctor's Motto or Belief:
            <span className="text-gray-600 font-normal">
              Healing begins with listening.
            </span>
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 flex items-center gap-2 hover:bg-[#041c33] text-white px-6 py-3 rounded-lg font-medium shadow-md">
              SEND MESSAGE <MoveUpRight size={16} />
            </button>
            <button className="border flex items-center gap-2 border-gray-400 hover:bg-[#041c33] hover:text-white px-6 py-3 rounded-lg font-medium shadow-md">
              VIDEO CALL <MoveUpRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <section
        className="w-full  bg-[#f2f2f2] py-12 px-6 md:px-16 lg:px-24"
        style={{
          backgroundImage:
            "url('/service-vector-1.svg'), url('/service-vector-2.svg')",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "left top, right top",
        }}>
        {/* Top Heading */}
        <div className="text-center mb-10">
          <button className="flex items-center gap-2 text-blue-600 border px-4 py-2 rounded-full text-sm font-medium mx-auto">
            <Heart className="text-[#0d6dfd]" fill="#0d6dfd" color="#0d6dfd" />
            Services I Provided
            <Heart className="text-[#0d6dfd]" fill="#0d6dfd" color="#0d6dfd" />
          </button>

          <h1 className="text-2xl md:text-3xl font-bold mt-4 text-gray-800">
            Medical Services I Provide
          </h1>
        </div>

        {/* Service Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 border-[#0d6dfd]">
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-4 hover:bg-blue-500">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">{service.desc}</p>

              {/* Link */}
              <a
                href="#"
                className="text-black font-medium text-sm inline-flex items-center gap-1 hover:text-[#0d6dfd] ">
                READ MORE <MoveUpRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>
      <CTASection />

      <section className="relative bg-white py-16 overflow-hidden">
        {/* Left Background Image */}
        <img
          src="/qualification-vector-1.svg" 
          alt="Doctor Illustration"
          className="absolute w-[30%] top-60 -left-10"
        />
        {/* Right Background Image */}
        <img
          src="/qualification-vector-2.svg " 
          alt="Doctor Illustration"
          className="absolute right-0 top-0 "
        />

        <div className="relative gap-2 max-w-9xl mx-auto px-4 md:px-8">
          {/* Badge */}
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1 text-sm text-blue-600 border border-blue-300 rounded-full">
              💙 My Qualification
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            My Qualification & Awards
          </h2>

          {/* Qualification Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {qualifications.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl mx-20 shadow-sm flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 p-5">
                <div>
                  <h4 className="font-semibold text-gray-700">
                    {item.university}
                  </h4>
                  <p className="text-sm text-gray-500">{item.duration}</p>
                </div>
                <p className="mt-4 md:mt-0 font-bold text-gray-800">
                  {item.degree}
                </p>
              </div>
            ))}
          </div>

          {/* Awards Row */}
          <div className="bg-gray-100 rounded-xl px-6 py-6 flex flex-wrap justify-between items-center gap-4">
            {/* Awards Icons */}
            <div className="flex flex-wrap items-center gap-[3rem] ">
              {awards.map((award, idx) => (
                <img
                  key={idx}
                  src={award}
                  alt={`Award ${idx + 1}`}
                  
                />
              ))}
            </div>

            {/* View All Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
              VIEW ALL AWARDS →
            </button>
          </div>
        </div>
      </section>
<Testonomials />

    </>
  );
};

export default Home;
