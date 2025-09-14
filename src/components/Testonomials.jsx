import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Kathryn Murphy",
    title: "Medical Assistant",
    message:
      "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
    image: "/avatar.jpg", // make sure image exists in /public
  },
  {
    name: "Kathryn Murphy",
    title: "Medical Assistant",
    message:
      "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
    image: "/avatar.jpg",
  },
  {
    name: "Kathryn Murphy",
    title: "Medical Assistant",
    message:
      "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
    image: "/avatar.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-100 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1 text-sm text-blue-600 border border-blue-300 rounded-full">
            💙 Client's Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Clients Feedbacks
          </h2>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-6 right-8 z-10 flex gap-3">
          <button className="prev-btn h-10 w-10 rounded-full border text-xl text-blue-600 hover:bg-blue-100 transition">
            ←
          </button>
          <button className="next-btn h-10 w-10 rounded-full border text-xl text-blue-600 hover:bg-blue-100 transition">
            →
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl p-6 text-center relative shadow-sm">
                {/* Profile Info */}
                <div className="flex flex-col items-center -mt-14 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full border-4 border-white shadow-md"
                  />
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full mt-2">
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs">{item.title}</p>
                  </div>
                </div>

                {/* Message */}
                <p className="text-gray-600 text-sm">{item.message}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
