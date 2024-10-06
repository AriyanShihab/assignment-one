import React from "react";
import HeroSvgBottom from "../../svg/HeroSvgBottom";
import HeroSvgTop from "../../svg/HeroSvgTop";
import Navber from "./Navber";

export default function HeroSection() {
  return (
    <div
      
      className="relative overflow-hidden bg-blue-600 pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
        <Navber></Navber>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div className="hero-content  mx-auto max-w-[780px] text-center">
              <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                We'll build house of your dream
              </h1>
              <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                We have 9000 more review and our customers trust on out property
                and quality products.
              </p>
              <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                <li>
                  <a
                    href="https://links.tailgrids.com/play-download"
                    className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-gray-500"
                  >
                    Book Now
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/tailgrids/play-tailwind"
                    target="_blank"
                    className="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-gray-800"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4">
            <div className=" relative z-10 mx-auto max-w-[845px]">
              <div className="mt-16">
                <img
                  src="./src/assets/hero-image.png"
                  alt="hero"
                  className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                />
              </div>

              <HeroSvgBottom></HeroSvgBottom>
              <HeroSvgTop></HeroSvgTop>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
