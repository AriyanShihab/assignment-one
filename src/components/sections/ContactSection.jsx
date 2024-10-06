import React from "react";
import EnvelopIconSvg from "../../svg/EnvelopIconSvg";
import LocationIconSvg from "../../svg/LocationIconSvg";
import Form from "../../utils/Form";
import ContactCard from "../cards/ContactCard";

export default function ContactSection() {
  return (
    <section className="relative py-20 md:py-[120px]">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
      <div className="container px-4 mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-12 lg:mb-[150px]">
                <span className="mb-6 block text-base font-medium text-dark dark:text-white">
                  CONTACT US
                </span>
                <h2 className="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
                  Let's talk about your problem.
                </h2>
              </div>
              <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                {/* conatct card for location icon */}
                <ContactCard
                  svgType={<LocationIconSvg></LocationIconSvg>}
                  title={"Our Location"}
                  info1={"401 Broadway, 24th Floor, Orchard Cloud View, London"}
                ></ContactCard>
                {/* conatct card for envelop icon */}
                <ContactCard
                  svgType={<EnvelopIconSvg></EnvelopIconSvg>}
                  title={"How Can We Help?"}
                  info1={"info@yourdomain.com"}
                  info2={"contact@yourdomain.com"}
                ></ContactCard>
              </div>
            </div>
          </div>
          {/* form component */}
          <Form></Form>
        </div>
      </div>
    </section>
  );
}
