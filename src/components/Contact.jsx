import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Hubungi Kami
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Ingin pesan <strong>jasa printing</strong> atau{" "}
          <strong>stempel flash di Bandung</strong>? Hubungi kami melalui
          WhatsApp, email, atau kunjungi lokasi kami di Bandung.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Info Kontak */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-600 w-6 h-6" />
              <p>
                <strong>Alamat:</strong> Jl. Gegerkalong Hilir No.86, Sukarasa,
                Kec. Sukasari, Kota Bandung, Jawa Barat 40152
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-green-600 w-6 h-6" />
              <p>
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/6285721378291"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold"
                >
                  +62 857-2137-8291
                </a>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600 w-6 h-6" />
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@3rprinting.com"
                  className="text-blue-600 font-semibold"
                >
                  info@3rprinting.com
                </a>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-purple-600 w-6 h-6" />
              <p>
                <strong>Jam Operasional:</strong> Senin - Sabtu, 08.00 - 20.00
                WIB
              </p>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Lokasi 3R Photocopy & Stempel Flash"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1805773717574!2d107.58566197468907!3d-6.868953493129724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7a80dce0d4f%3A0xac0e8382b0d2b29!2s3R%20Photocopy%20%26%20Stempel%20Flash!5e0!3m2!1sid!2sid!4v1757044419716!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* CTA besar */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/6285721378291"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full md:w-auto bg-green-600 text-white text-lg font-semibold px-10 py-4 rounded-2xl shadow-lg hover:bg-green-700 transition"
          >
            📩 Pesan Sekarang via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
