import React, { useState } from "react";
import MainLayout from "../components/MainLayout";
import { AiOutlineFileText } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { FaHardHat } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const categories = [
  {
    id: 1,
    title: "Architectural Design and Supervision",
    icon: (
      <AiOutlineFileText className="text-gray-100 bg-blue-700 bg-opacity-70 border-1 shadow-md border-blue-500 p-1 w-8 h-8 rounded-full mr-2" />
    ),
    sublists: [
      "Designing and overseeing the construction of various types of buildings such as hotels, hospitals, universities, condominium blocks, housing projects, and industrial complexes.",
      "Providing supervision and contract administration for architectural projects.",
    ],
  },
  {
    id: 2,
    title: "Engineering Services",
    icon: (
      <FaTools className="text-gray-100 bg-blue-700 bg-opacity-70 border-1 shadow-md border-blue-500 p-1 w-8 h-8 rounded-full mr-2" />
    ),
    sublists: [
      "Structural design and supervision for multi-story buildings, including high-rise structures (up to G+12).",
      "Geotechnical investigation and adaptation for construction projects.",
      "Landscape design services.",
      "Coordination and planning for housing and industrial development projects.",
    ],
  },
  {
    id: 3,
    title: "Construction Supervision and Contract Administration",
    icon: (
      <FaHardHat className="text-gray-100 bg-blue-700 bg-opacity-70 border-1 shadow-md border-blue-500 p-1 w-8 h-8 rounded-full mr-2" />
    ),
    sublists: [
      "Supervising and administering contracts for various construction projects, ensuring compliance with design specifications and regulations.",
    ],
  },
  {
    id: 4,
    title: "Bid Document Preparation",
    icon: (
      <FaClipboardList className="text-gray-100 bg-blue-700 bg-opacity-70 border-1 shadow-md border-blue-500 p-1 w-8 h-8 rounded-full mr-2" />
    ),
    sublists: [
      "Preparation of bid documents for construction projects, including detailed specifications and requirements for contractors bidding on projects.",
    ],
  },
  {
    id: 5,
    title: "Full Design Services",
    icon: (
      <FaPencilRuler className="text-gray-100 bg-blue-700 bg-opacity-70 border-1 shadow-md border-blue-500 p-1 w-8 h-8 rounded-full mr-2" />
    ),
    sublists: [
      "Providing comprehensive design services encompassing architectural, structural, electrical, and sanitary design for buildings and infrastructure projects.",
    ],
  },
  {
    id: 6,
    title: "Preparation of Bill of Quantities and Cost Estimation",
    icon: (
      <FaCalculator className="text-gray-100 bg-blue-700 bg-opacity-70 border-1 shadow-md border-blue-500 p-1 w-8 h-8 rounded-full mr-2" />
    ),
    sublists: [
      "Creating detailed lists of materials, quantities, and cost estimates for construction projects, assisting in budgeting and project planning.",
    ],
  },
  {
    id: 7,
    title: "Project Coordination and Management",
    icon: (
      <FaTasks className="text-gray-100 bg-blue-700 bg-opacity-70 border-1 shadow-md border-blue-500 p-1 w-8 h-8 rounded-full mr-2" />
    ),
    sublists: [
      "Coordinating and managing various aspects of construction projects, including scheduling, resource allocation, and quality control.",
    ],
  },
];

const ServicesComponent = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  return (
    <MainLayout>
      <section className="py-4 lg:py-10 px-4">
        <div className="container mx-auto md:px-4">
          <div className="flex items-center justify-between mb-2 md:mb-4">
            <div className="w-full mb-3">
              <h2 className="text-2xl font-bold font-mono mb-1 text-gray-600">
                Services
              </h2>
              <hr className="border-2 border-green w-20 md:mb-3" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:-mt-16">
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1664474493968-dbab638f26fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Accommodation"
                className="w-full h-auto  object-cover rounded-lg"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="text-left">
                <div className="lg:-ml-32 bg-blue-500 rounded-md lg:rounded-none text-gray-100 px-2 py-3 md:py-7 md:pl-4 lg:pl-8 w-full items-center mb-4">
                  <h3 className="text-xl md:text-2xl font-bold">
                    Comprehensive Architectural and Engineering Solutions
                  </h3>
                  <hr className="border-2 border-green w-20 mt-2 mb-3 md:mt-3" />
                  <p className="text-md font-lora md:text-lg mb-4 text-gray-200">
                    Elevate your projects with our comprehensive architectural
                    and engineering solutions. From innovative designs to
                    meticulous supervision, we offer a wide range of services
                    tailored to meet your project needs. Whether it's
                    architectural design, structural engineering, project
                    management, or sustainability consulting, we're here to turn
                    your vision into reality.
                  </p>
                  <div className="flex flex-col items-center md:flex-row mt-5 gap-x-3">
                    <Link
                      to="/contact"
                      className="mb-2 w-full text-center inline-block rounded bg-primary hover:bg-opacity-90 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      role="button"
                    >
                      Get started
                    </Link>
                    <Link
                      to="/project"
                      className="mb-2 w-full text-center inline-block rounded bg-gray-300 hover:bg-opacity-90 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      role="button"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="h-1/2 text-left">
                <p className="text-sm mt-2 md:text-lg mb-2 text-gray-500 font-semibold md:font-semibold">
                  Contact us today and discover how we can help bring your
                  architectural and engineering projects to life.
                  <br />
                </p>
                <span className="text-blue-600 text-sm font-bold">
                  Get in touch
                  <FiArrowRight className="inline-block ml-1" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="container mx-auto px-4 lg:pb-10 lg:py-8">
          <div className="relative z-10">
            <div className="w-full pb-4 flex flex-col items-start space-y-4 lg:hidden">
              <h2 className="font-bold text-xl md:text-2xl text-gray-800 mb-2">
                List Categories of our services
              </h2>
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex items-center cursor-pointer"
                  onClick={() => setActiveCategory(category)}
                >
                  {/* Circle checkbox-like indicator */}
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center border-2 border-gray-400 ${activeCategory.id === category.id ? "bg-blue-500 border-blue-500" : "bg-white"}`}
                  >
                    {activeCategory.id === category.id && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-10 h-10 text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 9a1 1 0 011-1h1a1 1 0 110 2H9a1 1 0 01-1-1zm2-1a1 1 0 00-1-1 1 1 0 00-1 1v3a1 1 0 002 0V8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <strong
                    className={`text-md font-medium ml-2 ${activeCategory.id === category.id ? "text-blue-500" : "text-gray-700"}`}
                  >
                    {category.title}
                  </strong>
                </div>
              ))}
            </div>
            <div className="flex flex-col lg:flex-row md:px-4 md:pb-10 py-3 lg:py-8">
              <div className="w-full lg:w-2/3 lg:py-4 py-2 pb-8 md:pr-3 lg:pr-20">
                <h2 className="font-bold text-xl md:text-2xl text-gray-800 mb-2">
                  {activeCategory.title}
                </h2>
                <hr className="border-2 border-green w-32 mb-4 rounded-lg" />
                <ul className="list-disc list-inside space-y-2">
                  {activeCategory.sublists.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start font-lora font-semibold text-black"
                    >
                      <span className="mr-2">&#8594;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden lg:flex flex-col pb-8 lg:w-1/2 px-8 py-4 border-l border-l-gray-200  items-start space-y-4">
                <h2 className="font-bold text-xl md:text-2xl text-gray-800 mb-2">
                  List Categories of our services
                </h2>
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center cursor-pointer"
                    onClick={() => setActiveCategory(category)}
                  >
                    {/* Circle checkbox-like indicator */}
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center border-2 border-gray-400 ${activeCategory.id === category.id ? "bg-blue-500 border-blue-500" : "bg-white"}`}
                    >
                      {activeCategory.id === category.id && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-10 h-10 text-white"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 9a1 1 0 011-1h1a1 1 0 110 2H9a1 1 0 01-1-1zm2-1a1 1 0 00-1-1 1 1 0 00-1 1v3a1 1 0 002 0V8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <strong
                      className={`text-md font-medium ml-2 ${activeCategory.id === category.id ? "text-blue-500" : "text-gray-700"}`}
                    >
                      {category.title}
                    </strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ServicesComponent;
