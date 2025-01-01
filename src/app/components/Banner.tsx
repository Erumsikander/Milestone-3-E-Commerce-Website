import React from "react";

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-800 to-black font-sans px-6 py-12 mb-7">
      <div className="absolute inset-0 opacity-50">
        <img
          className="w-full h-full object-cover"
          src="/images/banner.jpg"
          alt="Banner Pic"
        />
      </div>
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-white sm:text-4xl font-bold mb-4">
          Explore Our Selection
        </h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl">
        " Shop Now for Exclusive Discounts on Top Products! "
        </p>
        <button className="bg-red-400 text-black text-sm font-bold py-3 px-6 rounded-full shadow-lg hover:bg-amber-600 transition duration-300">
        Exclusive Savings
        </button>
      </div>
    </div>
  );
}
