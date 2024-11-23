import React from "react";
import Image from "next/image";

export default function Explore() {
  return (
    <div className="w-full min-h-screen flex sm:flex-row flex-col justify-evenly px-4 mt-40">
      <div className="w-[323px] sm:h-[223px] h-[300px] text-left relative mb-8 top-2">
        <h1 className="font-[DM Sans] sm:text-[22px] text-[30px] font-medium sm:leading-[32px] text-[#1e0e62] pb-10">
          Many Blocks and Components
        </h1>
        <p className="font-[DM Sans] text-[16px] font-normal sm:leading-[26px] text-[#15143966] pb-10">
          Startup Framework contains components and complex blocks which can
          easily be integrated into almost any design.
        </p>
        <button className="w-[132px] h-[48px] font-[DM Sans] rounded-full border-[2px] border-[#ebeaed] sm:mt-10 text-[16px] font-medium sm:leading-[22px] text-[#1e0e62]">
          Explore
        </button>
      </div>

      <div className="sm:w-[687px] w-[350px] h-[385px]">
        <Image src="/Video Player.png" alt="image" width={687} height={385} />
      </div>
    </div>
  );
}
