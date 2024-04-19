import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import logo from "../assets/logo.jpg";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../store/actions/user";

const navItemsInfo = [
  { name: "Home", type: "link", href: "/" },
  { name: "About", type: "link", href: "/about" },
  {
    name: "Projects",
    type: "dropdown",
    items: [
      { title: "Project1", href: "/projects" },
      { title: "Project2", href: "/projects" },
      { title: "Project3", href: "/projects" },
      { title: "Project4", href: "/projects" },
      { title: "Project5", href: "/projects" },
      { title: "Project6", href: "/projects" },
      { title: "Project7", href: "/projects" },
      { title: "Project8", href: "/projects" },
    ],
  },
  { name: "Service", type: "link", href: "/services" },
  { name: "Contact", type: "link", href: "/contact" },
];
const NavItem = ({ item }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <li className="relative group">
      {item.type === "link" ? (
        <Link
          to={item.href}
          className="px-4 py-2 transition-colors duration-300 hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
        >
          {item.name}
        </Link>
      ) : (
        <div className="relative">
          <button
            className="px-4 py-2 flex gap-x-1 items-center"
            onClick={toggleDropdown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span>{item.name}</span>
            {isDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </button>
          {isDropdownOpen && (
            <div
              className="lg:hidden lg:bg-white bg-cta transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max rounded-md"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ul className="flex flex-col text-center">
                {item.items.map((page, index) => (
                  <li key={index}>
                    <Link
                      to={page.href}
                      className="block px-3 py-2 hover:bg-gray-200 rounded-md"
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [profileDrowpdown, setProfileDrowpdown] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header className="container  mx-auto px-5 flex justify-between py-4 items-center">
        <Link to="/" className="flex items-center space-x-3 ">
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
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          {userState.userInfo ? (
            <div className="items-center gap-y-5text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
              <div className="relative group">
                <div className="flex flex-col items-center">
                  <button
                    className="flex border-l-2 border-l-gray-500 pl-1 text-lg font-semibold hover:border-b-2 hover:text-blue-500 hover:border-blue-500 "
                    onClick={() => setProfileDrowpdown(!profileDrowpdown)}
                  >
                    <span>Account</span>
                    <MdKeyboardArrowDown className="mt-2 ml-1" />
                  </button>
                  <div
                    className={`${
                      profileDrowpdown ? "block" : "hidden"
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
