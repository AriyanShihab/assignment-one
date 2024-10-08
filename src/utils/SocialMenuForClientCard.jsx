import React from "react";
import FacebookSvg from "../svg/FacebookSvg";
import InstaSvg from "../svg/InstaSvg";
import TwitterSvg from "../svg/TwitterSvg";

export default function SocialMenuForClientCard() {
  return (
    <>
      {" "}
      <a className="text-gray-400 hover:text-primary">
        {<FacebookSvg></FacebookSvg>}
      </a>
      <a className="text-gray-400 hover:text-primary">
        {<TwitterSvg></TwitterSvg>}
      </a>
      <a className="text-gray-400 hover:text-primary">
        {<InstaSvg></InstaSvg>}
      </a>
    </>
  );
}
