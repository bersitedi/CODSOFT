import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/actions/user";
import logo2 from "../assets/springlogo.jpg";
import { getAllCategories } from "../services/index/postCategories";

const NavItem = ({ item }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

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
        <a
          href={item.href}
          className={`py-2 px-4 text-white text-md font-medium hover:border-b-2 hover:text-blue-500 hover:border-blue-500 ${
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
            className="flex items-center text-white justify-between w-full px-4 py-2 font-medium text-md hover:border-b-2 hover:text-blue-500 hover:border-blue-500"
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
              className="absolute -left-20 lg:left-0 w-80 z-50 lg:bg-[#11536A] rounded-lg shadow-lg"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <div className="flex flex-col w-full">
                {item.items.map((subItem, index) => (
                  <li key={index}>
                    <Link
                      to={`/projects?category=${subItem.category}`}
                      className="block px-4 py-2 text-sm text-white 
                    hover:bg-blue-500 hover:text-white"
                    >
                      {subItem.title}
                    </Link>
                  </li>
                ))}
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
        const updatedNavItems = navItems.map((item) => {
          if (item.name === "Projects") {
            return {
              ...item,
              items: categories.map((category) => ({
                title: category.title,
                category: category.title,
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
    <section className="sticky top-0 left-0 right-0 z-50 bg-[#11536A]">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <Link to="/" className="flex items-center space-x-3">
          <div className="flex flex-col lg:flex-row space-x-2 items-center justify-center">
            <img src={logo2} className="w-10" alt="" />
            <span className="hidden lg:block text-2xl font-bold text-green">
              SPRING <span className="text-sm">Architects & Engineers</span>
            </span>
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
          } transition-all bg-cta lg:bg-[#11536A]
           duration-300 mt-[56px] lg:mt-0 z-50 flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center overflow-y-auto lg:overflow-y-visible`}
        >
          <ul className="text-white lg:bg-[#11536A] lg:text-inherit items-start lg:items-center gap-y-5 flex flex-col lg:flex-row gap-x-5 font-semibold">
            {navItems.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          {userState.userInfo ? (
            <div className="items-center  gap-y-5text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
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
                    <ul className="bg-[#11536A] text-start flex flex-col shadow-lg rounded-lg overflow-hidden">
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
              className="lg:border-l-2 mt-4 lg:mt-0 text-white lg:text-cta lg:border-l-gray-500 lg:pl-1 text-lg font-semibold hover:border-b-2 hover:text-blue-500 hover:border-blue-500 "
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
