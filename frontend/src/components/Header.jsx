import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineDown,
  AiOutlineRight,
} from "react-icons/ai";
import logo from "../assets/tech-blog.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../store/actions/user";

const Header = ({ navItemsList }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userState = useSelector((state) => state.user);
  const [profileDrowpdown, setProfileDrowpdown] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <section className="sticky top-0 right-0 left-0 z-50">
      <header className="flex justify-between items-center -py-1 px-8 md:px-15 relative bg-white">
        <div className="hidden sm:flex sm:items-center sm:justify-between sm:w-full">
          <div className="flex flex-1 items-center justify-between sm:-mt-8 ">
            <div className="overflow-hidden w-[90px] h-[90px] sm:w-36 sm:h-36">
              <img src={logo} alt="logo" className="w-full" />
            </div>
            <div className="ml-4 flex gap-3 items-center ">
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
                      <div className="flex flex-col items-center ">
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
                              className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
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
            {userState.userInfo ? (
              <div className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
                <div className="relative group">
                  <div className="flex flex-col items-center">
                    <button
                      className="flex gap-x-1 items-center mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                      onClick={() => setProfileDrowpdown(!profileDrowpdown)}
                    >
                      <span>Account</span>
                      <MdKeyboardArrowDown />
                    </button>
                    <div
                      className={`${
                        profileDrowpdown ? "block" : "hidden"
                      } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
                    >
                      <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                        {userState?.userInfo?.admin && (
                          <button
                            onClick={() => navigate("/admin")}
                            type="button"
                            className="hover:bg-dark-hard hover:text-white px-4 py-2 text-dark-soft "
                          >
                            Admin Dashboard
                          </button>
                        )}

                        <button
                          onClick={() => navigate("/profile")}
                          type="button"
                          className="hover:bg-blue-500 hover:text-white px-4 py-2 text-dark-soft"
                        >
                          Profile Page
                        </button>
                        <button
                          onClick={logoutHandler}
                          type="button"
                          className="hover:bg-blue-500 hover:text-white px-4 py-2 text-dark-soft"
                        >
                          Logout
                        </button>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Sign in
              </button>
            )}
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
                <button
                  onClick={() => navigate("/login")}
                  className="mt-5 lg:mt-0 border-2 border-white px-6 py-2 rounded-md text-white font-semibold transition-all duration-300"
                >
                  Sign in
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </section>
  );
};

export default Header;
