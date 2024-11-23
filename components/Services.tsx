import React from "react";
import Image from "next/image";

export default function Services() {
  return (
    <div className="sm:w-full w-screen min-h-screen flex flex-col items-center justify-center px-4 pt-28">
      <div className="w-full max-w-[1170px] text-center mb-12">
        <h2 className="text-[14px] font-[Ageo] font-bold leading-[28.5px] tracking-[0.45em] text-[#8a898e]">
          SERVICE
        </h2>
        <h1 className="text-[52px] font-[Ageo] font-bold leading-[58px] text-[#0b1b35]">
          Our Vision & Our Goal
        </h1>
      </div>

      <div className="w-full max-w-[1170px] text-center flex sm:flex-row flex-col sm:gap-6 justify-center pt-8">
        <div className="sm:w-[352px] w-[375px] mt-6 h-[508px] flex flex-col gap-8 items-center justify-center rounded-[28px] p-6 shadow-2xl bg-[#ffffff]">
          <Image src="/Activity.png" alt="image" width={76.47} height={76.47} />
          <h1 className="text-[36px] font-[Ageo] font-bold leading-[28.5px] text-center text-[#000000]">
            Graphic Design
          </h1>
          <p className="text-[18px] font-[Ageo] font-normal leading-[28.5px] text-center text-[#000000]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
            mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus
            laoreet dolor nec imperdiet.
          </p>
          <button className="w-[162px] h-[49px] font-[Ageo] rounded-[10px] bg-[#ff6600] text-[18px] font-medium leading-[28.5px] text-[#ffffff] text-center">
            Learn More
          </button>
        </div>

        <div className="sm:w-[352px] w-[375px] mt-6 h-[508px] flex flex-col gap-8 items-center justify-center rounded-[28px] pt-10 p-6 shadow-2xl bg-[#ffffff]">
          <Image src="/Video.png" alt="image" width={76.47} height={57.35} />
          <h1 className="text-[36px] font-[Ageo] font-bold leading-[28.5px] text-center text-[#000000]">
            Video Editing
          </h1>
          <p className="text-[18px] font-[Ageo] font-normal leading-[28.5px] text-center text-[#000000]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
            mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus
            laoreet dolor nec imperdiet.
          </p>
          <button className="w-[162px] h-[49px] font-[Ageo] rounded-[10px] bg-[#ff6600] text-[18px] font-medium leading-[28.5px] text-[#ffffff] text-center">
            Learn More
          </button>
        </div>

        <div className="sm:w-[352px] w-[375px] mt-6 h-[508px] flex flex-col gap-8 items-center justify-center rounded-[28px] p-6 shadow-2xl bg-[#ffffff]">
          <Image src="/Chart.png" alt="image" width={76.47} height={76.47} />
          <h1 className="text-[36px] font-bold leading-[28.5px] text-center text-[#000000]">
            Digital Marketing
          </h1>
          <p className="text-[18px] font-normal leading-[28.5px] text-center text-[#000000]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
            mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus
            laoreet dolor nec imperdiet.
          </p>
          <button className="w-[162px] h-[49px] rounded-[10px] bg-[#ff6600] text-[18px] font-medium leading-[28.5px] text-[#ffffff] text-center">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
