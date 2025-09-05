import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Berapa lama pengerjaan stempel flash di Bandung?",
    answer:
      "Pengerjaan stempel flash di 3R Printing sangat cepat, hanya butuh waktu sekitar 5–10 menit saja.",
  },
  {
    question: "Apakah bisa pesan jasa printing dalam jumlah besar?",
    answer:
      "Tentu saja! Kami melayani cetakan dalam jumlah kecil maupun besar dengan kualitas konsisten.",
  },
  {
    question: "Apakah melayani desain sebelum cetak?",
    answer:
      "Ya, tim kami dapat membantu menyesuaikan desain brosur, kartu nama, banner, maupun dokumen sebelum proses cetak.",
  },
  {
    question: "Apakah bisa pesan dan bayar via online?",
    answer:
      "Bisa. Anda dapat memesan melalui WhatsApp, melakukan pembayaran transfer, dan hasil cetakan bisa diantar atau diambil langsung.",
  },
  {
    question: "Dimana lokasi 3R Printing di Bandung?",
    answer:
      "Kami berlokasi di Bandung. Detail alamat dapat Anda lihat di halaman Kontak, lengkap dengan Google Maps.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Pertanyaan yang Sering Diajukan
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Berikut beberapa pertanyaan umum tentang{" "}
          <strong>jasa printing</strong> dan{" "}
          <strong>stempel flash di Bandung</strong> yang sering diajukan oleh
          pelanggan kami.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-4 cursor-pointer transition"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="text-gray-600 mt-3">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
