import Footer from "@/components/ui/Footer";
import AimVisionMission from '@/components/ui/AIM'
import Navbar from "@/components/ui/Navbar";
import React from "react";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 pb-8 pt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Left Side: Image Gallery */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="imgWrapper relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition-transform duration-300">
                <img
                  src="https://cashflowinventory.com/blog/wp-content/uploads/2023/03/Barcode-Scanning.png"
                  alt="Image 1"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="imgWrapper relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition-transform duration-300">
                <img
                  src="https://yipfitness.com/wp-content/uploads/2021/08/fruit-yogurt-acai-bowl-1024x683.jpeg"
                  alt="Image 2"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="imgWrapper relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition-transform duration-300">
                <img
                  src="https://i.ytimg.com/vi/2iyj40Wm_20/maxresdefault.jpg"
                  alt="Image 3"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="imgWrapper relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition-transform duration-300">
                <img
                  src="https://s3.credihealth.com/3k8bh7xu5bzu1fb10e7vk1i585zx"
                  alt="Image 4"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-6">
            <h4 className="text-xl font-medium text-orange-500">Welcome To</h4>
            <h2 className="text-3xl font-semibold text-gray-800">
            Health Wiser
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              At our company, we are committed to providing accurate and
              detailed information about the products you love. Using
              cutting-edge technology, we offer an easy way for you to access
              vital product details simply by scanning the barcode. Whether
              you're interested in the ingredients, allergens, health effects,
              or classifications, our system provides you with a seamless
              experience to make informed choices. From healthy snacks to
              beverages, we aim to help you make better purchasing decisions. We
              understand that knowing what goes into your food is essential, and
              we are here to give you that transparency.
            </p>
            <a
              href="#"
              className="inline-block text-white bg-orange-500 px-6 py-3 rounded-md text-lg hover:bg-orange-600 transition-colors"
            >
              Read More...
            </a>
          </div>
        </div>
        <div className="-mt-42">
     <AimVisionMission />

        </div>
      </div>

      <Footer />
    </>
  );
}
