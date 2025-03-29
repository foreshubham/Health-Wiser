"use client";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
// import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
export default function Contact() {
  const [result, setResult] = useState("");
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "67f50d81-112c-42f8-aa72-5b776feab394");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <Navbar />

      {/* Background Images Start */}

      <img
        className="-z-1 absolute w-1/9 lg:w-1/12 top-50 right-10 lg:top-50
         rotate-20 opacity-70"
        src="./bar code.png"
        alt=""
      />
      <img
        className="-z-1 absolute w-1/9 lg:w-1/12 top-85 left-5 lg:top-100
         lg:left-10 rotate-20 opacity-70"
        src="./sthethoscope.png"
        alt=""
      />
      <img
        className="-z-1 absolute w-1/9 lg:w-1/12 top-30 lg:top-120 right-70
         -rotate-20 opacity-70"
        src="./food.png"
        alt=""
      />
      <img
        className="-z-1 absolute w-1/9 lg:w-1/12 top-75 left-75 lg:top-30
         lg:left-90 -rotate-10 opacity-70"
        src="./scanner.png"
        alt=""
      />

      {/* Background Images End */}

      <div
        id="contact"
        className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('footer-bg-color.png)] 
        bg-no-repeat pt-38 bg-center bg-[length:90%_auto]"
      >
        <h4 className="text-center mb-2 text-lg font-Ovo">Contact with us</h4>
        <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
        <p className="text-center mx-auto mt-5 mb-12 font-Ovo max-w-3xl ">
          We'd love to hear from you! If you have any questions, comments, or
          feedback, please use this form below.
        </p>

        <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
          <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="flex-1 p-3 outline-none border-[0.5px] 
            border-gray-400 rounded-md bg-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400
            rounded-md bg-white"
            />
          </div>
          <textarea
            className="w-full flex-1 p-3 outline-none border-[0.5px] border-gray-400
            rounded-md bg-white"
            name="message"
            rows="6"
            placeholder="Enter your message"
            id=""
          ></textarea>
          <button
            className="py-3 px-8 w-max flex items-center justify-between gap-2
        bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:text-white dark:border dark:hover:bg-purple-900 dark:hover:shadow-white"
            type="submit"
          >
            Submit now <FaArrowRight className="-rotate-45 " />
          </button>

          <p className="mt-4">{result}</p>
        </form>
      </div>
      <Footer />
    </>
  );
}
