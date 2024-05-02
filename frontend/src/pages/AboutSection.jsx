import React from "react";
import three from "../assets/image6.jpg";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <div className="w-full py-1 px-2 shadow-md mb-3">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center border-2 border-gray-100 shadow-lg">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img src={three} alt="Company" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <p className="text-lg mb-4 pr-2">
            Welcome to <span className="font-semibold">Company Name</span>, your
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          </p>
          <div className="flex gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Contact us
            </Link>
            <Link
              to="/project"
              className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-16 bg-gray-50 shadow-md border-2 border-gray-100 py-2 px-4">
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
