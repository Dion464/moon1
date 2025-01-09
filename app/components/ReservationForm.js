"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="reservations" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/90" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extralight text-white mb-6 tracking-wider">
            Rezervo <span className="text-[#D4AF37]">Përvojën Tënde</span>
          </h2>
          <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-gray-400 text-lg">
            Bashkohuni me ne për një përvojë të paharrueshme
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-white/5 border border-[#D4AF37]/20 text-white px-4 py-3 
                           focus:outline-none focus:border-[#D4AF37] transition-colors duration-300
                           rounded-md backdrop-blur-sm"
                  placeholder="Emri"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              {/* Phone Input */}
              <div className="relative group">
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full bg-white/5 border border-[#D4AF37]/20 text-white px-4 py-3 
                           focus:outline-none focus:border-[#D4AF37] transition-colors duration-300
                           rounded-md backdrop-blur-sm"
                  placeholder="Telefoni"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              {/* Date Input */}
              <div className="relative group">
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full bg-white/5 border border-[#D4AF37]/20 text-white px-4 py-3 
                           focus:outline-none focus:border-[#D4AF37] transition-colors duration-300
                           rounded-md backdrop-blur-sm [color-scheme:dark]"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>

              {/* Time Input */}
              <div className="relative group">
                <input
                  type="time"
                  name="time"
                  required
                  className="w-full bg-white/5 border border-[#D4AF37]/20 text-white px-4 py-3 
                           focus:outline-none focus:border-[#D4AF37] transition-colors duration-300
                           rounded-md backdrop-blur-sm [color-scheme:dark]"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                />
              </div>

              {/* Guests Input */}
              <div className="relative group sm:col-span-2">
                <input
                  type="number"
                  name="guests"
                  required
                  min="1"
                  max="20"
                  className="w-full bg-white/5 border border-[#D4AF37]/20 text-white px-4 py-3 
                           focus:outline-none focus:border-[#D4AF37] transition-colors duration-300
                           rounded-md backdrop-blur-sm"
                  placeholder="Numri i personave"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#D4AF37] text-black py-4 px-8 rounded-md 
                       hover:bg-[#B59230] transition-colors duration-300
                       text-lg tracking-wider font-light mt-6"
            >
              Rezervo Tani
            </motion.button>
          </form>

          {/* Additional Info */}
          <p className="text-gray-400 text-sm text-center mt-8">
            Për rezervime të menjëhershme ju lutemi na kontaktoni në numrin:
            <a href="tel:045501205" className="text-[#D4AF37] ml-2 hover:underline">
              045 501 205
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
