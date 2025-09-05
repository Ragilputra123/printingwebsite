import React from "react";

function StempelTips() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Tips Membuat Stempel Flash Awet & Tahan Lama
        </h1>
        <p className="text-gray-700 mb-6">
          Stempel flash semakin populer karena praktis, cepat digunakan, dan
          tidak memerlukan bantalan tinta. Namun, agar stempel flash tetap awet
          dan tidak cepat pudar, ada beberapa tips perawatan yang bisa Anda
          lakukan.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Tips Perawatan</h2>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Hindari menekan terlalu keras saat menggunakan stempel.</li>
          <li>
            Simpan stempel di tempat kering dan tidak terkena panas langsung.
          </li>
          <li>Isi ulang tinta sesuai rekomendasi produsen.</li>
          <li>
            Bersihkan permukaan stempel jika ada debu atau tinta berlebih.
          </li>
        </ul>

        <p className="mb-6">
          Dengan perawatan yang tepat, stempel flash Anda bisa bertahan lebih
          lama dan hasil cetakan tetap jelas.
        </p>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/6285721378291"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white text-lg font-semibold px-10 py-4 rounded-2xl shadow-lg hover:bg-green-700 transition"
          >
            📩 Pesan Stempel Flash Bandung
          </a>
        </div>
      </div>
    </section>
  );
}

export default StempelTips;
