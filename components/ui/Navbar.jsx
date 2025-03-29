"use client"; // Ensures this is a client-side component
import React, { useState } from "react";
import Link from "next/link";
import { FaUtensilSpoon } from "react-icons/fa";
import { motion } from "framer-motion"; // Import framer-motion for animations

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  // Define animation variants for mobile menu and nav items
  const menuVariants = {
    hidden: { opacity: 0, x: "100%" }, // Start hidden and off to the right
    visible: {
      opacity: 1,
      x: "0",
      transition: { duration: 0.3, ease: "easeInOut" },
    }, // End fully visible and in place
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden and slightly below
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    }, // End fully visible and in place
  };

  // Section animation variant
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 }, // Section starts hidden and slightly below
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    }, // Section becomes visible and slides up
  };

  return (
    <motion.section
      className="w-screen flex justify-center"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <motion.nav
        className="w-full max-w-7xl flex justify-between items-center mt-5 py-3 px-4 sm:px-4 md:px-8 border-[0.3px] rounded-full fixed top-0 z-50 bg-white"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2, // Staggering nav item animations
            },
          },
        }}
      >
        {/* Logo */}
        <motion.div
          className="logo flex-grow sm:flex-none lg:ml-28"
          variants={navItemVariants}
        >
         <a href="/"> <h1 className="text-xl font-semibold italic cursor-pointer flex gap-1 justify-center items-center">
            {/* Smart <FaUtensilSpoon /> Spoon */} Health Wiser
          </h1></a>
        </motion.div>

        {/* Hamburger Icon */}
        <motion.div
          className="block lg:hidden absolute right-4"
          variants={navItemVariants}
        >
          <button onClick={toggleMenu} className="text-2xl">
            {isMobileMenuOpen ? "X" : "☰"}
          </button>
        </motion.div>

        {/* Links for Desktop */}
        <div className="hidden lg:flex flex-grow justify-evenly items-center">
          <motion.ul
            className="flex gap-10"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3, // Stagger items on desktop
                },
              },
            }}
          >
            <motion.li variants={navItemVariants}>
              <Link href="/">Home</Link>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <Link href="/services">Services</Link>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <Link href="/about-us">About us</Link>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <Link href="/contact-us">Contact us</Link>
            </motion.li>
          </motion.ul>
          {/* Login/Signup Button for Desktop */}
          <Link href="/registration">
            {" "}
            <motion.button
              className="border px-4 py-2 rounded-full bg-black text-white tracking-wide cursor-pointer"
              variants={navItemVariants}
            >
              Login/Signup
            </motion.button>
          </Link>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        className={`fixed inset-0 bg-gray-700 bg-opacity-70 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none "
        }`}
        onClick={closeMenu}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      ></motion.div>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-0 right-0 w-full h-full bg-white p-5 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        variants={menuVariants}
        initial="hidden"
        animate={isMobileMenuOpen ? "visible" : "hidden"}
      >
        <motion.ul className="flex flex-col items-center gap-8">
          <motion.li variants={navItemVariants}>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </motion.li>
          <motion.li variants={navItemVariants}>
            <Link href="/services" onClick={closeMenu}>
              Services
            </Link>
          </motion.li>
          <motion.li variants={navItemVariants}>
            <Link href="/about-us" onClick={closeMenu}>
              About us
            </Link>
          </motion.li>
          <motion.li variants={navItemVariants}>
            <Link href="/contact-us" onClick={closeMenu}>
              Contact us
            </Link>
          </motion.li>
          {/* Login/Signup Button for Mobile */}
          <motion.li variants={navItemVariants}>
            <button onClick={closeMenu}>Login/Signup</button>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.section>
  );
}
