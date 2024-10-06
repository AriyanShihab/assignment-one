import React from "react";

export default function SectionHeader({ title, heading, description }) {
  return (
    <div className="-mx-4 flex flex-wrap px-4 md:px-0">
      <div className="w-full px-4 ">
        <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
          <span className="mb-2 block text-lg font-semibold text-blue-600">
            {title}
          </span>
          <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            {heading}
          </h2>
          <p className="text-base text-gray-700 dark:text-dark-6">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
