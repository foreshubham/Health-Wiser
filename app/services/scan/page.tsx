import Navbar from "@/components/ui/Navbar";
import React from "react";

export default function page() {
  return (
    <>
      <Navbar />
      <section className="py-34 flex gap-10 justify-center items-center flex-col">
        <h1>
          By just entering the code you'll get to know what you are eating on
          the name of taste.
        </h1>

        <div className="w-96 h-97 border border-black/30 rounded flex justify-center items-center flex-col">
          <img className="w-68 h-58 rounded " src="../scan.gif" alt="" />
          <div className="">
            <h1 className="text-2xl py-4 text-center font-bold">Smart Scan</h1>
            <p className="text-center text-black/60">
              Get to know all about what's going with your every spoon.
            </p>
          </div>
        </div>
        <div className="w-96 h-97 border border-black/30 rounded flex justify-center items-center flex-col">
          <img className="w-68 h-58 rounded " src="../unnamed.png" alt="" />
          <h1 className="text-2xl py-4 text-center font-bold">
            Enter Manually
          </h1>
          <p className="text-center text-black/60">
            Get to know all about what's going with your every spoon.
          </p>
        </div>
      </section>
    </>
  );
}
