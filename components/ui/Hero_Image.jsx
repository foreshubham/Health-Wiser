"use client"; // Ensure this is client-side only
import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

export default function Hero_Image() {
  // Define animation variants for images
  const imageVariants = {
    hidden: { opacity: 0, y: 20 }, // Images start hidden and slightly below
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }, // Images appear and move to normal position
  };

  return (
    <div className="flex justify-center items-center gap-1 lg:gap-4 max-w-screen">
      {/* Wrap the entire div in motion.div with staggered animation */}
      <motion.div
        className="flex justify-center items-center gap-1 lg:gap-4 max-w-screen"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3, // Delay between each child (image)
            },
          },
        }}
      >
        {/* First Image */}
        <motion.div
          className="rounded-2xl pl-1 pr-1"
          variants={imageVariants}
        >
          <img
            src="https://images.unsplash.com/photo-1535229398509-70179087ac75?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cat"
            className="rounded-2xl w-98 h-58 lg:w-72 lg:h-98 object-cover"
          />
        </motion.div>

        {/* Second Image */}
        <motion.div
          className="rounded-2xl"
          variants={imageVariants}
        >
          <img
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Person with dog"
            className="rounded-2xl  w-98 h-58 lg:w-1xl lg:h-98  object-cover"
          />
        </motion.div>

        {/* Third Image */}
        <motion.div
          className="rounded-2xl"
          variants={imageVariants}
        >
          <img
            src="https://images.unsplash.com/photo-1556386734-4227a180d19e?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Dog"
            className="rounded-2xl  w-98 h-58 lg:w-72 lg:h-98 object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
