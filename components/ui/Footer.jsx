import Link from "next/link";
import React from "react";
import { FaUtensilSpoon } from "react-icons/fa";


export default function Footer() {
  return (
    <div className="flex justify-center items-center bg-gray-100 pb-4">
      <div className="max-w-7xl w-full bg-black text-white rounded-2xl p-10">
        <div className="flex justify-between flex-wrap">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 flex-col">
            <span className="text-2xl font-semibold italic flex justify-center
            items-center gap-1">Health <FaUtensilSpoon className="text-red-500"/> Wiser</span>
            <p className="font-light">Tailored to take care of what's on your plate.</p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-3 gap-8 text-gray-300 text-sm">
            <div className="space-y-2">
              <p className="font-bold text-lg">Site Map</p>
              <p>Home</p>
              <p>Services</p>
              <p>About us</p>
              <p>Contact us</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-lg">Useful Links</p>
              <p>Scan Now</p>
              <p>Find Alternatives</p>
              {/* <p>Blog</p> */}
            </div>
            <div className="space-y-2">
              <p className="font-bold text-lg">Follow me:</p>
              <p><Link href='https://www.linkedin.com/in/sshubhamofficial/' >Linkedin</Link></p>
              <p><Link href='https://github.com/foreshubham' >GitHub</Link></p>
              {/* <p>Blog 2</p> */}
              {/* <p>Blog 3</p> */}
              {/* <p>Licenses</p> */}
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-3 text-gray-300 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-pink-400 text-lg">📍</span>
              <p>Delhi-110093, Harsh Vihar</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-pink-400 text-lg">📞</span>
              <p>1800 123 4567</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-pink-400 text-lg">📧</span>
              <p>info@healthwiser.com</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-400 text-xs mt-8">
          © 2025 smart-spoon. All rights reserved.
        </div>
      </div>
    </div>
  );
}
