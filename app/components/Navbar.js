"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Ballina", href: "/" },
    { name: "Menyja", href: "/menu" },
    { name: "Kontakti", href: "/contact" },
    { name: "Rezervo", href: "/#reservations" }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-[#D4AF37]/10"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center group"
          >
            <div className="relative">
              <span className="text-3xl font-extralight text-white tracking-[0.2em] group-hover:text-[#D4AF37] transition-colors duration-300">
                MOON
              </span>
              <span className="text-[#D4AF37] text-sm block mt-1 tracking-[0.15em] font-light opacity-90">
                KITCHEN & BAR
              </span>
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37]"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative group"
              >
                <span className="text-gray-300 group-hover:text-[#D4AF37] transition-colors duration-300 text-sm uppercase tracking-[0.15em] font-light">
                  {item.name}
                </span>
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37]"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:text-[#D4AF37] transition-colors duration-300"
          >
            {isOpen ? (
              <motion.span 
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                className="text-2xl block"
              >
                ✕
              </motion.span>
            ) : (
              <motion.span 
                initial={{ rotate: 0 }}
                animate={{ rotate: 0 }}
                className="text-2xl block"
              >
                ☰
              </motion.span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-6 pt-2 border-t border-[#D4AF37]/10"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="block py-3 text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 text-sm uppercase tracking-[0.15em] font-light"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
