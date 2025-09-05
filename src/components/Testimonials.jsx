import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";

// Import CSS Swiper
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Budi Santoso",
    feedback:
      "Pelayanan cepat dan hasil cetakan sangat memuaskan. Saya pesan stempel flash di Bandung dan langsung jadi hanya dalam hitungan menit.",
    rating: 5,
  },
  {
    name: "Siti Aisyah",
    feedback:
      "Harga terjangkau, kualitas terbaik. Jasa printing di Bandung yang recommended untuk cetak brosur dan kartu nama.",
    rating: 5,
  },
  {
    name: "Andi Wijaya",
    feedback:
      "Saya sering order di sini untuk keperluan kantor. Cetak dokumen dan jilid buku hasilnya rapi, pengiriman juga tepat waktu.",
    rating: 4,
  },
  {
    name: "Dewi Lestari",
    feedback:
      "Tempat jasa printing terbaik di Bandung. Hasil cetak foto dan ID card sangat memuaskan.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Testimoni Pelanggan
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Inilah pengalaman pelanggan kami setelah menggunakan{" "}
          <strong>jasa printing</strong> dan{" "}
          <strong>stempel flash di Bandung</strong> bersama 3R Printing.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-center mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 fill-yellow-400 w-5 h-5"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4 text-center">
                    "{t.feedback}"
                  </p>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {t.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
