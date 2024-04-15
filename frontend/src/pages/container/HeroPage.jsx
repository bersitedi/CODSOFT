import React from "react";
import { FiSearch } from "react-icons/fi";
import BackgroundSlider from "./BackgroundSlider";

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
    <div className="items-center h-[100%]">
      <BackgroundSlider />

      <div className="hidden md:block md:text-center">
        <div className="flex flex-row items-center">
          <p className="mt-5 mr-4 md:ml-2 text-gray-400">
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
  );
};

export default HeroPage;
