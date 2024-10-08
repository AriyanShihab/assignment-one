import React from "react";


export default function VerticalMenu({ items }) {
  
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} >
          <a
            
            className="mb-3 inline-block text-base text-gray-200 hover:text-blue-600"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
