import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import BackgroundSlider from "./BackgroundSlider";
import Search from "../../components/Search";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/art.jpg";
import Drawer from "../../components/Drawer";
import { useNavigate } from "react-router-dom";

const HeroPage = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/project?search=${encodeURIComponent(searchKeyword)}`);
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
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-y-2.5 relative"
                >
                  <div className="relative">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
                    <input
                      className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4"
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
      <Drawer />
    </div>
  );
};

export default HeroPage;
