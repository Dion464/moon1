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
    guests: "2",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          guests: "2",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 backdrop-blur-lg bg-white/5 border border-[#D4AF37]/20">
      <h2 className="text-3xl font-light text-white mb-6">
        Bëni një Rezervim
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              placeholder="Emri juaj"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-white/10 border border-[#D4AF37]/20 text-white px-4 py-2 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Numri i telefonit"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full bg-white/10 border border-[#D4AF37]/20 text-white px-4 py-2 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="date"
              required
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              className="w-full bg-white/10 border border-[#D4AF37]/20 text-white px-4 py-2 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
          <div>
            <input
              type="time"
              required
              value={formData.time}
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
              className="w-full bg-white/10 border border-[#D4AF37]/20 text-white px-4 py-2 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
        </div>

        <div>
          <select
            value={formData.guests}
            onChange={(e) =>
              setFormData({ ...formData, guests: e.target.value })
            }
            className="w-full bg-white/10 border border-[#D4AF37]/20 text-white px-4 py-2 focus:outline-none focus:border-[#D4AF37]"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num} Guests
              </option>
            ))}
          </select>
        </div>

        <div>
          <textarea
            placeholder="Special Requests (Optional)"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows="4"
            className="w-full bg-white/10 border border-[#D4AF37]/20 text-white px-4 py-2 focus:outline-none focus:border-[#D4AF37]"
          ></textarea>
        </div>

        <button
          className={`w-full py-3 px-6 text-white transition-colors duration-300 ${
            status === "sending"
              ? "bg-gray-500"
              : "bg-[#D4AF37] hover:bg-[#B08D2F]"
          }`}
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Rezervo Tani"}
        </button>

        {status === "success" && (
          <p className="text-green-400 text-center mt-4">
            Reservation request sent successfully!
          </p>
        )}
      </form>
    </div>
  );
}
