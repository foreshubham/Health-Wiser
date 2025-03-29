'use client'
import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { motion } from "motion/react";

export default function Button() {
  return (
    <div className="flex gap-10">
      <a href="/scan"><motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log("hover started!")}
        className="text-lg border px-8 py-2 rounded-full bg-black text-white/90"
      >
        Try now
      </motion.button></a>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log("hover started!")}
        className="text-lg border-b px-8 py-2 flex items-center justify-center gap-3"
      >
        All services <IoMdArrowForward className="-rotate-45 text-lg" />
      </motion.button>
    </div>
  );
}
