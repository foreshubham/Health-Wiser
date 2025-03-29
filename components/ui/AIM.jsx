"use client";
import React from "react";

const AimVisionMission = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-2">
    <div className="max-w-7xl w-full">
      <h2 className="text-center text-5xl font-extrabold text-gray-800 mb-12 tracking-wide">
        Our Core Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Aim Card */}
        <div className="relative bg-white/70 backdrop-blur-lg shadow-xl rounded-xl p-8 text-center hover:scale-105 transition transform duration-300">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-lg font-semibold px-6 py-2 rounded-full shadow-lg">
            Aim
          </div>
          <p className="text-gray-900 mt-6 text-xl font-light ">
            Empower individuals with a **smart food scanning** solution that helps them make 
            informed and healthier dietary choices.
          </p>
        </div>

        {/* Vision Card */}
        <div className="relative bg-white/70 backdrop-blur-lg shadow-xl rounded-xl p-8 text-center hover:scale-105 transition transform duration-300">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-lg font-semibold px-6 py-2 rounded-full shadow-lg">
            Vision
          </div>
          <p className="text-gray-900 mt-6 text-xl font-light ">
            Create a world where **nutritional transparency** is accessible to everyone, 
            ensuring a healthier and more informed lifestyle.
          </p>
        </div>

        {/* Mission Card */}
        <div className="relative bg-white/70 backdrop-blur-lg shadow-xl rounded-xl p-8 text-center hover:scale-105 transition transform duration-300">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-lg font-semibold px-6 py-2 rounded-full shadow-lg">
            Mission
          </div>
          <p className="text-gray-900 mt-6 text-xl font-light ">
            Develop an intelligent platform that provides **detailed ingredient insights**, 
            highlights allergens, and suggests healthier alternatives.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AimVisionMission;
