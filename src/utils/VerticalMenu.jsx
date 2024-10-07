import React from "react";
import getUniqueID from "./getRandomId";

export default function VerticalMenu({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={getUniqueID(item, index)}>
          <a
            
            className="mb-3 inline-block text-base text-gray-200 hover:text-blue-600"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}
