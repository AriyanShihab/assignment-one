import React from "react";

export default function VerticalMenu({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li>
          <a
            href="javascript:void(0)"
            className="mb-3 inline-block text-base text-gray-200 hover:text-blue-600"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}
