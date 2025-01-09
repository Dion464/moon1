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

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[100vh] flex flex-col lg:flex-row relative">
        {/* Left Content Panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 bg-[#1A1A1A] flex items-center relative overflow-hidden px-4 sm:px-8 py-32 lg:py-0"
        >
          <div className="relative z-10 max-w-xl mx-auto lg:mx-0 lg:ml-auto lg:mr-12 xl:mr-24 text-center lg:text-left">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extralight text-white mb-6 tracking-wider">
                MOON
                <span className="block mt-2 text-[#D4AF37] text-3xl sm:text-4xl md:text-5xl">
                  Kitchen & Bar
                </span>
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-gray-300 font-light tracking-wide">
                Një përvojë unike kulinare
              </p>
              <motion.a
                href="#reservations"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-[#D4AF37] text-black px-8 py-4 text-lg tracking-wider
                         hover:bg-[#B59230] transition-colors duration-300 rounded-md"
              >
                REZERVO NJË TAVOLINË
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image Panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-screen"
        >
          <Image
            src="/IMG_2464.jpeg"
            alt="MOON Kitchen & Bar"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-8 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: "✧",
                title: "Inovacion Kulinari",
                desc: "Përjetoni gastronominë moderne",
              },
              {
                icon: "✦",
                title: "Dizajn Ambiental",
                desc: "Ambient i veçantë për darkë",
              },
              {
                icon: "❖",
                title: "Mixologji",
                desc: "Përgatitur me precizion",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 backdrop-blur-lg bg-white/5 rounded-lg border border-[#D4AF37]/20
                         hover:border-[#D4AF37]/40 transition-all duration-300"
              >
                <span className="text-4xl text-[#D4AF37] mb-6 block">{feature.icon}</span>
                <h3 className="text-2xl font-light text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-24 px-4 sm:px-8 relative overflow-hidden bg-[#0F0F0F]">
        <motion.div style={{ y }} className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extralight text-white mb-6 tracking-wider">
              Udhëtim Kulinari
            </h2>
            <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mb-8" />
            <p className="text-gray-400 text-lg">
              Përjetoni gatimet tona të veçanta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Pjatat Kryesore", desc: "Kuzhinë bashkëkohore" },
              { title: "Mëngjesi", desc: "Kënaqësi mëngjesore" },
              { title: "Përzgjedhje nga Bari", desc: "Pije të përzgjedhura" },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group p-8 backdrop-blur-lg bg-white/5 rounded-lg border border-[#D4AF37]/20
                         hover:border-[#D4AF37]/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-light text-white mb-4 group-hover:text-[#D4AF37] transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-400">{category.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Reservation Form */}
      <ReservationForm />
    </div>
  );
}
