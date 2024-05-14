import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import backgroundImage from "../../assets/hero.svg";
import { useNavigate } from "react-router-dom";
import CarouselComponent from "../../components/CarouselComponent";

const HeroPage = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const navigate = useNavigate(); // Use useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/project?search=${encodeURIComponent(searchKeyword)}`);
  };
  return (
    <>
      <div className="md:hidden">
        <CarouselComponent />
      </div>
      <div className="hidden md:block md:mb-32 lg:mb-[200px]">
        <>
          <span className="absolute -z-10 hidden h-[560px] w-full md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              className="absolute top-[40px] hidden h-[580px] w-full transition-opacity duration-300 dark:opacity-0 md:block"
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
                <linearGradient
                  id="sw-gradient-dark"
                  x1="0"
                  x2="0"
                  y1="1"
                  y2="0"
                >
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

          <div className="text-center lg:text-left">
            <div className="container mx-auto px-5 py-5">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="mt-12 lg:mt-32">
                  <h1 className="mb-16 text-4xl font-bold tracking-tight text-gray-500">
                    The best place <br />
                    <p className="text-primary xl:text-5xl mt-1">
                      for Crafting Your Vision & Building Your Future
                    </p>
                  </h1>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col md:gap-y-2.5 relative"
                  >
                    <div className="relative">
                      <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-600 opacity-100" />
                      <input
                        className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] md:rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-md"
                        type="text"
                        placeholder="Search article"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default HeroPage;
