import React from "react";

const AppointmentSection = () => {
  return (
    <section className="relative w-full flex justify-center items-center mb-15">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center w-2/3 left-79 "
        style={{ backgroundImage: "url('./appoiintment.png')"}}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col  items-start justify-center text-left px-6 py-10 md:px-16 md:py-24 w-full max-w-4xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl -mx-45 font-bold text-gray-900">
          Discover New Horizons
        </h2>

        {/* Description */}
        <p className="mt-4 w-2/3 -mx-45  text-lg md:text-xl text-gray-700">
          Explore amazing opportunities and resources designed to elevate your
          journey. Whether you're looking for inspiration or guidance, we have
          something for everyone.
        </p>

        {/* Button */}
        <button className="mt-6 px-8 py-3 -mx-45 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default AppointmentSection;
