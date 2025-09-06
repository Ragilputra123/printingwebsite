import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Halaman utama
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Contact from "./components/Contact";

// Blog
import BlogMain from "./components/Blog/Blogmain";
import StempelTips from "./components/Blog/Stempeltips";
import JilidBandung from "./components/Blog/Jilidbandung";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Navbar />

      <main>
        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Portfolio />
                <Testimonials />
                <FAQ />
                <About />
                <Contact />
              </>
            }
          />

          {/* Blog */}
          <Route path="/blog" element={<BlogMain />} />
          <Route path="/blog/stempel-tips" element={<StempelTips />} />
          <Route path="/blog/jilid-bandung" element={<JilidBandung />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
