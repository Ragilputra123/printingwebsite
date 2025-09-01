import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../Assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Layanan", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Tentang", href: "#about" },
    { label: "Kontak", href: "#contact" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 shadow-md py-1"
          : "bg-white/80 backdrop-blur-md py-3"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 transition-all duration-300">
        {/* LOGO */}
        <div className="flex-shrink-0 transition-all duration-300">
          <img
            src={logo}
            alt="Logo"
            className={`transition-all duration-300 ${
              isScrolled ? "h-12 md:h-14" : "h-16 md:h-20"
            }`}
          />
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navItems.map((item) => (
            <li key={item.href} className="relative group">
              <a
                href={item.href}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300"
              >
                {item.label}
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Tombol Mobile */}
        <button
          className="md:hidden text-indigo-700 transition-transform hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-6 animate-slideDown">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-indigo-600 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
