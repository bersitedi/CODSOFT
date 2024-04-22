import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/actions/user";
import logo from "../assets/logo.jpg";

const NavItem = ({ item }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative ${item.type === "dropdown" ? "group" : ""}`}
    >
      {item.type === "link" && (
        <a href={item.href} className="hover:text-blue-500">
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
            className="flex items-center justify-between w-full px-4 py-2 text-left"
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
              className="absolute left-0  bg-white rounded-lg shadow-lg"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              {item.items.map((subItem, index) => (
                <li key={index}>
                  <Link
                    to={`/projects?category=${subItem.category}`}
                    className="block px-4 py-2 text-sm text-gray-700
                    hover:bg-blue-500 hover:text-white"
                  >
                    {subItem.title}
                  </Link>
                </li>
              ))}
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
    { name: "Service", type: "link", href: "/services" },
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
        const response = await axios.get("/api/post-categories");
        const categories = response.data;
        const updatedNavItems = navItems.map((item) => {
          if (item.name === "Projects") {
            return {
              ...item,
              items: categories.map((category) => ({
                title: category.title,
                category: category.title, // Pass category title here
              })),
            };
          }
          return item;
        });
        setNavItems(updatedNavItems);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => !curState);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img className="w-10" src={logo} alt="logo" />
          <span className="hidden md:inline-block md:font-bold md:text-2xl">
            Spring
          </span>
        </Link>

        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-primary lg:bg-white z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center overflow-y-auto lg:overflow-y-visible`}
        >
          <ul className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
            {navItems.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          {userState.userInfo ? (
            <div className="items-center gap-y-5text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
              <div className="relative group">
                <div className="flex flex-col items-center">
                  <button
                    className="flex border-l-2 border-l-gray-500 pl-1 text-lg font-semibold hover:border-b-2 hover:text-blue-500 hover:border-blue-500 "
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
                    <ul className="bg-cta lg:bg-white text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                      {userState?.userInfo?.admin && (
                        <button
                          onClick={() => navigate("/admin")}
                          type="button"
                          className="lg:hover:bg-blue-500 lg:hover:text-white text-white hover:text-blue-500 px-4 py-2  lg:text-dark-soft"
                        >
                          Admin Dashboard
                        </button>
                      )}

                      <button
                        onClick={() => navigate("/profile")}
                        type="button"
                        className="lg:hover:bg-blue-500 lg:hover:text-white text-white hover:text-blue-500 px-4 py-2 lg:text-dark-soft"
                      >
                        Profile Page
                      </button>
                      <button
                        onClick={logoutHandler}
                        type="button"
                        className="lg:hover:bg-blue-500 lg:hover:text-white text-white hover:text-blue-500 px-4 py-2 lg:text-dark-soft"
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
              className="border-l-2 border-l-gray-500 pl-1 text-lg font-semibold hover:border-b-2 hover:text-blue-500 hover:border-blue-500 "
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
