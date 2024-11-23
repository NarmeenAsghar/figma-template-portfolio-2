import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex sm:flex-row flex-col justify-evenly items-center sm:p-32 pb-0">
      <div className="sm:w-[635px] sm:h-[338px] items-start pt-10">
        <h1 className="sm:text-[70px] text-[46px] font-[Ageo] sm:font-extrabold font-bold text-[#0B1b35] sm:leading-[81px]">
          We boost growth for your startup business
        </h1>
        <p className="sm:text-[22px] text-[16px] font-[Ageo] sm:font-medium text-[#000000] sm:leading-[28.5px] sm:mt-8">
          Our goal is to be at the heart of the creativity services industry as
          a digital creator.
        </p>

        <div className="flex justify-start items-center sm:mt-14 gap-8">
          <button className="sm:w-[162px] w-[100px] h-[40px] sm:h-[49px] font-[Ageo] rounded-[10px] bg-[#ff6600] text-[18px] text-[#ffffff] font-medium sm:leading-[28.5px] text-center">
            Get Started
          </button>
          <Image src="/Learn More icon.png" alt="icon" width={50} height={60} />
          <button className=" sm:h-[29px] font-[Ageo] font-bold text-[18px] sm:leading-[28.5px] text-[#000000]">
            Learn More
          </button>
        </div>
      </div>

      <div className="relative flex sm:items-center items-start sm:justify-evenly ">
        <div className="relative sm:w-[600px] w-[300px] sm:h-[462px] z-0 top-[60px] sm:left-[34px] left-[0]">
          <Image
            src="/backgroundimage.png"
            alt="background image"
            layout="intrinsic"
            width={349}
            height={462}
            objectFit="cover"
            className="opacity-100"
          />
        </div>

        <div
          className="absolute sm:w-[229px] w-[135px] sm:h-[130px] z-10 top-[160px] sm:left-[130px] left-[0]"
          style={{ transform: "rotateX(30deg)" }}
        >
          <Image
            src="/Frame.png"
            alt="background image"
            layout="intrinsic"
            width={229}
            height={130}
            objectFit="cover"
            className="opacity-200"
          />
        </div>

        <div
          className="absolute z-20 top-[40px] sm:left-[calc(31%-45px)] left-[30px] w-[375px] sm:w-[606px] h-[618px]">
          <Image
            src="/guyimage.png"
            alt="profile picture"
            width={606}
            height={618.09}
          />
        </div>
      </div>
    </div>
  );
}
