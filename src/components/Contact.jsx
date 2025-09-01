import React from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Phone, MapPin, Clock } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
    >
      <div className="container mx-auto px-6">
        {/* Judul */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          Hubungi Kami
        </motion.h2>

        {/* Deskripsi */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Punya pertanyaan atau ingin bekerja sama? Hubungi kami melalui
          formulir atau informasi kontak berikut.
        </motion.p>

        {/* Grid 2 Kolom */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Informasi Kontak */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100 space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Informasi Kontak
            </h3>

            {/* Alamat */}
            <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-indigo-50 transition cursor-pointer">
              <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Alamat</h4>
                <a
                  href="https://maps.app.goo.gl/kzeUx9qzTqYreHsy5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 text-sm hover:text-indigo-600 transition"
                >
                  Jl. Gegerkalong Hilir No.86, Sukarasa, Kec. Sukasari, Kota
                  Bandung, Jawa Barat 40152
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-indigo-50 transition cursor-pointer">
              <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
                <Phone size={22} />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">WhatsApp</h4>
                <a
                  href="https://wa.me/6285721378291"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 text-sm hover:text-indigo-600 transition"
                >
                  +62 857 2137 8291
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-indigo-50 transition cursor-pointer">
              <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
                <Mail size={22} />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Email</h4>
                <a
                  href="mailto:cs@perusahaan.com"
                  className="text-gray-600 text-sm hover:text-indigo-600 transition"
                >
                  cs@perusahaan.com
                </a>
              </div>
            </div>

            {/* Jam Kerja */}
            <div className="flex items-start gap-4 p-3 rounded-xl">
              <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
                <Clock size={22} />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Jam Kerja</h4>
                <p className="text-gray-600 text-sm">
                  Senin - Jumat, 09.00 - 18.00 WIB
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100 space-y-5 sm:max-w-md mx-auto"
          >
            {/* Nama */}
            <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-indigo-400 transition">
              <span className="px-3 text-indigo-600">
                <User size={20} />
              </span>
              <input
                type="text"
                placeholder="Nama"
                className="w-full p-3 outline-none bg-transparent"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-indigo-400 transition">
              <span className="px-3 text-indigo-600">
                <Mail size={20} />
              </span>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 outline-none bg-transparent"
              />
            </div>

            {/* Pesan */}
            <div className="flex items-start border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-indigo-400 transition">
              <span className="px-3 pt-3 text-indigo-600">
                <MessageSquare size={20} />
              </span>
              <textarea
                placeholder="Pesan"
                className="w-full p-3 outline-none h-32 resize-none bg-transparent"
              ></textarea>
            </div>

            {/* Tombol */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow"
            >
              Kirim Pesan
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
