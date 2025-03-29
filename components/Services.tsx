"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="flex justify-center items-center w-screen overflow-x-hidden  bg-gray-100">
      {/* Scrolling container */}
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: ["0%", "-100%"] }} // Moves the images left infinitely
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }} // Smooth infinite loop
      >
        {/* Duplicate images to create a seamless effect */}
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex gap-3">
            <img src="./infinetext.png" alt="Scrolling Text" className="" />
            <img src="./infinetext.png" alt="Scrolling Text" className="" />
            <img src="./infinetext.png" alt="Scrolling Text" className="" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
