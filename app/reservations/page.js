"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import ReservationForm from "../components/ReservationForm";

export default function Reservations() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <div className="pt-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <ReservationForm />
        </motion.div>
      </div>
    </div>
  );
}
