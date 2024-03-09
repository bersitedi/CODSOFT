import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineDown,
  AiOutlineRight,
} from "react-icons/ai";
import logo from "../assets/tech-blog.png";

const Header = ({ navItemsList }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flex justify-between items-center py-4 px-8 md:px-20 relative">
      <div className="hidden sm:flex sm:items-center sm:justify-between sm:w-full">
        <div className="flex flex-1 items-center justify-between">
          <div>
            <img src={logo} alt="logo" className="w-36 h-36" />
          </div>
          <div className="ml-4 flex gap-3 items-center">
            {navItemsList.map((item, index) => (
              <div key={index}>
                {item.type === "link" && (
                  <div
                    className={`text-gray-800  hover:text-blue-600 ${
                      item.name === "Pages" ? "relative" : ""
                    }`}
                  >
                    <a href="#">{item.name}</a>
                  </div>
                )}
                {item.type === "dropdown" && (
                  <div
                    className={`text-gray-800 hover:text-blue-600 relative ${
                      item.name === "Pages" ? "" : ""
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <button className=" flex gap-x-1 items-center">
                        <span>{item.name}</span>
                        <AiOutlineDown
                          className="text-gray-800 hover:text-blue-600 cursor-pointer mt-1"
                          onClick={toggleDropdown}
                        />
                      </button>
                    </div>

                    {isDropdownOpen && item.name === "Pages" && (
                      <div className="absolute top-10 right-0 bg-white  shadow-md w-40">
                        {item.items.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Sign In
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between w-full sm:hidden">
        <div className="flex flex-1 items-center justify-between">
          <img src={logo} alt="logo" className="w-36 h-36" />
          <div className="ml-4">
            {isMenuOpen ? (
              <AiOutlineClose
                className="text-3xl cursor-pointer"
                onClick={closeMenu}
              />
            ) : (
              <AiOutlineMenu
                className="text-3xl cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-32 left-0 w-full bg-opacity-50 overflow-hidden ">
            <div className="bg-primary p-10 shadow-md">
              {navItemsList.map((item, index) => (
                <div key={index} className="mb-4 ">
                  {item.type === "link" && (
                    <a href="#" className="text-white hover:text-blue-600">
                      {item.name}
                    </a>
                  )}
                  {item.type === "dropdown" && (
                    <div className="relative text-white hover:text-blue-600">
                      <div className="flex flex-row items-center">
                        <button className=" flex gap-x-1 items-center">
                          <span>{item.name}</span>
                          <AiOutlineRight
                            className="text-white text-sm hover:text-blue-600 cursor-pointer mt-1"
                            onClick={toggleDropdown}
                          />
                        </button>
                      </div>
                      {isDropdownOpen && (
                        <div className="absolute -top-6 left-20 bg-white bg-opacity-50 rounded shadow-md w-30">
                          {item.items.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href="#"
                              className="block px-3 py-2 hover:text-white text-white hover:bg-gray-400"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
