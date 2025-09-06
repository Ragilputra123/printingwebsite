import React, { useState } from "react";
import { Link } from "react-router-dom";

function BlogMain() {
  const [search, setSearch] = useState("");

  const posts = [
    {
      title: "Tips Membuat Stempel Berkualitas",
      slug: "stempel-tips",
      excerpt:
        "Panduan praktis memilih dan membuat stempel agar hasil lebih rapi dan awet.",
      category: "Percetakan",
    },
    {
      title: "Jilid Murah & Rapi di Bandung",
      slug: "jilid-bandung",
      excerpt:
        "Tempat jilid terbaik di Bandung dengan hasil rapi, cepat, dan harga terjangkau.",
      category: "Percetakan",
    },
    {
      title: "Desain Kartu Nama yang Menarik",
      slug: "kartu-nama",
      excerpt:
        "Tips membuat kartu nama yang profesional agar mudah diingat klien.",
      category: "Desain",
    },
  ];

  const categories = ["Semua", "Percetakan", "Desain"];

  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredPosts = posts.filter(
    (post) =>
      (selectedCategory === "Semua" || post.category === selectedCategory) &&
      post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
      {/* Sidebar */}
      <aside className="md:col-span-1">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Cari artikel..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-indigo-200"
          />
        </div>
        <div>
          <h2 className="font-semibold mb-4">Kategori</h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-3 py-1 rounded-lg transition ${
                    selectedCategory === cat
                      ? "bg-indigo-600 text-white"
                      : "hover:bg-indigo-100"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Konten Blog */}
      <section className="md:col-span-3">
        <h1 className="text-3xl font-bold mb-6">Blog Kami</h1>
        {filteredPosts.length === 0 ? (
          <p className="text-gray-500">Artikel tidak ditemukan.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post.slug}
                className="p-6 rounded-2xl shadow-md bg-white hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Baca selengkapnya →
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default BlogMain;
