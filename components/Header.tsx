import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="sm:w-full w-screen sm:max-w-[1170px] sm:h-[49px] sm:grid sm:grid-cols-3 gap-0 sm:mx-auto relative top-10 sm:items-center">
      <div className="sm:w-[240px] sm:h-full pb-4">
        <Image src="/Logo.png" alt="logo" width={240} height={49} />
      </div>

      <div className="flex items-center sm:justify-between sm:gap-2 gap-5 text-[#000000]">
        <a href="#" className="font-bold text-[18px] font-[Ageo]">Home</a>
        <a href="#" className="font-medium text-[18px] font-[Ageo]">About Us</a>
        <a href="#" className="font-medium text-[18px] font-[Ageo]">Our App</a>
        <a href="#" className="font-medium text-[18px] font-[Ageo]">Contacts</a>
      </div>

      <div className="flex items-center sm:justify-end justify-start pt-4 gap-4">
        <a href="#" className="text-[18px] font-medium font-[Ageo]">Log in</a>
        <a
          href="#"
          className="sm:w-[119px] sm:h-[49px] w-[100px] h-[40px] rounded-[10px] font-[Ageo] bg-[#ff6600] text-white text-[18px] font-medium text-center pt-2 pb-2"
        >
          Sign up
        </a>
      </div>
    </div>
  );
}
