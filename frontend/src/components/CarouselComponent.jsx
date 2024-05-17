import React, { useState, useEffect } from "react";
import one from "../assets/slider.jpg";
import two from "../assets/slider2.jpg";
import three from "../assets/slider6.jpg";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const CarouselComponent = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/project?search=${encodeURIComponent(searchKeyword)}`);
  };

  return (
    <>
      <div className="relative w-full h-[560px] md:h-[530px] z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full flex items-start md:items-center justify-center md:justify-between bg-[hsla(0,0%,0%,0.55)]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row md:px-4 md:pb-10 py-3 lg:py-8">
              <div className="flex flex-col  md:px-4 md:pb-10 py-3 lg:py-8">
                <h1 className="animate-fadeIn md:px-2 mt-5 ml-2 text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight text-green md:text-gray-200 mb-3 md:mb-8">
                  The best place <br />
                  <span className="text-gray-300 font-bold text-2xl md:text-3xl xl:text-4xl">
                    for Crafting Your Vision & Building Your Future
                  </span>
                </h1>
                <form
                  onSubmit={handleSubmit}
                  className="hidden md:flex flex-col md:gap-y-2.5 relative animate-fadeIn"
                >
                  <div className="relative mb-3 md:mb-0">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-600 opacity-100" />
                    <input
                      className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-2 md:py-3 focus:outline-none shadow-md"
                      type="text"
                      placeholder="Search article"
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-semibold rounded-lg px-5  py-2 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2"
                  >
                    Search
                  </button>
                </form>
              </div>
              <div className="animate-fadeIn w-full pb-8 lg:w-1/2  lg:px-8 py-1 md:py-4 lg:border-l lg:border-l-gray-500 flex flex-col items-start space-y-4">
                <Link to="/contact">
                  <div className="flex flex-row items-center justify-inline bg-gray-200 bg-opacity-70 rounded-full p-1">
                    <div className="rounded-full text-sm font-semibold bg-cta py-2 md:py-3 px-6 text-gray-200">
                      Get Started
                    </div>
                    <span className="rounded-full px-1 text-gray-800">
                      <IoIosArrowForward className="text-md md:text-2xl text-primary" />
                    </span>
                  </div>
                </Link>
                <div className="flex items-center cursor-pointer">
                  <ul className="list-none space-y-3 lg:pl-2">
                    <li className="text-green font-bold">
                      <strong className="text-2xl md:text-4xl text-gray-200 font-bold ">
                        100+
                      </strong>{" "}
                      COMPLETED PROJECTS
                    </li>
                    <li className="text-green font-bold ">
                      <strong className="text-2xl md:text-4xl text-gray-200 font-bold ">
                        100%
                      </strong>{" "}
                      SATISFACTION GUARANTEED
                    </li>
                    <li className="text-green font-bold ">
                      <strong className="text-2xl md:text-4xl text-gray-200 font-bold ">
                        15+
                      </strong>{" "}
                      YEARS OF EXPERIENCE
                    </li>
                  </ul>
                </div>
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col relative animate-fadeIn md:hidden"
              >
                <div className="relative mb-3 md:mb-0">
                  <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-600 opacity-100" />
                  <input
                    className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-2 md:py-3 focus:outline-none shadow-md"
                    type="text"
                    placeholder="Search article"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-semibold rounded-lg px-5  py-2 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>

        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1617761141732-d481912af1a9?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </>
  );
};

export default CarouselComponent;
