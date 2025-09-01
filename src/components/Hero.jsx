import React from "react";
import background from "../Assets/background.png";

function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-cover bg-center text-white text-center px-6 relative"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Overlay gradient biar teks tetap jelas */}
      <div className="absolute inset-0 bg-blue-900/60"></div>

      {/* Konten */}
      <div className="relative z-10 max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Layanan Cetak & Desain Profesional
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          Photocopy • Pembuatan Buku • Stampel Perusahaan
        </p>
        <a
          href="#contact"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Pesan Sekarang
        </a>
      </div>
    </section>
  );
}

export default Hero;
