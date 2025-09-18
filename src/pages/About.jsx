import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  CircleChevronRight,
  ChevronLeft,
  ArrowRight,
  Video,
  PhoneCall,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const about = () => {
  const swiperRef = useRef(null);
  return (
    <>
      {/* ===== Hero / Breadcrumb Section ===== */}
      <section className="relative bg-[#041c33] text-white pt-20 pb-[3rem] px-2 md:px-16">
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            About
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
            <span className="font-bold">About</span>
          </nav>
        </div>
      </section>
      {/* ===== About Section ===== */}
      <section
        className="relative bg-cover bg-white bg-center py-16 px-6 md:px-12 lg:px-20"
        style={{
          backgroundImage: "url('/about-2-vector.svg')",
        }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side Images */}
          <div className="relative flex-1 flex items-center justify-center">
            {/* First Image with Shape */}
            <div className="relative w-72 h-96 rounded-[40px] overflow-hidden shadow-lg">
              <img
                src="/about-2-img-1.jpg"
                alt="Doctor and patient"
                className="w-full h-full object-cover"
              />
              {/* Label */}
              <span className="absolute w-[100%] left-[-120px] top-8 -translate-y-1/2 rotate-[-90deg] bg-blue-600 text-white font-semibold px-1 py-5 rounded-lg">
                12+ Years Experience
              </span>
            </div>

            {/* Second Image Overlap */}
            <div className="absolute bottom-[-40px] right-[-40px] w-52 h-64 rounded-2xl overflow-hidden shadow-lg ">
              <img
                src="/about-2-img-2.jpg"
                alt="Hospital staff"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side Content */}
          <div className="flex-1 text-gray-800">
            {/* About us heading */}
            <div className="flex items-center gap-2 text-blue-600 font-medium mb-3">
              <span className="text-lg">💙</span>
              <span>ABOUT US</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
              Committed to Your Care <br /> Every Step of the Way
            </h2>

            <p className="text-gray-600 mb-6">
              With a team of world-class doctors, experienced nurses, and
              dedicated healthcare professionals, we are committed to delivering
              compassionate, high-quality medical care to every patient.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-blue-600">
                  <CircleChevronRight size={20} fill="#3B82F6" color="white" />
                </span>{" "}
                Highly Qualified Specialists
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600">
                  <CircleChevronRight size={20} fill="#3B82F6" color="white" />
                </span>{" "}
                Advanced Medical Equipment
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600">
                  <CircleChevronRight size={20} fill="#3B82F6" color="white" />
                </span>{" "}
                Safe, Comfortable Environment
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600">
                  <CircleChevronRight size={20} fill="#3B82F6" color="white" />
                </span>{" "}
                24/7 Emergency Services
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600">
                  <CircleChevronRight size={20} fill="#3B82F6" color="white" />
                </span>{" "}
                Patient-Centered Approach
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600">
                  <CircleChevronRight size={20} fill="#3B82F6" color="white" />
                </span>{" "}
                Affordable, Transparent Pricing
              </div>
            </div>

            {/* CEO Info */}
            <div className="flex items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-4">
                <img
                  src="/about-2-author.jpg"
                  alt="CEO"
                  className="w-12 h-12 rounded-full border-2 border-gray-300"
                />
                <p className="font-semibold">
                  CEO, Founder Of <br /> CarePoint
                </p>
              </div>
              <div className="ml-4">
                <img src="/signature.png" alt="Signature" />
              </div>
            </div>

            {/* Button */}
            <button className="btn bg-[#dbe9a1] text-black flex items-center font-semibold rounded-lg px-2 py-3 hover:bg-[#041c33] hover:text-[#dbe9a1]">
              More About <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose US Section */}
      <section
        className="relative bg-cover bg-[#041c33] bg-center py-16 px-6 md:px-12 lg:px-20"
        style={{
          backgroundImage: "url('/about-2-vector.svg')",
        }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side Images */}
          <div className="relative flex-1 flex items-center justify-center">
            {/* First Image with Shape */}
            <div className="relative w-72 h-96 rounded-[40px] overflow-hidden shadow-lg">
              <img
                src="/about-2-img-1.jpg"
                alt="Doctor and patient"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Second Image Overlap */}
            <div className="absolute bottom-[-40px] right-[-0px] w-52 h-64 rounded-2xl overflow-hidden shadow-lg ">
              <img
                src="/about-2-img-2.jpg"
                alt="Hospital staff"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side Content */}
          <div className="flex-1 text-gray-800">
            {/* About us heading */}
            <div className="flex items-center gap-2 text-blue-600 font-medium mb-3">
              <span className="text-lg">💙</span>
              <span>WHY CHOOSE US</span>
            </div>

            <h2 className="text-3xl md:text-4xl text-white font-bold leading-snug mb-4">
              Where Compassion Meets <br /> Excellence
            </h2>

            <p className="text-gray-600 mb-6 text-[12px]">
              That's why we are committed to delivering world-class medical
              services with compassion, innovation, and integrity — putting your
              health and comfort first."
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-center gap-4">
                <div className="rounded-full p-3 bg-white text-blue-500 w-10 h-10 flex items-center justify-center font-bold shadow">
                  01
                </div>
                <div>
                  <h2 className="text-lg text-white font-semibold">
                    Personalized Patient Care
                  </h2>
                  <p className="text-gray-600 text-[14px]">
                    Our team includes highly trained doctors, nurses, and
                    specialists, each dedicated to providing the best possible
                    care.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-4">
                <div className="rounded-full p-3 bg-white text-blue-500 w-10 h-10 flex items-center justify-center font-bold shadow">
                  02
                </div>
                <div>
                  <h2 className="text-lg text-white font-semibold">
                    World-Class Medical Experts
                  </h2>
                  <p className="text-gray-600 text-[14px]">
                    Our team includes highly trained doctors, nurses, and
                    specialists, each dedicated to providing the best possible
                    care.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-4">
                <div className="rounded-full p-3 bg-white text-blue-500 w-10 h-10 flex items-center justify-center font-bold shadow">
                  03
                </div>
                <div>
                  <h2 className="text-lg text-white font-semibold">
                    World-Class Medical Experts
                  </h2>
                  <p className="text-gray-600 text-[14px]">
                    Our team includes highly trained doctors, nurses, and
                    specialists, each dedicated to providing the best possible
                    care.
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="btn mt-6 bg-transparent border border-blue-500 text-white flex items-center font-semibold rounded-lg px-2 py-3 hover:bg-blue-500 ">
              APPOINTMENT NOW <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* HAPPY PATIENTS  */}
      <section
        className="relative bg-cover bg-gray-100 bg-center py-16 px-6 md:px-12 lg:px-20"
        style={{
          backgroundImage: "url('/about-2-vector.svg')",
        }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side Text */}
          <div className="flex-1 text-gray-800">
            <div className="flex items-center gap-2 text-blue-600 font-medium mb-3">
              <span className="text-lg">💙</span>
              <span>PATIENT SAYS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
              Happy Patients says
            </h2>
            <p className="text-gray-600  mb-6 text-[13px]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa{" "}
              <br />
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla,
              <br /> mattis ligula consec.
            </p>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="btn rounded-full p-2 bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white">
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="btn rounded-full p-2  bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Side Carousel */}
          <div className="flex-1 max-w-md mx-auto">
            <Swiper
              modules={[Navigation, Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="w-full">
              {[1, 2, 3, 4].map((i) => (
                <SwiperSlide key={i}>
                  <div>
                    {/* Main Card */}
                    <div className=" bg-white rounded-2xl shadow-xl p-5">
                      <p className="text-gray-600 font-semibold italic mb-6">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
                        sit amet sapien fringilla, mattis ligula.
                      </p>

                      <hr className="my-4" />

                      <div className="flex items-center gap-3">
                        <img
                          src="/reviewer-1.jpg"
                          alt="Patient"
                          className="w-12 h-12 rounded-full object-cover border"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            Kathryn Murphy
                          </h3>
                          <p className="text-gray-500 text-sm">
                            Medical Assistant
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side Content */}
          <div className="flex-1">
            <p className="text-blue-600 font-semibold uppercase mb-2 flex items-center gap-2">
              <span className="text-xl">💙</span> Your Health, Your Convenience
            </p>

            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
              Consult Your Doctor Online — <br /> Anytime, Anywhere
            </h1>

            <p className="text-gray-600 mb-6 max-w-md">
              Say goodbye to long queues and unnecessary travel. With our secure
              video consultation service, you can now talk to experienced
              doctors from the comfort of your home.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-600 text-white">
                  <ArrowRight size={16} />
                </span>
                <span>Speak with certified specialists in real time</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-600 text-white">
                  <ArrowRight size={16} />
                </span>
                <span>Easy appointment booking via mobile or web</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-600 text-white">
                  <ArrowRight size={16} />
                </span>
                <span>Private, secure, and confidential video calls</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-600 text-white">
                  <ArrowRight size={16} />
                </span>
                <span>Available 7 days a week, including evenings</span>
              </li>
            </ul>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition flex items-center gap-2">
                <Video size={18} /> Book A Video Call
              </button>
              <button className="border border-gray-400 px-6 py-3 rounded-md hover:bg-gray-100 transition flex items-center gap-2">
                <PhoneCall size={18} /> See Available Doctors
              </button>
            </div>
          </div>

          {/* Right Side Image Section */}
          <div className="flex-1 relative flex justify-center">
            {/* Big Circular Image */}
            <div className="relative w-[400px] h-[400px] rounded-full shadow-lg">
              <img
                src="/inner-video-call.png"
                alt="Doctor Consultation"
                className="w-full h-full object-cover"
              />
              {/* Small Floating Image */}
              <div className="absolute -top-10 left-1/4 -translate-x-1/2 w-50 h-50 rounded-full overflow-hidden shadow-xl">
                <img
                  src="/inner-video-call-img-2.png"
                  alt="Video Call"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
