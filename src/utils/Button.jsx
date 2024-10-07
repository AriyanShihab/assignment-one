import React from "react";

export default function Button({
  text,
  textColor,
  bgColor,
  hoverTextColor,
  hoverBgColor,
  px="px-7"
}) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md ${bgColor} ${px} py-[14px] text-center text-base font-medium ${textColor} shadow-1 transition duration-300 ease-in-out cursor-pointer ${hoverTextColor} ${hoverBgColor}`}
    >
      {text}
    </button>
  );
}
