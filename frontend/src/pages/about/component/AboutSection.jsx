import React from "react";
import art from "../../../assets/art.jpg";
import wave from "../../../assets/wave.png";

const AboutSection = () => {
  return (
    <div className="relative">
      {/* Background wave image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={wave}
        alt="Wave"
      />

      {/* Content */}
      <div className="flex flex-wrap justify-center mb-10 mt-20 relative z-10">
        <div className="w-full lg:w-1/2 relative overflow-hidden">
          <img
            className="w-full h-full rounded-md object-cover"
            src={art}
            alt="Mission"
          />
        </div>
        <div className="w-full lg:w-1/2 flex px-6 lg:px-12 py-8">
          <div className="text-center lg:text-start">
            <p className="font-bold text-3xl text-gray-600 mb-4">Our Mission</p>
            <p className="text-blue-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
              pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo
              in ullamcorper quis vestibulum ligula elementum ut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
