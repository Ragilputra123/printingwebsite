import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

function BlogMain() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [sortBy, setSortBy] = useState("Terbaru");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const posts = [
    {
      title: "Tips Membuat Stempel Berkualitas",
      slug: "stempel-tips",
      excerpt:
        "Panduan praktis memilih dan membuat stempel agar hasil lebih rapi dan awet.",
      category: "Percetakan",
      date: "2025-09-01",
      views: 150,
      image: "https://via.placeholder.com/400x200?text=Stempel",
    },
    {
      title: "Jilid Murah & Rapi di Bandung",
      slug: "jilid-bandung",
      excerpt:
        "Tempat jilid terbaik di Bandung dengan hasil rapi, cepat, dan harga terjangkau.",
      category: "Percetakan",
      date: "2025-09-03",
      views: 200,
      image: "https://via.placeholder.com/400x200?text=Jilid",
    },

    // Tambahkan post lain di sini
  ];

  const categories = ["Semua", "Percetakan", "Desain"];

  // Filter dan sorting posts
  const filteredPosts = useMemo(() => {
    let temp = posts.filter(
      (post) =>
        (selectedCategory === "Semua" || post.category === selectedCategory) &&
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    if (sortBy === "Terbaru") {
      temp.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === "Terpopuler") {
      temp.sort((a, b) => b.views - a.views);
    }
    return temp;
  }, [posts, search, selectedCategory, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
      {/* Sidebar */}
      <aside className="md:col-span-1">
        <div className="mb-6">
          <input
            type="text"
            aria-label="Cari artikel"
            placeholder="Cari artikel..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-indigo-200"
          />
        </div>
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Kategori</h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1); // reset page
                  }}
                  className={`w-full text-left px-3 py-1 rounded-lg transition cursor-pointer ${
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
        <div>
          <h2 className="font-semibold mb-2">Sortir</h2>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-indigo-200"
          >
            <option value="Terbaru">Terbaru</option>
            <option value="Terpopuler">Terpopuler</option>
          </select>
        </div>
      </aside>

      {/* Konten Blog */}
      <section className="md:col-span-3">
        <h1 className="text-3xl font-bold mb-6">Blog Kami</h1>

        {paginatedPosts.length === 0 ? (
          <p className="text-gray-500">Artikel tidak ditemukan.</p>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {paginatedPosts.map((post) => (
              <div
                key={post.slug}
                className="rounded-2xl shadow-md bg-white overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Baca selengkapnya →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 rounded-lg border transition ${
                  currentPage === i + 1
                    ? "bg-indigo-600 text-white"
                    : "hover:bg-indigo-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default BlogMain;
