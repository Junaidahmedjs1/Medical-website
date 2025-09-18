import React from "react";
import {
  Heart,
  MoveUpRight,
  CircleChevronRight,
  FileText,
  Stethoscope,
  HeartPulse,
  CalendarDays,
  Mail,
  Send,
} from "lucide-react";
import CtaSection from "../components/CtaSection";
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

const articles = [
  {
    image: "/blog-2.jpg",
    title: "The Medical Minute Quick Tips for Better Living",
    date: "11 March 2025",
    category: "Event",
  },
  {
    image: "/blog-1.jpg",
    title: "Healthy Habits for Busy Professionals",
    date: "11 March 2025",
    category: "Event",
  },
  {
    image: "/blog-3.jpg",
    title: "Ask the Doctor Real Answers, Real Care",
    date: "11 March 2025",
    category: "Event",
  },
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
      <CtaSection />

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
          <div className="bg-gray-100 rounded-xl px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Awards Icons */}
            <div className="grid grid-cols-3 gap-6 md:flex md:flex-wrap md:items-center md:gap-[3rem]">
              {awards.map((award, idx) => (
                <img
                  key={idx}
                  src={award}
                  alt={`Award ${idx + 1}`}
                  className="w-20 h-auto mx-auto"
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
      <section className="bg-[#041c33] mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-6 gap-10">
        {/* LEFT TEXT */}
        <div className="flex-1">
          <h1 className="flex rounded-full items-center md:justify-start gap-3 text-2xl md:text-3xl font-bold text-[#0749e2]">
            <Heart size={30} fill="#0749e2" color="#0749e2" />
            Your Health, Your Convenience
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug mt-4">
            Consult Your Doctor Online — <br />
            Anytime, Anywhere
          </h1>
          <p className="text-sm text-[#a8b8bf] max-w-lg mt-4">
            Say goodbye to long queues and unnecessary travel. With our secure
            video consultation service, you can now talk to experienced doctors
            from the comfort of your home.
          </p>

          {/* Points */}
          <div className="mt-4 space-y-3">
            <h2 className="text-white flex gap-2 items-center">
              <CircleChevronRight color="white" fill="#0d6dfd" size={20} />
              Speak with certified specialists in real time
            </h2>
            <h2 className="text-white flex gap-2 items-center">
              <CircleChevronRight color="white" fill="#0d6dfd" size={20} />
              Easy appointment booking via mobile or web
            </h2>
            <h2 className="text-white flex gap-2 items-center">
              <CircleChevronRight color="white" fill="#0d6dfd" size={20} />
              Private, secure, and confidential video calls
            </h2>
            <h2 className="text-white flex gap-2 items-center">
              <CircleChevronRight color="white" fill="#0d6dfd" size={20} />
              Available 7 days a week, including evenings
            </h2>
          </div>

          {/* Button */}
          <button className="text-white flex gap-2 items-center bg-[#0d6dfd] hover:bg-lime-300 hover:text-black font-semibold px-4 py-3 rounded-md shadow mt-6">
            BOOK VIDEO CONSULTATION <MoveUpRight size={16} />
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex-1 relative flex justify-center items-center">
          {/* Background image */}
          <img
            src="/video-call-1.png"
            alt="Doctor Background"
            className="w-64 md:w-80 object-contain rounded-xl shadow-lg"
          />
          {/* Foreground image (overlapped) */}
          <img
            src="/video-call-2.png"
            alt="Doctor Foreground"
            className="w-48 md:w-64 object-contain rounded-xl shadow-xl absolute -bottom-6 -right-6"
          />
        </div>
      </section>
      <section className="relative w-full bg-white py-12 px-6 md:px-16 lg:px-24 flex flex-col items-center gap-8 overflow-hidden">
        {/* Background Images */}
        <img
          src="/blog-bg.png"
          alt="Background Left"
          className="hidden md:block absolute left-0 top-0  w-auto object-contain opacity-5 pointer-events-none"
        />
        <img
          src="/blog-vector.svg"
          alt="Background Right"
          className="hidden md:block absolute right-0 bottom-0 h-full w-auto object-contain opacity-20 pointer-events-none"
        />

        {/* Title */}
        <div>
          <h1 className="flex items-center gap-2 text-blue-600 border px-4 py-2 rounded-full text-lg font-medium mx-auto relative z-10">
            <Heart className="text-[#0d6dfd]" fill="#0d6dfd" color="#0d6dfd" />
            Doctor's Blog
          </h1>
        </div>

        {/* Articles */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-52 w-full object-cover"
                />

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {item.title}
                  </h3>

                  {/* Meta info */}
                  <div className="flex items-center gap-6 text-gray-500 text-sm mt-3">
                    <span className="flex items-center gap-2">
                      {" "}
                      <CalendarDays size={13} />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Mail size={13} />
                      {item.category}
                    </span>
                  </div>

                  {/* Button */}
                  <div className="mt-auto pt-6">
                    <button className="w-full bg-[#041c33] hover:bg-blue-600 text-white  font-medium py-3 rounded-b-xl flex items-center justify-center gap-2 transition">
                      READ MORE <MoveUpRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white py-12 px-6 md:px-16 lg:px-24">
  {/* Background Images */}
  <img
    src="/blog-vector.svg"
    alt="Background Left"
    className="hidden z-10 md:block absolute left-0 top-0 w-auto object-contain opacity-50 pointer-events-none"
  />
  <img
    src="/blog-vector-2.svg"
    alt="Background Right"
    className=" md:block absolute right-0 bottom-0  w-auto object-contain opacity-100 pointer-events-none"  
  />

  <div className="max-w-7xl mx-auto">
    {/* Heading */}
    <div className="flex flex-col items-start gap-3 mb-10">
      <h1 className="flex items-center gap-2 text-blue-600 border px-4 py-2 rounded-full text-lg font-medium">
        <Heart className="text-blue-600" fill="#0d6dfd" />
        Appointment
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        Apply for Appointment
      </h2>
    </div>

    {/* Grid Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Google Map */}
      <div className="w-full z-10 h-80 rounded-xl overflow-hidden shadow-md">
        <iframe
          title="clinic-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8863945360146!2d90.42256891498222!3d23.81033138456126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77ab2c5b8e7%3A0xabc57d5e7b67c1ec!2sBRAC%20University!5e0!3m2!1sen!2sbd!4v1671234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      {/* Appointment Form */}
      <form className="bg-white p-8 rounded-xl shadow-lg flex flex-col gap-6">
        {/* Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
          />
          <input
            type="date"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
          />
          <select className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm bg-white focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none">
            <option disabled selected>
              Select Doctor
            </option>
            <option>Dr. John Doe</option>
            <option>Dr. Jane Smith</option>
          </select>
          <select className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm bg-white focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none">
            <option disabled selected>
              Select Treatment
            </option>
            <option>Cardiology</option>
            <option>Dermatology</option>
            <option>Neurology</option>
          </select>
        </div>

        {/* Terms */}
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          I agree to the terms and conditions
        </label>

        {/* Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md flex items-center justify-center gap-2 transition">
          Appointment Now <Send size={18} />
        </button>
      </form>
    </div>
  </div>
</section>

    </>
  );
};

export default Home;
