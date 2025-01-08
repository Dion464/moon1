"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Navbar from "./components/Navbar";
import ReservationForm from "./components/ReservationForm";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Refined futuristic color scheme
  const colors = {
    black: "#0A0A0A",
    gold: "#D4AF37",
    accent: "#1A1A1A",
    light: "#FFFFFF",
    gray: "#333333",
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* Modernized Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row relative">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(30deg, #D4AF37 1px, transparent 1px), 
                              linear-gradient(-30deg, #D4AF37 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Left Content Panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full md:w-1/2 flex items-center relative overflow-hidden backdrop-blur-sm"
        >
          <div className="relative z-10 px-8 md:px-16 py-20 w-full">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-xl"
            >
              <div className="mb-8">
                <motion.div
                  className="w-16 h-[2px] bg-[#D4AF37]"
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </div>
              <h1 className="text-6xl md:text-8xl font-extralight text-white mb-6 tracking-tight">
                MOON
                <motion.span
                  className="block mt-2 text-[#D4AF37] text-5xl md:text-6xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Kitchen & Bar
                </motion.span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-gray-300 font-light tracking-wide">
                A futuristic dining experience
              </p>
              <motion.a
                href="#reservations"
                whileHover={{ scale: 1.05, backgroundColor: "#D4AF37" }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] 
                         px-10 py-4 text-lg tracking-wider hover:text-black transition-all duration-300
                         backdrop-blur-md"
              >
                RESERVE A TABLE
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image Grid with Glass Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-0.5 p-0.5 bg-[#D4AF37]/10"
        >
          {[
            "/IMG_2462.jpeg",
            "/IMG_2464.jpeg",
            "/IMG_2465.jpeg",
            "/IMG_2467.jpeg",
          ].map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden"
              whileHover={{ scale: 1.02, zIndex: 10 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={img}
                alt="Featured Dish"
                fill
                className="object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 
                         hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
                whileHover={{ opacity: 1 }}
              >
                <span className="text-white text-lg font-light tracking-wider">
                  Discover More
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Futuristic Features Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-12"
          >
            {[
              {
                icon: "✧",
                title: "Culinary Innovation",
                desc: "Experience avant-garde gastronomy",
              },
              {
                icon: "✦",
                title: "Ambient Design",
                desc: "Immersive atmospheric dining",
              },
              {
                icon: "❖",
                title: "Mixology",
                desc: "Crafted with precision",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 backdrop-blur-lg bg-white/5 border border-[#D4AF37]/20
                         group hover:bg-[#D4AF37]/10 transition-all duration-300"
              >
                <span
                  className="text-4xl mb-6 block text-[#D4AF37] group-hover:scale-110 
                               transition-transform duration-300"
                >
                  {item.icon}
                </span>
                <h3 className="text-xl font-light mb-4 text-white tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Menu Experience Section */}
      <section className="py-32 relative overflow-hidden">
        <motion.div className="absolute inset-0 opacity-20" style={{ y }}>
          <div
            className="absolute inset-0 bg-[#D4AF37]/10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              transition={{ duration: 0.8 }}
              className="h-[1px] bg-[#D4AF37] mx-auto mb-8"
            />
            <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6 tracking-wider">
              Culinary Journey
            </h2>
            <p className="text-gray-400 text-lg tracking-wide">
              Experience our signature dishes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "/IMG_2464.jpeg",
                title: "Main Course",
                desc: "Contemporary cuisine",
              },
              {
                img: "/IMG_2465.jpeg",
                title: "Breakfast",
                desc: "Morning delights",
              },
              {
                img: "/IMG_2467.jpeg",
                title: "Bar Selection",
                desc: "Crafted beverages",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative h-[500px] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <div
                      className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full 
                                  group-hover:translate-y-0 transition-transform duration-500"
                    >
                      <h3 className="text-2xl font-light text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#D4AF37]">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservations" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-8 relative z-10"
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl font-extralight text-white mb-8 tracking-wider">
                  Reserve Your{" "}
                  <span className="text-[#D4AF37]">Experience</span>
                </h2>
                <div className="w-24 h-[1px] bg-[#D4AF37] mb-8" />
                <p className="text-gray-400 text-lg mb-12">
                  Join us for an unforgettable dining experience
                </p>
                <div className="space-y-6 text-gray-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center">
                      <span className="text-[#D4AF37]">📞</span>
                    </div>
                    <p>045 501 205</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center">
                      <span className="text-[#D4AF37]">⏰</span>
                    </div>
                    <p>Open Daily 8:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="backdrop-blur-lg bg-white/5 p-8 border border-[#D4AF37]/20"
            >
              <ReservationForm />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-8 relative z-10"
        >
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl font-extralight text-white mb-8 tracking-wider">
                  Find Us
                </h2>
                <div className="w-24 h-[1px] bg-[#D4AF37] mb-12" />
                <div className="space-y-8">
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-6 group"
                  >
                    <div
                      className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center 
                                  group-hover:bg-[#D4AF37] transition-colors duration-300"
                    >
                      <span className="text-[#D4AF37] group-hover:text-white transition-colors duration-300">
                        📍
                      </span>
                    </div>
                    <div>
                      <h3 className="text-[#D4AF37] text-lg mb-2">Location</h3>
                      <p className="text-gray-400">
                        Imzot Nike Prela
                        <br />
                        Ulpiana, Pristina
                        <br />
                        Kosovo
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-6 group"
                  >
                    <div
                      className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center 
                                  group-hover:bg-[#D4AF37] transition-colors duration-300"
                    >
                      <span className="text-[#D4AF37] group-hover:text-white transition-colors duration-300">
                        📱
                      </span>
                    </div>
                    <div>
                      <h3 className="text-[#D4AF37] text-lg mb-2">Contact</h3>
                      <p className="text-gray-400">
                        Phone: 045 501 205
                        <br />
                        Email: info@moonkitchen.com
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-6 group"
                  >
                    <div
                      className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center 
                                  group-hover:bg-[#D4AF37] transition-colors duration-300"
                    >
                      <span className="text-[#D4AF37] group-hover:text-white transition-colors duration-300">
                        ⏰
                      </span>
                    </div>
                    <div>
                      <h3 className="text-[#D4AF37] text-lg mb-2">Hours</h3>
                      <p className="text-gray-400">
                        Monday - Sunday
                        <br />
                        8:00 AM - 11:00 PM
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] backdrop-blur-lg bg-white/5 border border-[#D4AF37]/20"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.1234567890123!2d21.123456!3d42.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA3JzM0LjQiRSA0MsKwMDcnMzQuNCJO!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-[#0A0A0A]" />
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-12"
          >
            <div>
              <h3 className="text-2xl font-light text-white mb-6">
                Moon Kitchen & Bar
              </h3>
              <p className="text-gray-400">A futuristic dining experience</p>
            </div>
            <div>
              <h3 className="text-2xl font-light text-white mb-6">Contact</h3>
              <p className="text-gray-400">Phone: 045 501 205</p>
              <p className="text-gray-400">Email: info@moonkitchen.com</p>
            </div>
            <div>
              <h3 className="text-2xl font-light text-white mb-6">Follow Us</h3>
              <div className="flex gap-6">
                <motion.a
                  whileHover={{ scale: 1.1, color: "#D4AF37" }}
                  href="#"
                  className="text-gray-400 transition-colors"
                >
                  Instagram
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, color: "#D4AF37" }}
                  href="#"
                  className="text-gray-400 transition-colors"
                >
                  Facebook
                </motion.a>
              </div>
            </div>
          </motion.div>
          <div className="border-t border-[#D4AF37]/20 mt-16 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Moon Kitchen & Bar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
