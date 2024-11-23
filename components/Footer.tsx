import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="sm:w-full sm:max-w-[1170px] w-screen mx-auto relative top-10 px-4">
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-0 sm:items-center items-start">
        <div className="flex justify-start">
          <Image src="/Logo.png" alt="logo" width={111} height={23} />
        </div>

        <div className="flex items-center justify-center w-[369px] text-center font-[DM Sans] font-normal text-[16px] leading-[26px] text-[#1e0e62]">
          © 2020 Epixelab. All rights reserved.
        </div>

        <div className="flex sm:items-center sm:justify-center justify-start items-start sm:gap-4 gap-2 sm:w-[455px] text-[#1e0e62]">
          <a
            href="#"
            className="font-normal font-[DM Sans] leading-[26px] text-[16px]"
          >
            Portfolio
          </a>
          <a
            href="#"
            className="font-normal font-[DM Sans] leading-[26px] text-[16px]"
          >
            How it Works
          </a>
          <a
            href="#"
            className="font-normal font-[DM Sans] leading-[26px] text-[16px]"
          >
            Pricing
          </a>
          <a
            href="#"
            className="font-normal font-[DM Sans] leading-[26px] text-[16px]"
          >
            About
          </a>
          <a
            href="#"
            className="font-normal font-[DM Sans] leading-[26px] text-[16px]"
          >
            Login
          </a>
        </div>
      </div>

      <div className="w-full border-t-[3px] border-[#ebeaed] opacity-50 my-10"></div>

      <div className="w-full text-left font-[DM Sans] font-normal text-[16px] leading-[26px] text-[#15143966]">
        Startup Framework contains components and complex blocks which can
        easily be integrated into almost any design.
      </div>
    </div>
  );
}
