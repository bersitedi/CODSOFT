import React, { useEffect, useState } from "react";
import imageSlide from "../../data";
import { useWindowSize } from "../../hooks/useWindowSize";
import Search from "../../components/Search";

const BackgroundSlider = () => {
  const [currentState, setCurrentState] = useState(0);
  const { width } = useWindowSize();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === imageSlide.length - 1) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentState]);

  let height = "calc(100vh - 180px)";
  let paddingTop = "100px";
  if (width < 768) {
    height = "calc(100vh - 280px)";
    paddingTop = "0";
  }

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: height,
    paddingTop: paddingTop,
    transition: "background-image 0.5s ease-in-out",
  };

  const goToNext = (nextState) => {
    setCurrentState(nextState);
  };

  return (
    <div className="relative">
      <div style={bgImageStyle}>
        <div className="absolute inset-0 flex flex-col items-start justify-center ml-6 text-center text-white z-10">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-left text-white lg:text:5xl">
              Welcome to TastyBites,
            </h1>
            <p className="text-lg mb-4 text-white text-left  md:text-xl lg:text-base">
              Explore Exciting Recipes Discover a vast collection of recipes
              curated by food enthusiasts and chefs from around the world.
            </p>
          </div>
          <Search className="mt-10 lg:mt-6 xl:mt-10" />

          <div>
            <h1 className="text-2xl text-left md:text-6xl lg:text-7xl font-bold">
              {imageSlide[currentState].title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl">
              {imageSlide[currentState].body}
            </p>
          </div>
          <div className="flex mt-4">
            {imageSlide.map((image, index) => (
              <span
                key={index}
                onClick={() => goToNext(index)}
                className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full bg-gray-700 mx-1 cursor-pointer ${
                  currentState === index ? "bg-white" : ""
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSlider;
