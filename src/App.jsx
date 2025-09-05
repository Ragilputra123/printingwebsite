import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogMain from "./components/Blog/Blogmain";
import StempelTips from "./components/Blog/Stempeltips";
import JilidBandung from "./components/Blog/Jilidbandung";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Header */}
      <header>
        <Navbar />
      </header>

      {/* Konten utama */}
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <About />
        <Contact />
        <Blog />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
