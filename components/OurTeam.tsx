import React from "react";
import Image from "next/image";

export default function OurTeam() {
  return (
    <div className="sm:w-full w-screen min-h-screen flex flex-col items-center sm:px-4 sm:pt-0 sm:mt-0">
      <div className="w-full max-w-[1170px] text-center mb-12">
        <h2 className="text-[14px] font-[Ageo] font-bold leading-[28.5px] tracking-[0.45em] text-[#8a898e]">
          OUR TEAM
        </h2>
        <h1 className="text-[52px] font-[Ageo] font-bold leading-[58px] text-[#0b1b35]">
          Meet The Team
        </h1>
      </div>

      <div className="sm:w-[1170px] sm:h-[370px] h-[400px] gap-6 flex sm:flex-row flex-col justify-between overflow-auto mb-20">
        <div className="sm:w-[370px] w-[300px] h-[370px] gap-2 rounded-md border-[2px] border-[#ebeae3] flex flex-col justify-between items-center">
          <Image
            src="/girlimage.png"
            alt="image"
            width={120}
            height={120}
            className="mt-10"
          />
          <h1 className="font-[DM Sans] text-[22px] leading-8 text-center text-[#1e0e62]">
            Vanessa Laird
          </h1>
          <h2 className="font-[DM Sans] font-bold text-[14px] leading-[26px] text-center text-[#15143966]">
            UI Designer
          </h2>

          <div className="sm:w-[367px] w-[300px] h-[60px] border-t-2 border-[#ebeae3] mt-0 flex justify-between items-center px-4">
            <Image
              src="/fa-twitter.png"
              alt="image"
              width={22}
              height={38}
              className="text-[22px] leading-[38px] ml-9"
            />

            <div className="border-l-2 border-[#ebeae3] h-full"></div>
            <Image
              src="/fa-facebook.png"
              alt="image"
              width={19}
              height={38}
              className="text-[22px] leading-[38px]"
            />
            <div className="border-l-2 border-[#ebeae3] h-full"></div>
            <Image
              src="/fa-dribbble.png"
              alt="image"
              width={19}
              height={38}
              className="text-[22px] leading-[38px] mr-9"
            />
          </div>
        </div>

        <div className="sm:w-[370px] w-[300px] h-[370px] gap-2 rounded-md border-[2px] border-[#ebeae3] flex flex-col justify-between items-center">
          <Image
            src="/boyimage.png"
            alt="image"
            width={120}
            height={120}
            className="mt-10"
          />
          <h1 className="font-[DM Sans] text-[22px] leading-8 text-center text-[#1e0e62]">
            Mason Campbell
          </h1>
          <h2 className="font-[DM Sans] font-bold text-[14px] leading-[26px] text-center text-[#15143966]">
            UI Designer
          </h2>

          <div className="sm:w-[367px] w-[300px] h-[60px] border-t-2 border-[#ebeae3] mt-0 flex justify-between items-center px-4">
            <Image
              src="/fa-twitter.png"
              alt="image"
              width={22}
              height={38}
              className="text-[22px] leading-[38px] ml-9"
            />

            <div className="border-l-2 border-[#ebeae3] h-full"></div>
            <Image
              src="/fa-facebook.png"
              alt="image"
              width={19}
              height={38}
              className="text-[22px] leading-[38px]"
            />
            <div className="border-l-2 border-[#ebeae3] h-full"></div>
            <Image
              src="/fa-dribbble.png"
              alt="image"
              width={19}
              height={38}
              className="text-[22px] leading-[38px] mr-9"
            />
          </div>
        </div>

        <div className="sm:w-[370px] w-[300px] h-[370px] gap-2 rounded-md border-[2px] border-[#ebeae3] flex flex-col justify-between items-center">
          <Image
            src="/girlimage2.png"
            alt="image"
            width={120}
            height={120}
            className="mt-10"
          />
          <h1 className="font-[DM Sans] text-[22px] leading-8 text-center text-[#1e0e62]">
            Irea Evans
          </h1>
          <h2 className="font-[DM Sans] font-bold text-[14px] leading-[26px] text-center text-[#15143966]">
            Client Manager
          </h2>

          <div className="sm:w-[367px] w-[300px] h-[60px] border-t-2 border-[#ebeae3] mt-0 flex justify-between items-center px-4">
            <Image
              src="/fa-twitter.png"
              alt="image"
              width={22}
              height={38}
              className="text-[22px] leading-[38px] ml-9"
            />

            <div className="border-l-2 border-[#ebeae3] h-full"></div>
            <Image
              src="/fa-facebook.png"
              alt="image"
              width={19}
              height={38}
              className="text-[22px] leading-[38px]"
            />
            <div className="border-l-2 border-[#ebeae3] h-full"></div>
            <Image
              src="/fa-dribbble.png"
              alt="image"
              width={19}
              height={38}
              className="text-[22px] leading-[38px] mr-9"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
