import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";

export default function Navbar() {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-slate-800 to-black">
            <div className="flex justify-between items-center">
              <div className="flex justify-items-center items-center gap-2">
                {/* Wesbite Logo */}
                <img 
                className="w-8 h-8 border rounded-full ring-2 ring-amber-400 transition-transform duration-500 hover:scale-150 cursor-pointer"
                  src="/images/logo.png"
                  alt="Logo Image"/>
                {/* Search Bar */}
                <div style={{ position: "relative" }}>
                  <input
                    className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block text-black"
                    placeholder="Explore our bestsellers and new arrivals...!"
                  />
                  <FaSearch className="w-5 h-5 text-slate-700 absolute right-3 top-1/3 transform-translate-y-1/3 hidden lg:block md:block" />
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <FaBullhorn className="w-6 h-6 text-amber-500 hover:text-lime-400 cursor-pointer hidden lg:block md:block" />
                <p className="text-sm text-white hidden p-1 lg:block md:block">
                  {" "}
                  Order now and get it with
                  <span className="text-amber-400"> 50% 0ff</span>
                </p>
              
              {/* offer Icon */}
              <FaShopify className=" w-10 h-10 rounded-full hover:text-amber-400 text-lime-400 cursor-pointer p-1 relative"/>
            <img 
            className="inline-block w-8 h-8 rounded-full ring-2 transition-transform duration-500 hover:scale-150 cursor-pointer ring-amber-400"
            src="https://watermark.lovepik.com/photo/20211127/large/lovepik-fashion-girls-with-shopping-bags-picture_501157945.jpg" 
            alt="Profile Pic"/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
