'use client'
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";

export default function Service() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

    return () => {
      document.body.removeChild(cursor);
    };
  }, []);

  const services = [
    {
      icon:< MdOutlineQrCodeScanner/>,
      title: "Smart Scan",
      description:
        "Scan the barcode and get the full scoop on ingredients, allergens, and hidden health risks. Knowledge is power! 🧐📲",
      color: "bg-yellow-400",
    },
    {
      icon:<MdOutlinePublishedWithChanges/>,
      title: "Better Bite",
      description:
        "raving something tasty but healthy? Discover perfect food swaps that'll keep you on track without compromising flavor. 🍓✨",
      color: "bg-blue-400",
    },
    {
      icon:< BiSolidPhoneCall/>,
      title: "No More Junkies",
      description:
        "Kick the junk to the curb! Get instant suggestions for healthier, tastier alternatives that your body will thank you for.🚫🍟",
      color: "bg-yellow-400",
    },
  ];

  return (
    <div className="relative bg-[#FFFF] py-16  rounded-2xl ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-12 ">
          <span className="text-red-500 font-medium tracking-wide text-sm md:text-base">
            ● Services we provide
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-[#111]">
            Services tailored <br /> for you <span className="italic">&</span> your loved{" "}
            <motion.span
              className="relative inline-block underline decoration-pink-500"
              initial={{ y: 0 }}
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ones
            </motion.span>
          </h2>
        </div>

        {/* Services Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="border border-black/20 bg-white p-8 rounded-2xl shadow-md text-center flex flex-col items-center transition-all duration-300 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`w-14 h-14 ${service.color} rounded-full flex items-center justify-center shadow-md`}
              >
                <span className="text-black text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mt-4 text-[#111]">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-3 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
              <motion.button
                className="mt-6 bg-black text-white py-3 px-6 rounded-full hover:bg-gray-900 transition-all duration-300 text-sm md:text-base font-medium"
                whileHover={{ scale: 1.1 }}
              >
              Try now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom Cursor */}
      {/* <style>{`
        .custom-cursor {
          width: 24px;
          height: 24px;
          border: 2px solid black;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          transition: transform 0.15s ease-out;
          z-index: 9999;
        }
      `}</style> */}
    </div>
  );
}
