import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { MoveUpRight, MoveUpLeft } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Kathryn Murphy",
    title: "Medical Assistant",
    message:
      "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
    image: "/reviewer-1.jpg",
  },
  {
    name: "Kathryn Murphy",
    title: "Medical Assistant",
    message:
      "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
    image: "/reviewer-1.jpg",
  },
  {
    name: "Kathryn Murphy",
    title: "Medical Assistant",
    message:
      "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
    image: "/reviewer-1.jpg",
  },
   {
    name: "Kathryn Murphy",
    title: "Medical Assistant",
    message:
      "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
    image: "/reviewer-1.jpg",
  },
   {
    name: "Kathryn Murphy",
    title: "Medical Assistant",
    message:
      "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
    image: "/reviewer-1.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-100 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1 text-sm text-blue-600 border border-blue-300 rounded-full">
            💙 Client's Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Clients Feedbacks
          </h2>
        </div>

       {/* Navigation Buttons */}
        <div className="absolute top-6 right-8 z-20 flex gap-3">
          <button className="prev-btn h-10 w-10 flex items-center justify-center rounded-full border text-black hover:bg-gray-300 transition">
            <MoveUpLeft className="w-5 h-5" />
          </button>
          <button className="next-btn h-10 w-10 flex items-center justify-center rounded-full border text-black hover:bg-gray-300 transition">
            <MoveUpRight className="w-5 h-5" />
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3} 
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }, 
          }}>
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`flex flex-col items-center transition-all duration-500 ${
                    isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"
                  }`}>
                  {/* Blue Profile Bar */}
                  <div
                    className={`flex items-center gap-4 px-6 py-3 z-10 rounded-full shadow-md transition-all ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-400"
                    }`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <div className="text-left">
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-xs">{item.title}</p>
                    </div>
                  </div>

                  {/* White Message Card */}
                  <div className="bg-white rounded-xl p-6 shadow-sm -mt-4 text-center">
                    <p
                      className={`text-sm leading-relaxed transition-all ${
                        isActive ? "text-gray-700" : "text-gray-400"
                      }`}>
                      {item.message}
                    </p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
