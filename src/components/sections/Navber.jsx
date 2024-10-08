import React from "react";
import HorizontalMenu from "../../utils/HorizontalMenu";

export default function Navber() {
  const itemsForHorizontalMenu = [
    { id: "item-1", label: "Home" },
    { id: "item-2", label: "About" },
    { id: "item-3", label: "Pricing" },
    { id: "item-4", label: "Blog" },
  ];
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
                className="block whitespace-nowrap sm:inline-block flex-1 loginBtn min-w-[120px] px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
              >
                Sign In
              </a>

              <a
                href="signup.html"
                className="signUpBtn whitespace-nowrap min-w-[120px] rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-gray-800"
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
