import React from "react";
import HorizontalMenu from "../../utils/HorizontalMenu";

export default function Navber() {
  const itemsForHorizontalMenu = ["Home", "About", "Pricing", "Blog"];
  return (
    <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="flex w-full items-center justify-between px-4 py-3">
            <a
              href="index.html"
              className="navbar-logo block w-60 max-w-full px-4"
            >
              <img
                src="./assets/logo.svg"
                alt="logo"
                className="header-logo h-12"
              />
            </a>
      

            <HorizontalMenu items={itemsForHorizontalMenu}></HorizontalMenu>

            <div className="sm:flex">
              <a
                href="signin.html"
                className="flex-1 loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
              >
                Sign In
              </a>
              <a
                href="signup.html"
                className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-gray-800"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
