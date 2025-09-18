import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, CheckCircle, Phone, Mail, ArrowRight } from "lucide-react";

const ServicesDetails = () => {
  return (
    <>
      {/* ===== Hero / Breadcrumb Section ===== */}
      <section className="relative bg-[#041c33] text-white pt-20 pb-[3rem] px-2 md:px-16">
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Serivces Deatails
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

      <section className="w-full bg-white">
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 py-12">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Top Image + Title */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg"
                alt="Counseling Session"
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>

            {/* Heading + Description */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Personalized Stress & Lifestyle Counseling
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our Stress & Lifestyle Counseling service is designed to help you
              take control of your mental well-being and daily habits. Whether
              you're dealing with anxiety, burnout, or life imbalance, we offer
              expert support that fits your personal needs.
            </p>

            {/* Quote Box */}
            <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-lg">
              <p className="text-gray-700 italic">
                “This blog post hits the mark perfectly for our target audience
                — busy professionals who care about their health but struggle
                with time.”
                <span className="text-blue-600 font-medium"> — John Doe</span>
              </p>
            </div>

            {/* What We Offer Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  What We Offer:
                </h3>
                <ul className="space-y-3">
                  {[
                    "One-on-one virtual sessions with certified counselors",
                    "Stress and anxiety management techniques",
                    "Sleep improvement & energy-boosting strategies",
                    "Personalized nutrition and wellness plans",
                    "Habit-building for a healthier, more balanced life",
                    "Confidential, judgment-free care",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg"
                  alt="Counseling Offer"
                  className="w-full h-[300px] md:h-full object-cover"
                />
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Key Features:
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    title: "Stress Reduction Coaching",
                    desc: "Learn to manage pressure burnout, and daily anxiety with proven techniques",
                  },
                  {
                    title: "Personalized Nutrition & Wellness Plans",
                    desc: "Build healthier routines that support productivity and rest.",
                  },
                  {
                    title: "Lifestyle Planning",
                    desc: "Create sustainable habits for nutrition, exercise, and sleep.",
                  },
                  {
                    title: "One-on-One Counseling",
                    desc: "Talk to licensed professionals in a private, secure online setting.",
                  },
                  {
                    title: "Mental Wellness Support",
                    desc: "Gain tools to improve focus, mood, and overall life satisfaction.",
                  },
                ].map((feature, i) => (
                  <li key={i} className="flex gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-1" />
                    <p>
                      <span className="font-semibold text-gray-800">
                        {feature.title}:
                      </span>{" "}
                      <span className="text-gray-600">{feature.desc}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Services List */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-3">
                {[
                  "General Health Consultation",
                  "Chronic Disease Management",
                  "Online Video Consultation",
                  "Preventive Health Checkups",
                  "Women’s & Men’s Health",
                  "Family Health Services",
                ].map((service, i) => (
                  <li
                    key={i}
                    className={`flex justify-between items-center px-3 py-2 rounded-lg cursor-pointer ${
                      i === 0
                        ? "bg-blue-600 text-white"
                        : "hover:bg-blue-100 text-gray-700"
                    }`}>
                    {service}
                    <ArrowRight className="w-4 h-4" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Box */}
            <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold mb-2">
                Have Additional Questions?
              </h4>
              <p className="text-sm opacity-90">
                3rd Avenue, 83 Manhattan, London, UK
              </p>
              <p className="flex items-center gap-2 mt-3">
                <Phone className="w-4 h-4" /> +1890 123 456
              </p>
              <p className="flex items-center gap-2 mt-2">
                <Mail className="w-4 h-4" /> support@example.com
              </p>
              <button className="btn flex items-center px-4 py-3 mt-4 bg-white text-blue-700 hover:bg-blue-100 rounded-lg">
                Contact Us <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesDetails;
