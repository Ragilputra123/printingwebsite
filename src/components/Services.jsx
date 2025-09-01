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
    title: "Stempel Warna",
    desc: "Pembuatan stempel warna cepat & berkualitas.",
    icon: <Stamp className="w-10 h-10" />,
  },
  {
    title: "ID Card & Sticker",
    desc: "Cetak ID Card, kartu nama, dan sticker custom.",
    icon: <IdCard className="w-10 h-10" />,
  },
  {
    title: "Cetak & Print",
    desc: "Print warna, textbook, hingga e-book dengan hasil maksimal.",
    icon: <Printer className="w-10 h-10" />,
  },
  {
    title: "Jilid Buku",
    desc: "Jilid plastik, kawat, hard cover, dan soft cover.",
    icon: <BookOpen className="w-10 h-10" />,
  },
  {
    title: "Scan & Laminating",
    desc: "Scan dokumen & laminating rapi tahan lama.",
    icon: <ScanLine className="w-10 h-10" />,
  },
  {
    title: "Pas Photo",
    desc: "Cetak foto resmi berbagai ukuran.",
    icon: <Camera className="w-10 h-10" />,
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
          Layanan Kami
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Semua kebutuhan cetak, jilid, foto, hingga stempel tersedia lengkap di
          3R Photocopy & Stempel Warna.
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
