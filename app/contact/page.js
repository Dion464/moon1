"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <div className="pt-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl font-extralight text-white mb-6 tracking-wider"
            >
              Na Kontaktoni
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-[1px] bg-[#D4AF37] mx-auto mb-8"
            />
          </div>

          {/* Contact Content */}
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              {/* Location */}
              <motion.div
                whileHover={{ x: 10 }}
                className="group"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center 
                              group-hover:bg-[#D4AF37] transition-colors duration-300">
                    <span className="text-[#D4AF37] group-hover:text-white transition-colors duration-300">
                      📍
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[#D4AF37] text-xl mb-2">Lokacioni</h3>
                    <p className="text-gray-300 text-lg">
                      Imzot Nike Prela<br />
                      Ulpiana, Prishtinë<br />
                      Kosovë
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ x: 10 }}
                className="group"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center 
                              group-hover:bg-[#D4AF37] transition-colors duration-300">
                    <span className="text-[#D4AF37] group-hover:text-white transition-colors duration-300">
                      📞
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[#D4AF37] text-xl mb-2">Telefoni</h3>
                    <p className="text-gray-300 text-lg">045 501 205</p>
                  </div>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                whileHover={{ x: 10 }}
                className="group"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center 
                              group-hover:bg-[#D4AF37] transition-colors duration-300">
                    <span className="text-[#D4AF37] group-hover:text-white transition-colors duration-300">
                      ⏰
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[#D4AF37] text-xl mb-2">Orari</h3>
                    <p className="text-gray-300 text-lg">
                      E Hënë - E Diel<br />
                      8:00 - 23:00
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                whileHover={{ x: 10 }}
                className="group"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center 
                              group-hover:bg-[#D4AF37] transition-colors duration-300">
                    <span className="text-[#D4AF37] group-hover:text-white transition-colors duration-300">
                      🌐
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[#D4AF37] text-xl mb-2">Na Ndiqni</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300">
                        Instagram
                      </a>
                      <a href="#" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300">
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-2xl overflow-hidden backdrop-blur-lg bg-white/5 border border-[#D4AF37]/20"
            >
              <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-br from-[#D4AF37]/50 via-[#D4AF37]/10 to-transparent">
                <div className="absolute inset-[2px] rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.3776121494396!2d21.156215115517583!3d42.65126007916792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549f8a6a4b35d3%3A0x8ab885f455be589!2sMOON%20Kitchen%20Bar!5e0!3m2!1sen!2s!4v1666666666666!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
