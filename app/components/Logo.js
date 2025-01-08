"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative flex items-center space-x-2"
      >
        <div className="flex flex-col items-center">
          <span className="text-2xl font-light tracking-widest text-white">
            MOON
          </span>
          <div className="flex items-center space-x-2">
            <span className="h-[1px] w-4 bg-[#D4AF37]" />
            <span className="text-sm tracking-wider text-[#D4AF37] uppercase">
              Kitchen & Bar
            </span>
            <span className="h-[1px] w-4 bg-[#D4AF37]" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
