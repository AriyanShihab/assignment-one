import React from "react";
import FAQSvg from "../../svg/FAQSvg";

export default function FaqCard({faq}) {
  const {question, answer } = faq;
  
  return (
    <div className="mb-12 flex lg:mb-[70px] md:w-1/2">
      <FAQSvg></FAQSvg>
      <div className="w-full">
        <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {question}
        </h3>
        <p className="text-base text-gray-700 dark:text-dark-6">{answer}</p>
      </div>
    </div>
  );
}
