import React from "react";
// if there is no info 2, it will render nothing
export default function ContactCard({ svgType, title, info1, info2 = null }) {
  return (
    <div className="mb-8 flex w-1/2 max-w-full">
      <div className="mr-6 text-[32px] text-blue-600">{svgType}</div>
      <div>
        <h5 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
          {title}
        </h5>
        <p className="text-base text-body-color dark:text-dark-6">{info1}</p>
        <p className="mt-1 text-base text-body-color dark:text-dark-6">
          {info2}
        </p>
      </div>
    </div>
  );
}
