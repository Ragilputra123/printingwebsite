// src/components/Portfolio.jsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Import CSS Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Cetak Buku",
      image: "/assets/book-print.jpg",
    },
    {
      id: 2,
      title: "Poster Promosi",
      image: "/assets/poster-print.jpg",
    },
    {
      id: 3,
      title: "Kartu Nama",
      image: "/assets/business-card.jpg",
    },
    {
      id: 4,
      title: "Packaging Makanan",
      image: "/assets/packaging.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Portofolio Kami
        </motion.h2>

        <div className="relative">
          {/* Tombol Navigasi */}
          <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
            <button className="swiper-button-prev bg-blue-600 text-white p-3 rounded-full shadow hover:bg-blue-800">
              <ArrowLeft size={20} />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2">
            <button className="swiper-button-next bg-blue-600 text-white p-3 rounded-full shadow hover:bg-blue-800">
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-700">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
