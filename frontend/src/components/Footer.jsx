import React from "react";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/springbigscreenlogo-footer.jpg";

const Footer = () => {
  const navigateToServicessPageTop = () => {
    window.location.href = "/services#top";
  };

  return (
    <footer className="bg-cta">
      <div className="container mx-auto px-4 py-8 w-full p-4 lg:py-8">
        <div className="lg:flex md:justify-between md:mb-20 md:mt-10">
          <div className="mb-6 lg:mb-0 lg:mr-10">
            <Link to="/" className="hidden lg:flex items-center">
              <img src={logo} className="w-[200px] me-3" alt="FlowBite Logo" />
            </Link>
            <div className="text-white flex flex-row items-center justify-center mt-3 lg:mt-8 text-xl lg:text-2xl gap-x-8 cursor-pointer">
              <Link to="#">
                <AiOutlineTwitter />
              </Link>
              <Link to="#">
                <FaFacebook />
              </Link>
              <Link to="#">
                <BsTelegram />
              </Link>
              <Link to="#">
                <AiFillInstagram />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Services
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <button
                    onClick={navigateToServicessPageTop}
                    className="hover:underline"
                  >
                    Architectural Design
                  </button>
                </li>
                <li>
                  <button
                    onClick={navigateToServicessPageTop}
                    Construction
                    Supervision
                  >
                    Construction Supervision
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Contact Us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline ">
                    Email: springconae@gmail.com
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Phone: +251 116 675 115
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Location
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Spring Architects & Engineers, 10th floor, Mercy Plaza,
                    Addis Ababa, Ethiopia
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-100 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to="#" className="hover:underline">
              Spring™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
