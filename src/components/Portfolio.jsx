// src/components/Portfolio.jsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";

// Import gambar dari src/Assets
import cetakbuku1 from "../Assets/cetakbuku1.png";
import IdCard from "../Assets/IdCard.png";
import Kartunama from "../Assets/Kartunama.png";
import stempel from "../Assets/Stempel.png";

// Import CSS Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Portfolio() {
  const projects = [
    { id: 1, title: "Cetak Buku", image: cetakbuku1 },
    { id: 2, title: "ID Card", image: IdCard },
    { id: 3, title: "Kartu Nama", image: Kartunama },
    { id: 4, title: "Stempel", image: stempel },
  ];

  const whatsappNumber = "6285721378291";
  const defaultMessage = "Halo, saya tertarik untuk order";

  return (
    <section id="portfolio" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Portofolio Jasa Printing & Stempel Flash di Bandung
        </motion.h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Berikut contoh hasil pekerjaan <strong>3R Printing</strong>, mulai
          dari cetak buku, kartu nama, poster promosi, hingga packaging. Semua
          layanan <strong>jasa printing</strong> dan{" "}
          <strong>stempel flash di Bandung</strong> kami kerjakan dengan
          kualitas terbaik dan harga bersahabat.
        </p>

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
            {projects.map((project) => {
              const message = `${defaultMessage} ${project.title}. Bisa dibantu?`;
              const utmParams = new URLSearchParams({
                utm_source: "portfolio_website",
                utm_medium: "whatsapp_button",
                utm_campaign: "portfolio_inquiry",
                utm_content: `project_${project.id}`,
              });

              const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                message
              )}&${utmParams.toString()}`;

              return (
                <SwiperSlide key={project.id}>
                  <motion.div
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={project.image}
                      alt={`Portofolio ${project.title} - Jasa Printing Bandung`}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold text-gray-700 mb-3">
                        {project.title}
                      </h3>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full shadow hover:bg-green-700 transition"
                      >
                        <MessageCircle size={18} /> Hubungi via WhatsApp
                      </a>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
