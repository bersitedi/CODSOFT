import React from "react";
import MainLayout from "../components/MainLayout";
import { AiOutlineFileText } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { FaHardHat } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import services from "../assets/services.jpg";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const ServicesComponent = () => {
  return (
    <MainLayout>
      <section className="py-4 md:py-8 lg:py-12 px-4">
        <div className="container mx-auto md:px-4">
          <div className="flex items-center justify-between mb-2 md:mb-4">
            <div>
              <h2 className="text-xl md:text-3xl font-bold font-mono">
                Services
              </h2>
              <hr className="border-2 md:border-4 w-20 md:mt-1 mb-2 md:mb-3 border-green" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1664474493968-dbab638f26fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Accommodation"
                className="w-full h-auto  object-cover rounded-lg"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="text-left">
                <div className="lg:-ml-32 bg-blue-500 rounded-md md:rounded-none text-gray-100 p-3 md:py-7 md:pl-8 w-full items-center mb-4">
                  <h3 className="text-xl md:text-2xl font-bold">
                    We Offer Various types of Services
                  </h3>
                  <hr className="border-2 border-green w-20 mt-1 mb-1 md:mt-3 md:mb-3" />
                  <p className="text-md md:text-lg mb-4 text-gray-200">
                    Immerse yourself in luxury and comfort with our premium
                    accommodations. Each room is meticulously designed to
                    provide the perfect blend of elegance and relaxation.
                  </p>
                  <div className="flex flex-col items-center md:flex-row mt-5 gap-x-3">
                    <Link
                      to="/contact"
                      className="mb-2 inline-block rounded bg-primary hover:bg-opacity-90 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      role="button"
                    >
                      Get started
                    </Link>
                    <Link
                      to="/project"
                      className="mb-2 inline-block rounded bg-gray-300 hover:bg-opacity-90 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
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
                <p className="text-sm md:text-lg mb-2 md:mb-4 text-gray-600 font-semibold md:font-bold">
                  Book now and find out one of the best accommodations.
                  <br />
                  <span className="text-blue-600 text-sm font-semibold">
                    Read more
                    <FiArrowRight className="inline-block ml-1" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row container mx-auto px-4 md:py-8">
        <div className="w-full lg:w-2/3 pb-5 md:py-4 md:pr-3 lg:pr-20">
          <h2 className="font-bold text-xl md:text-2xl text-gray-700 mb-2">
            List of Architectural & Engineering Services
          </h2>
          <hr className="border-2 border-green w-32 mb-4 rounded-lg" />
          <ul className="list-disc list-inside">
            <li className="list-none font-mono flex items-start">
              <AiOutlineFileText className="hidden md:flex w-10 h-10 bg-blue-300 rounded-full mr-2 text-gray-600 p-1.5 flex-shrink-0" />{" "}
              <div>
                <strong className="text-md md:text-lg">
                  Architectural Design and Supervision:
                </strong>
              </div>
            </li>
            <ul className="list-disc text-sm list-inside md:ml-4">
              <li className="flex items-start font-lora text-gray-600">
                <span className="mr-2">&#8594;</span>
                Designing and overseeing the construction of various types of
                buildings such as hotels, hospitals, universities, condominium
                blocks, housing projects, and industrial complexes.
              </li>
              <li className="flex items-start font-lora text-gray-600">
                <span className="mr-2">&#8594;</span>
                Providing supervision and contract administration for
                architectural projects.
              </li>
            </ul>
            <li className="list-none font-mono flex items-start">
              <FaTools className="hidden md:flex w-10 h-10 bg-blue-300 rounded-full mr-2 text-gray-600 p-1.5 flex-shrink-0" />
              <div>
                <strong className="text-md md:text-lg">
                  Engineering Services:
                </strong>
              </div>
            </li>
            <ul className="list-disc text-sm list-inside md:ml-4">
              <li className="flex items-start font-lora text-gray-600">
                <span className="mr-2">&#8594;</span>
                Structural design and supervision for multi-story buildings,
                including high-rise structures (up to G+12).
              </li>
              <li className="flex items-start font-lora text-gray-600">
                <span className="mr-2">&#8594;</span>
                Geotechnical investigation and adaptation for construction
                projects.
              </li>
              <li className="flex items-start font-lora text-gray-600">
                <span className="mr-2">&#8594;</span>Landscape design services.
              </li>
              <li className="flex items-start font-lora text-gray-600">
                <span className="mr-2">&#8594;</span>
                Coordination and planning for housing and industrial development
                projects.
              </li>
            </ul>
            <li className="list-none font-mono flex items-start">
              <FaHardHat className="hidden md:flex w-10 h-10 bg-blue-300 rounded-full mr-2 text-gray-600 p-1.5 flex-shrink-0" />{" "}
              <div>
                <strong className="text-md md:text-lg">
                  Construction Supervision and Contract Administration:
                </strong>
              </div>
            </li>
            <ul className="list-disc text-sm list-inside md:ml-4">
              <li className="flex items-start font-lora text-gray-600">
                <span className="mr-2">&#8594;</span> Supervising and
                administering contracts for various construction projects,
                ensuring compliance with design specifications and regulations.
              </li>
            </ul>
            <li className="list-none font-mono flex items-start">
              <FaClipboardList className="hidden md:flex w-10 h-10 bg-blue-300 rounded-full mr-2 text-gray-600 p-1.5 flex-shrink-0" />{" "}
              <div>
                <strong className="text-lg">Bid Document Preparation:</strong>
              </div>
            </li>
            <ul className="list-disc text-sm list-inside md:ml-4">
              <li className="flex items-start font-lora text-gray-600">
                <span className="mr-2">&#8594;</span> Preparation of bid
                documents for construction projects, including detailed
                specifications and requirements for contractors bidding on
                projects.
              </li>
            </ul>
            <li className="list-none font-mono flex items-start">
              <FaPencilRuler className="hidden md:flex w-10 h-10 bg-blue-300 rounded-full mr-2 text-gray-600 p-1.5 flex-shrink-0" />{" "}
              <div>
                <strong className="text-md md:text-lg">
                  Full Design Services:
                </strong>
              </div>
            </li>
            <ul className="list-disc text-sm list-inside md:ml-4">
              <li className="flex items-start font-lora text-gray-600">
                <span className="mr-2">&#8594;</span> Providing comprehensive
                design services encompassing architectural, structural,
                electrical, and sanitary design for buildings and infrastructure
                projects.
              </li>
            </ul>
            <li className="list-none font-mono flex items-start">
              <FaCalculator className="hidden md:flex w-10 h-10 bg-blue-300 rounded-full mr-2 text-gray-600 p-1.5 flex-shrink-0" />{" "}
              <div>
                <strong className="text-md md:text-lg">
                  Preparation of Bill of Quantities and Cost Estimation:
                </strong>
              </div>
            </li>
            <ul className="list-disc text-sm list-inside md:ml-4">
              <li className="flex items-start font-lora text-gray-600">
                <span className="mr-2">&#8594;</span> Creating detailed lists of
                materials, quantities, and cost estimates for construction
                projects, assisting in budgeting and project planning.
              </li>
            </ul>
            <li className="list-none font-mono flex items-start">
              <FaTasks className="hidden md:flex w-10 h-10 bg-blue-300 rounded-full mr-2 text-gray-600 p-1.5 flex-shrink-0" />{" "}
              <div>
                <strong className="text-md md:text-lg">
                  Project Coordination and Management:
                </strong>
              </div>
            </li>
            <ul className="list-disc text-sm list-inside md:ml-4">
              <li className="flex items-start font-lora text-gray-600">
                <span className="mr-2">&#8594;</span> Coordinating and managing
                various aspects of construction projects, including scheduling,
                resource allocation, and quality control.
              </li>
            </ul>
          </ul>
        </div>
        <div className="w-full pb-8 md:pb-0 lg:w-1/3 flex justify-center lg:justify-end">
          <img
            src="https://plus.unsplash.com/premium_photo-1661324440598-19f88a78e6b1?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image"
            className="w-full h-full lg:max-w-sm rounded-lg object-cover"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default ServicesComponent;
