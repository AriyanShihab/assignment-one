import React from "react";
import HeroSvgBottom from "../../svg/HeroSvgBottom";
import HeroSvgTop from "../../svg/HeroSvgTop";
import Button from "../../utils/Button";
import IntroText from "../../utils/IntroText";
import Navber from "./Navber";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]">
      <Navber></Navber>
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div className="hero-content  mx-auto max-w-[780px] text-center">
              <IntroText
                title={`We'll build house of your dream`}
                description={`We have 9000 more review and our customers trust on out property
                and quality products`}
              ></IntroText>
              <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                <li>
                  <Button
                    text={"Book Now"}
                    textColor={"text-dark"}
                    bgColor={"bg-white"}
                    hoverTextColor={"hover:text-gray-500"}
                    hoverBgColor={"hover:bg-gray-200"}
                  ></Button>
                </li>
                <li>
                  <Button
                    text={"Conatct Us"}
                    textColor={"text-white"}
                    bgColor={"bg-white/[0.12]"}
                    hoverTextColor={"hover:text-gray-800"}
                    hoverBgColor={"hover:bg-gray-100"}
                  ></Button>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4">
            <div className=" relative z-10 mx-auto max-w-[845px]">
              <div className="mt-16">
                <img
                  src="./assets/hero-image.png"
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
