import React, { useState, useEffect } from "react";
import one from "../assets/slider.jpg";
import two from "../assets/slider2.jpg";
import three from "../assets/slider6.jpg";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselImages = [one, two, three];
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, carouselImages.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/project?search=${encodeURIComponent(searchKeyword)}`);
  };

  return (
    <>
      <div className="relative w-full h-[400px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center md:bg-[hsla(0,0%,0%,0.55)]">
          <div>
            <h1 className="ml-2 text-2xl md:text-3xl font-bold tracking-tight xl:text-4xl text-white  md:text-gray-300 mb-8">
              The best place <br />
              <span className="md:text-gray-400 font-bold">
                for Crafting Your Vision, Building Your Future
              </span>
            </h1>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-y-2.5 relative"
            >
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-600 opacity-100" />
                <input
                  className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-md"
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

        <img
          className="w-full h-auto"
          src={carouselImages[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />
      </div>
    </>
  );
};

export default CarouselComponent;
