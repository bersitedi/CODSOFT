import React from "react";
import art from "../../../assets/art.jpg";

const AboutSection = () => {
  return (
    <div className="flex flex-wrap justify-center mb-40">
      <div className="w-full lg:w-1/2 relative overflow-hidden">
        <img className="w-full h-full object-cover" src={art} alt="Mission" />
      </div>
      <div className="w-full lg:w-1/2 flex items-center lg:items-start lg:justify-start justify-center px-6 lg:px-12 py-8">
        <div className="text-center">
          <p className="font-bold text-2xl text-gray-800 mb-4">Our Mission</p>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
            pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in
            ullamcorper quis vestibulum ligula elementum ut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
