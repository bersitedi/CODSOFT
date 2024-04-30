import React, { useState, useEffect } from "react";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
import five from "../assets/five.jpg";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselImages = [two, four];
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
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="">
            <h1 className="ml-2 mb-16 text-3xl font-bold tracking-tight xl:text-4xl text-gray-400">
              The best place <br />
              <span className=" text-gray-300">
                for Crafting Your Vision, Building Your Future
              </span>
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
