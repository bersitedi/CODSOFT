import React from "react";
import MainLayout from "../components/MainLayout";
import { Link } from "react-router-dom";
import {
  FaDraftingCompass,
  FaRoad,
  FaTools,
  FaSitemap,
  FaBolt,
  FaNetworkWired,
  FaDesktop,
  FaShower,
  FaCog,
  FaMap,
  FaWater,
} from "react-icons/fa";
import back from "../assets/build.jpg";

const services = [
  { title: "Design", icon: <FaDraftingCompass /> },
  { title: "Road Design", icon: <FaRoad /> },
  { title: "Preliminary Investigation and Feasibility", icon: <FaTools /> },
  { title: "Structural Engineering", icon: <FaSitemap /> },
  { title: "Electrical Engineering", icon: <FaBolt /> },
  { title: "ICT Infrastructure Design", icon: <FaNetworkWired /> },
  { title: "IT and Communication System", icon: <FaDesktop /> },
  { title: "Sanitary Engineering", icon: <FaShower /> },
  { title: "Mechanical Engineering", icon: <FaCog /> },
  { title: "Master planning", icon: <FaMap /> },
  { title: "Hydrology, drainage", icon: <FaWater /> },
];

const Services = () => {
  return (
    <MainLayout>
      <div className="px-6 py-12 text-center md:px-12 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
          <div className="grid items-center lg:grid-cols-2">
            <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
              <div className="block rounded-lg bg-white lg:bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                <h1 className="mt-2 mb-10 text-3xl font-bold tracking-tight md:text-5xl">
                  The best offer <br />
                  <span className="text-primary">for your business</span>
                </h1>
                <div className="flex flex-col justify-start items-start mb-10 text-blue-600">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center space-x-2"
                    >
                      {service.icon}
                      <span>{service.title}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  role="button"
                >
                  Get started
                </Link>
                <Link
                  to="/project"
                  className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  role="button"
                >
                  Learn more
                </Link>
              </div>
            </div>
            <div className="hidden lg:block lg:mb-0">
              <img
                src={back}
                className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default Services;
