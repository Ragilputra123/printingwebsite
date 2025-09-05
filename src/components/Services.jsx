import React from "react";
import {
  Stamp,
  IdCard,
  Printer,
  BookOpen,
  ScanLine,
  Camera,
} from "lucide-react";

const services = [
  {
    title: "Stempel Flash & Warna",
    desc: "Pembuatan stempel flash dan warna cepat, awet, dan berkualitas di Bandung.",
    icon: <Stamp className="w-10 h-10" aria-label="Stempel Flash" />,
  },
  {
    title: "ID Card & Sticker",
    desc: "Cetak ID Card, kartu nama, dan sticker custom dengan desain modern.",
    icon: <IdCard className="w-10 h-10" aria-label="ID Card" />,
  },
  {
    title: "Cetak & Print Dokumen",
    desc: "Print dokumen warna, textbook, hingga e-book dengan hasil maksimal.",
    icon: <Printer className="w-10 h-10" aria-label="Printer" />,
  },
  {
    title: "Jilid Buku",
    desc: "Jilid plastik, spiral, kawat, hard cover, dan soft cover untuk kebutuhan sekolah & bisnis.",
    icon: <BookOpen className="w-10 h-10" aria-label="Jilid Buku" />,
  },
  {
    title: "Scan & Laminating",
    desc: "Layanan scan dokumen dan laminating agar lebih rapi dan tahan lama.",
    icon: <ScanLine className="w-10 h-10" aria-label="Scan Dokumen" />,
  },
  {
    title: "Pas Photo",
    desc: "Cetak foto resmi berbagai ukuran untuk kebutuhan administrasi.",
    icon: <Camera className="w-10 h-10" aria-label="Pas Foto" />,
  },
];

function Services() {
  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Background abstrak */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-purple-100" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl -translate-x-20 -translate-y-20" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl translate-x-20 translate-y-20" />

      <div className="relative container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Layanan Jasa Printing & Stempel Flash di Bandung
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          3R Printing menyediakan berbagai layanan percetakan di Bandung, mulai
          dari <strong>printing dokumen</strong>, <strong>jilid buku</strong>,
          <strong> cetak ID card</strong>, hingga{" "}
          <strong>stempel flash cepat dan berkualitas</strong>.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {services.map((s, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-6 group-hover:scale-110 transition">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {s.title}
              </h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
