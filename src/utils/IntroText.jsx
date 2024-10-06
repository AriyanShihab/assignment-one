import React from "react";

export default function IntroText({ title, description }) {
  return (
    <>
      <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
        {title}
      </h1>
      <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
        {description}
      </p>
    </>
  );
}
