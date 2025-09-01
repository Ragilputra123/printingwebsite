import React from "react";
import { motion } from "framer-motion";
import { Printer, Copy, PenTool } from "lucide-react"; // ikon dari lucide-react

function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
    >
      <div className="container mx-auto px-6 text-center max-w-4xl">
        {/* Animasi judul */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6"
        >
          Tentang Kami
        </motion.h2>

        {/* Garis dekorasi */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-10 rounded-full"
        />

        {/* Deskripsi */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 leading-relaxed text-lg mb-12"
        >
          Kami adalah penyedia layanan cetak dan desain yang berfokus pada{" "}
          <span className="font-semibold text-indigo-600">kualitas</span>,{" "}
          <span className="font-semibold text-purple-600">kecepatan</span>, dan{" "}
          <span className="font-semibold text-indigo-600">profesionalisme</span>
          .
          <br /> Dari fotokopi sederhana hingga cetak buku dan profil
          perusahaan, kami siap membantu kebutuhan bisnis Anda dengan solusi
          modern.
        </motion.p>

        {/* Ikon layanan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { icon: <Printer size={40} />, title: "Cetak Berkualitas" },
            { icon: <Copy size={40} />, title: "Fotokopi Cepat" },
            { icon: <PenTool size={40} />, title: "Desain Kreatif" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-shadow"
            >
              <div className="text-indigo-600 mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
