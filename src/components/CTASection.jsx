import { Heart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const CtaSection = () => {
  return (
    <>
      {/* CTA Section */}
      <section
        className="relative w-full bg-center bg-cover py-12 px-6 md:px-16 lg:px-24"
        style={{ backgroundImage: "url('/cta-bg.jpg')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0e273e] opacity-90"></div>

        {/* Content */}
        <div className="relative flex  flex-col md:flex-row justify-between items-center md:items-start gap-6 text-white">
          {/* Left Content */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <button className="flex items-center gap-2 border text-lime-200 border-lime-200 bg-[#123] px-4 py-2 rounded-full text-sm font-medium">
              <Heart className="text-lime-200" fill="oklch(0.87 0.12 130.8)" />
              Do You Need Emergency Care
            </button>

            <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left">
              Do You Have Health Problems
            </h2>
          </div>

          {/* Right Button */}
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium shadow-md">
            I NEED HELP →
          </button>
        </div>

        {/* Carousel Section */}
        <div className="w-full py-10">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={10}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={false}
            navigation={false}
            className="w-full max-w-5xl mx-auto">
            {/* Repeat same slide multiple times */}
            {[...Array(20)].map((_, i) => (
              <SwiperSlide key={i}>
                <img
                  src="/client-logo.svg"
                  alt="Client Logo"
                  className="w-full h-[30px] opacity-70 transition duration-300 hover:opacity-100 hover:brightness-0 hover:invert hover:hue-rotate-180"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default CtaSection;
