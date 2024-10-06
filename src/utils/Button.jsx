import React from "react";

export default function Button({
  text,
  textColor,
  bgColor,
  hoverTextColor,
  hoverBgColor,
}) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-md ${bgColor} px-7 py-[14px] text-center text-base font-medium ${textColor} shadow-1 transition duration-300 ease-in-out hover:${hoverBgColor} hover:${hoverTextColor}`}
    >
      {text}
    </a>
  );
}
