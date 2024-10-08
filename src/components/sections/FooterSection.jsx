import React from "react";
import SocialMenu from "../../utils/SocialMenu";
import VerticalMenu from "../../utils/VerticalMenu";
import BlogList from "../cards/BlogList";

export default function FooterSection() {
  const featuresMenuItems = [
    { id: "item-1", label: "How it works" },
    { id: "item-2", label: "Privacy policy" },
    { id: "item-3", label: "Terms of Service" },
    { id: "item-4", label: "Refund policy" },
  ];
  const aboutUsMenuItem = [
    { id: "item-1", label: "Home" },
    { id: "item-2", label: "Features" },
    { id: "item-3", label: "About" },
  ];
  const blogs = [
    {
      id: 1,
      image: "./assets/blog-footer-01.jpg",
      title: " I think really important to design with...",
    },
    {
      id: 2,
      image: "./assets/blog-footer-02.jpg",
      title: " Recognizing the need is the primary...",
    },
  ];
  return (
    <footer className=" relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row ">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <a className="mb-6 inline-block  max-h-[100px]">
                <img
                  src="./assets/logo.svg"
                  alt="logo"
                  className="max-w-full"
                />
              </a>
              <p className="mb-8 lg:max-w-[270px] text-base text-gray-300">
                We create digital experiences for brands and companies by using
                technology.
              </p>
              <div className="-mx-3 flex items-center">
                <SocialMenu></SocialMenu>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                About Us
              </h4>

              <VerticalMenu items={aboutUsMenuItem}></VerticalMenu>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                Features
              </h4>
              <VerticalMenu items={featuresMenuItems}></VerticalMenu>
            </div>
          </div>
          <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                Latest blog
              </h4>
              <div className="flex flex-col gap-8">
                {blogs.map((blog) => (
                  <BlogList key={blog.id} blog={blog}></BlogList>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
