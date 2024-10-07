import React from "react";
import getUniqueID from "./getRandomId";

export default function HorizontalMenu({ items }) {
  return (
    <ul className="hidden lg:flex ">
      {items.map((item, index) => (
        <li key={getUniqueID(item, index)} className="group relative">
          <a
            href="blog-grids.html"
            className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}
