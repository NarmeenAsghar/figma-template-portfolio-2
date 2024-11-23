import React from "react";
import Image from "next/image";

export default function Subscribe() {
  return (
    <div className="sm:w-full w-screen min-h-screen flex flex-col items-center px-4">
      <div className="w-full max-w-[1170px] text-center mb-12">
        <h2 className="text-[14px] font-[Ageo] font-bold leading-[28.5px] tracking-[0.45em] text-[#8a898e]">
          OUR TEAM
        </h2>
        <h1 className="text-[52px] font-[Ageo] font-bold leading-[58px] text-[#0b1b35]">
          Subscribe Our Newsletter
        </h1>
      </div>

      <div className="sm:w-full sm:max-w-[1170px] flex sm:flex-row flex-col justify-center items-center pt-16">
        <div className="sm:w-[421px] w=[300px] h-full">
          <Image src="/Frame (1).png" alt="image" width={421} height={367} />
        </div>

        <div className="ml-10 flex flex-col sm:items-start items-center">
          <p className="sm:font-[Roboto] sm:text-[#000000] sm:text-[18px] sm:font-normal sm:leading-[28.5px] sm:text-left sm:w-[684px] sm:h-[78px] sm:mb-6 hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <button className="sm:w-[700px] w-[280px] sm:h-[77px] h-[60px] rounded-[49px] p-2 border-[1px] border-gray-300 bg-[#ffffff] shadow-2xl font-[Roboto] font-normal text-[24px] leading-[28.5px] text-center mb-6">
            Your E-mail here...
          </button>
          <button className="sm:w-[700px] w-[280px] sm:h-[49px] h-[40px] rounded-[10px] font-[Ageo] bg-[#ff6600] font-medium text-[18px] text-[#ffffff] leading-[28.5px] text-center">
            Subscribe Our Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}
