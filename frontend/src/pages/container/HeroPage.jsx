import React from "react";
import hero from "../../assets/background.jpg";
import { FiSearch } from "react-icons/fi";

const HeroPage = () => {
  return (
    <main className="container flex flex-col mx-auto px-5 py-5  lg:flex-row">
      <div className="mt-8 lg:w-1/2">
        <h1 className="text-4xl font-bold mb-4 text-center text-dark-soft lg:text:5xl md:text-left lg:max-w-[540px]">
          Welcome to TastyBites,
        </h1>
        <p className="text-lg mb-4 text-dark-eerie text-center md:text-left md:text-xl lg:text-base">
          Explore Exciting Recipes Discover a vast collection of recipes curated
          by food enthusiasts and chefs from around the world.
        </p>
        <div className="flex flex-col md:flex-row lg:flex-row md:items-center lg:items-start lg:mt-7 xl:mt-10 lg:justify-start">
          <div className="flex items-center shadow-md mb-4 md:mb-0 lg:mb-0">
            <FiSearch className="text-gray-400 w-6 h-6 ml-3" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-1 border-none focus:outline-none ml-1"
            />
            <button className="hidden sm:flex bg-blue-500 text-white px-6 py-1 rounded-md ml-3 hover:bg-blue-600 shadow-md">
              Explore
            </button>
          </div>
          <button className="sm:hidden bg-blue-500  text-white px-6 py-1 rounded-md md:ml-3 hover:bg-blue-600 shadow-md">
            Explore
          </button>
        </div>
        <div className="flex flex-col mt-5 lg:items-start lg:flex-row lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className="text-dark-night font-semibold italic lg:text-sm mt-2 lg:mt-4 ">
            Popular tags:
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm">
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-sans">
              FAQ Item 1
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-sans">
              FAQ Item 2
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-sans">
              FAQ Item 3
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-sans">
              FAQ Item 4
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        <img src={hero} alt="" className="w-full" />
      </div>
    </main>
  );
};

export default HeroPage;
