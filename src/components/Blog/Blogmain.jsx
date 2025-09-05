import React from "react";
import { Link } from "react-router-dom";

function BlogMain() {
  const articles = [
    {
      title: "Cetak Banner Murah di Bandung",
      slug: "/blog/banner-bandung",
      excerpt:
        "Temukan jasa cetak banner murah di Bandung dengan hasil berkualitas tinggi. Cocok untuk promosi usaha, event, hingga kampanye produk.",
    },
    {
      title: "Tips Membuat Stempel Flash Awet",
      slug: "/blog/stempel-tips",
      excerpt:
        "Ingin stempel flash tahan lama? Ikuti tips perawatan sederhana ini agar stempel selalu tajam dan awet digunakan.",
    },
    {
      title: "Layanan Jilid Buku di Bandung",
      slug: "/blog/jilid-bandung",
      excerpt:
        "Kami menyediakan layanan jilid buku profesional di Bandung, mulai dari hard cover, soft cover, spiral, hingga jilid lakban.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Blog Artikel 3R Printing
        </h1>

        <div className="space-y-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                <Link to={article.slug} className="hover:text-blue-600">
                  {article.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <Link
                to={article.slug}
                className="inline-block text-blue-600 font-semibold hover:underline"
              >
                Baca Selengkapnya →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogMain;
