import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white">
      {/* Kontainer Utama */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4">3R Printing</h2>
          <p className="text-gray-200 text-sm leading-relaxed">
            Cetak cepat, hasil maksimal. Kami siap mendukung kebutuhan cetak
            bisnis, sekolah, hingga pribadi dengan kualitas terbaik.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-blue-400 inline-block pb-1">
            Navigasi
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-gray-200 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-200 transition">
                Layanan
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-gray-200 transition">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-200 transition">
                Tentang
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-200 transition">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Kontak & Sosial Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-blue-400 inline-block pb-1">
            Hubungi Kami
          </h3>
          <p className="flex items-center gap-2 mb-2">
            <Phone size={18} /> +62 812-3456-7890
          </p>
          <p className="flex items-center gap-2 mb-4">
            <Mail size={18} /> info@3rprinting.com
          </p>
          <div className="flex gap-5 mt-3">
            <a
              href="#"
              className="hover:text-blue-300 transition-transform transform hover:scale-110"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="hover:text-blue-300 transition-transform transform hover:scale-110"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="hover:text-blue-300 transition-transform transform hover:scale-110"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-blue-500 text-center py-4 text-sm text-gray-200">
        © {new Date().getFullYear()} 3R Printing. Semua Hak Dilindungi.
      </div>
    </footer>
  );
}

export default Footer;
