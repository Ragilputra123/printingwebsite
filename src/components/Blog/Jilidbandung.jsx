import React from "react";

function JilidBandung() {
  return (
    <section id="jilid" className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Layanan Jilid Buku di Bandung – Rapi & Profesional
        </h1>

        <p className="text-gray-700 mb-6">
          Jilid buku sangat penting untuk menjaga dokumen agar rapi, awet, dan
          mudah dibawa. Di Bandung, kebutuhan <strong>jilid buku</strong>{" "}
          semakin meningkat, baik untuk keperluan kuliah, laporan kerja, maupun
          dokumen resmi.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
          Pilihan Layanan Jilid
        </h2>
        <p className="mb-6">
          <strong>3R Printing Bandung</strong> menyediakan berbagai opsi:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Jilid spiral plastik & kawat</li>
          <li>Jilid soft cover & hard cover</li>
          <li>Jilid lakban untuk dokumen cepat</li>
          <li>Finishing profesional & tahan lama</li>
        </ul>

        <p className="mb-6">
          Dengan harga terjangkau dan hasil rapi, kami siap membantu kebutuhan
          <strong>jilid buku Anda di Bandung</strong>.
        </p>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/6285721378291"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pesan Jilid Buku di 3R Printing via WhatsApp"
            className="inline-block bg-green-600 text-white text-lg font-semibold px-10 py-4 rounded-2xl shadow-lg hover:bg-green-700 transition"
          >
            📩 Pesan Jilid Buku Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}

export default JilidBandung;
