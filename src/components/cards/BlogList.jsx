import React from "react";

export default function BlogList({ blog }) {
  const { image, title } = blog;
  return (
    <a className="group flex items-center gap-[22px]">
      <div className="overflow-hidden rounded">
        <img src={image} alt="blog" />
      </div>
      <span className="max-w-[180px] text-base text-gray-300 group-hover:text-white">
        {title}
      </span>
    </a>
  );
}
