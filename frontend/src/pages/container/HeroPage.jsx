import React from "react";
import { FiSearch } from "react-icons/fi";
import BackgroundSlider from "./BackgroundSlider";
import Search from "../../components/Search";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/art.jpg";

const HeroPage = () => {
  const handleShowDrawer = () => {
    const drawerContact = document.getElementById("drawer-contact");
    drawerContact.classList.add("translate-x-0");
  };

  const handleCloseDrawer = () => {
    const drawerContact = document.getElementById("drawer-contact");
    drawerContact.classList.remove("translate-x-0");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" md:mb-32 lg:mb-40">
      <>
        <span className="absolute -z-10 hidden h-[560px] w-full md:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="absolute top-[60px] hidden h-[580px] w-full transition-opacity duration-300 dark:opacity-0 md:block"
          >
            <defs>
              <linearGradient
                id="sw-gradient-light"
                x1="0"
                x2="0"
                y1="1"
                y2="0"
              >
                <stop stopColor="hsl(209, 92.2%, 92.1%)" offset="0%" />
                <stop stopColor="hsl(209, 92.2%, 99.1%)" offset="100%" />
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient-light)"
              d="M -0.664 3.46 C -0.664 3.46 405.288 15.475 461.728 21.285 C 601.037 35.625 672.268 76.086 701.056 97.646 C 756.056 138.838 797.267 216.257 857.745 245.156 C 885.704 258.516 980.334 280.547 1048.511 268.826 C 1121.622 256.256 1199.864 226.267 1214.176 220.176 C 1241.273 208.643 1280.201 191.509 1343.494 179.436 C 1434.325 162.111 1439.504 196.099 1439.503 183.204 C 1439.502 161.288 1440 0 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L -0.664 3.46 Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="absolute top-[60px] hidden h-[580px] w-full opacity-0 transition-opacity duration-300 dark:opacity-100 md:block"
          >
            <defs>
              <linearGradient id="sw-gradient-dark" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="hsl(240, 4%, 28%)" offset="0%" />
                <stop stopColor="hsl(0, 0%, 15%)" offset="100%" />
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient-dark)"
              d="M -0.664 3.46 C -0.664 3.46 405.288 15.475 461.728 21.285 C 601.037 35.625 672.268 76.086 701.056 97.646 C 756.056 138.838 797.267 216.257 857.745 245.156 C 885.704 258.516 980.334 280.547 1048.511 268.826 C 1121.622 256.256 1199.864 226.267 1214.176 220.176 C 1241.273 208.643 1280.201 191.509 1343.494 179.436 C 1434.325 162.111 1439.504 196.099 1439.503 183.204 C 1439.502 161.288 1440 0 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L -0.664 3.46 Z"
            />
          </svg>
        </span>

        <div className="px-6 py-12 text-center md:px-12 lg:my-12 lg:text-left">
          <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="mt-12 lg:mt-0">
                <h1 className="mb-16 text-4xl font-bold tracking-tight xl:text-5xl">
                  The best offer <br />
                  <span className="text-primary">for your business</span>
                </h1>
                <Search className="mt-10 lg:mt-6 xl:mt-10" />
              </div>
              <div className="hidden lg:block lg:mb-0">
                <img
                  src={backgroundImage}
                  className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </>
      <div className="items-center h-[100%]">
        <div className="hidden md:block md:text-center">
          <div className="flex flex-row items-center">
            <p className="mt-5 mr-4 md:ml-10 text-gray-400">
              Get a free consultation, visit our office
            </p>
            <button
              className="text-white mt-5 bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded-md inline-flex items-center"
              type="button"
              onClick={handleShowDrawer}
              aria-controls="drawer-contact"
            >
              Contact us
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>

          <div
            id="drawer-contact"
            className="fixed top-16 left-0 z-40 h-screen p-4 overflow-y-auto transform transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
            tabIndex="-1"
            aria-labelledby="drawer-contact-label"
          >
            <h5
              id="drawer-label"
              className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
            >
              <FiSearch className="w-4 h-4 me-2.5" />
              Contact us
            </h5>
            <button
              type="button"
              onClick={handleCloseDrawer}
              aria-controls="drawer-contact"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1 13 13M1 13 13 1"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
              >
                Send message
              </button>
            </form>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <a href="#" className="hover:underline">
                info@company.com
              </a>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <a href="#" className="hover:underline">
                212-456-7890
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
