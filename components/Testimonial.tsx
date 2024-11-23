import React from "react";
import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center sm:px-4 sm:pt-0 sm:mt-0 overflow-auto">
      <div className="w-full sm:max-w-[1170px] text-center sm:mb-12 mb-8">
        <h2 className="text-[14px] font-[Ageo] font-bold leading-[28.5px] tracking-[0.45em] text-[#8a898e]">
          TESTIMONIALS
        </h2>
        <h1 className="text-[52px] font-[Ageo] font-bold leading-[58px] text-[#0b1b35]">
          What Clients say about us
        </h1>
      </div>

      <div className="sm:w-[970px] h-[504px] grid sm:grid-cols-2 grid-cols-1 sm:grid-rows-2 sm:mt-16">
        <div className="sm:w-[470px] w-[300px] sm:h-[237px] flex flex-row justify-around h-[270px]">
          <div>
            <Image src="/Userpic.png" alt="image" width={70} height={70} />
          </div>
          <div className="sm:w-[307px] w-[200px] h-[100px] sm:h-[179px]">
            <p className="font-[DM Sans] font-medium leading-7 text-[#0b1b35]">
              Get a fully retina ready site when you build with Startup
              Framework. Websites look sharper and more gorgeous on devices with
              retina display support
            </p>
            <h2 className="font-[DM Sans] font-bold text-[14px] leading-[26px] text-[#8a898e] sm:pt-8">
              Rayhan Curran
            </h2>
          </div>
        </div>

        <div className="sm:w-[470px] w-[300px] sm:h-[237px] flex flex-row justify-around h-[270px]">
          <div>
            <Image src="/Userpic (1).png" alt="image" width={70} height={70} />
          </div>
          <div className="sm:w-[307px] w-[200px] h-[100px] sm:h-[179px]">
            <p className="font-[DM Sans] font-medium leading-7 text-[#0b1b35]">
              As a business targeting high net worth individuals, we were
              looking for a slick, cool and mini-malistic design for our website
            </p>
            <h2 className="font-[DM Sans] font-bold text-[14px] leading-[26px] text-[#8a898e] sm:pt-8">
              Kayley Frame
            </h2>
          </div>
        </div>

        <div className="sm:w-[470px] w-[300px] sm:h-[237px] flex flex-row justify-around h-[270px]">
          <div>
            <Image src="/Mask.png" alt="image" width={70} height={70} />
          </div>
          <div className="sm:w-[307px] w-[200px] h-[100px] sm:h-[179px]">
            <p className="font-[DM Sans] font-medium leading-7 text-[#0b1b35]">
              The most important part of the Startup Framework is the samples
            </p>
            <h2 className="font-[DM Sans] font-bold text-[14px] leading-[26px] text-[#8a898e] sm:pt-8">
              Gene Whitfield
            </h2>
          </div>
        </div>

        <div className="sm:w-[470px] w-[300px] sm:h-[237px] flex flex-row justify-around h-[270px]">
          <div>
            <Image src="/Mask (1).png" alt="image" width={70} height={70} />
          </div>
          <div className="sm:w-[307px] w-[200px] h-[100px] sm:h-[179px]">
            <p className="font-[DM Sans] font-medium leading-7 text-[#0b1b35]">
              I`ve built my website with Startup just in one day, and it was
              ready-to-go.{" "}
            </p>
            <h2 className="font-[DM Sans] font-bold text-[14px] leading-[26px] text-[#8a898e] sm:pt-8">
              Allan Kim
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
