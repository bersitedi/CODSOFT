import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/actions/user";
import logo2 from "../assets/logo.jpg";
import { getAllCategories } from "../services/index/postCategories";
import { getAllNewsCategories } from "../services/index/newsCategories";

const NavItem = ({ item }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleItemClick = (category) => {
    if (item.name === "Projects") {
      navigate(`/projects?category=${category}`);
    } else if (item.name === "Media") {
      navigate(`/media?category=${category}`);
    }
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative ${item.type === "dropdown" ? "group" : ""}`}
    >
      {item.type === "link" && (
        <a
          href={item.href}
          className={`py-2 px-2 text-white text-xl font-medium hover:border-b-2 hover:text-blue-500 hover:border-blue-500 ${
            location.pathname === item.href
              ? "text-blue-500 dark:text-blue-500"
              : ""
          }`}
        >
          {item.name}
        </a>
      )}
      {item.type === "dropdown" && (
        <div
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <button
            onClick={toggleDropdown}
            className="flex items-center text-white justify-between w-full px-2 py-2 font-medium text-xl hover:border-b-2 hover:text-blue-500 hover:border-blue-500"
          >
            {item.name}
            {isDropdownOpen ? (
              <MdKeyboardArrowDown className="w-5 h-5" />
            ) : (
              <MdKeyboardArrowUp className="w-5 h-5" />
            )}
          </button>
          {isDropdownOpen && (
            <ul
              className="transition-all bg-[#1C3B49] duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <div className="relative group">
                <div className="mt-0 flex flex-col p-4 items-start">
                  {item.items.map((subItem, index) => (
                    <li key={index} className="w-full">
                      <button
                        onClick={() => handleItemClick(subItem.category)}
                        className="lg:hover:bg-blue-500 w-full text-start text-base lg:hover:text-white text-white hover:text-blue-500 px-4 py-2"
                      >
                        {subItem.title}
                      </button>
                    </li>
                  ))}
                </div>
              </div>
            </ul>
          )}
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const [navItems, setNavItems] = useState([
    { name: "Home", type: "link", href: "/" },
    { name: "About", type: "link", href: "/about" },
    { name: "Projects", type: "dropdown", items: [] },
    { name: "Services", type: "link", href: "/services" },
    { name: "Media", type: "dropdown", items: [] },
    { name: "Contact", type: "link", href: "/contact" },
  ]);
  const [navIsVisible, setNavIsVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [profileDropdown, setProfileDropdown] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategories();
        const categories = response.data;
        const updatedNavItems = [...navItems];
        updatedNavItems.forEach((item) => {
          if (item.name === "Projects") {
            item.items = categories.map((category) => ({
              title: category.title,
              category: category.title,
            }));
          }
        });
        setNavItems(updatedNavItems);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchNewsCategories = async () => {
      try {
        const response = await getAllNewsCategories();
        const categoriesData = response.data;
        const updatedNavItems = [...navItems];
        updatedNavItems.forEach((item) => {
          if (item.name === "Media") {
            item.items = categoriesData.map((category) => ({
              title: category.title,
              category: category.title,
            }));
          }
        });
        setNavItems(updatedNavItems);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchNewsCategories();
  }, []);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => !curState);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-[#1C3B49]">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <Link to="/" className="flex items-center space-x-3">
          <div className="flex flex-col lg:flex-row space-x-2 xl:pt-2 items-center justify-center">
            <img src={logo2} className="w-10" alt="" />
            <h1 className="hidden lg:block text-2xl font-bold text-green">
              SPRING{" "}
              <span className="hidden lg:flex text-sm">
                Architects & Engineers
              </span>
            </h1>
          </div>
        </Link>

        <div className="lg:hidden z-50" onClick={navVisibilityHandler}>
          {navIsVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all bg-cta lg:bg-[#1C3B49]
           duration-300 mt-[56px] lg:mt-0 z-50 flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-4 items-center overflow-y-auto lg:overflow-y-visible`}
        >
          <ul className="text-white lg:bg-[#1C3B49] lg:text-inherit items-center lg:items-center gap-y-5 flex flex-col lg:flex-row lg:gap-x-5 font-semibold">
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </ul>
          {userState.userInfo ? (
            <div className="items-center  gap-y-5 text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
              <div className="relative group">
                <div className="mt-5 lg:mt-0  flex flex-col items-center">
                  <button
                    className="flex border-l-2  text-white border-l-gray-500 pl-1 text-md font-semibold hover:border-b-2 hover:text-blue-500 hover:border-blue-500 "
                    onClick={() => setProfileDropdown(!profileDropdown)}
                  >
                    <span>Account</span>
                    <MdKeyboardArrowDown className="mt-2 ml-1" />
                  </button>
                  <div
                    className={`${
                      profileDropdown ? "block" : "hidden"
                    } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
                  >
                    <ul className="bg-[#1C3B49] text-start flex flex-col shadow-lg rounded-lg overflow-hidden">
                      {userState?.userInfo?.admin && (
                        <button
                          onClick={() => navigate("/admin")}
                          type="button"
                          className="lg:hover:bg-blue-500 text-start text-sm lg:hover:text-white text-white hover:text-blue-500 px-4 py-2 "
                        >
                          Admin Dashboard
                        </button>
                      )}

                      <button
                        onClick={() => navigate("/profile")}
                        type="button"
                        className="lg:hover:bg-blue-500 text-start text-sm lg:hover:text-white text-white hover:text-blue-500 px-4 py-2 "
                      >
                        Profile Page
                      </button>
                      <button
                        onClick={logoutHandler}
                        type="button"
                        className="lg:hover:bg-blue-500 text-start text-sm lg:hover:text-white text-white hover:text-blue-500 px-4 py-2 "
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
              className="border-l-2  mt-5 lg:mt-0 text-white border-l-gray-500 pl-1 text-md font-semibold hover:border-b-2 hover:text-blue-500 hover:border-blue-500 hover:scale-110"
            >
              Login
            </button>
          )}
        </div>
      </header>
    </section>
  );
};

export default Header;
