import React from "react";
import MainLayout from "../../components/MainLayout";
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
import back from "../../assets/back.jpg";
import Drawer from "../../components/Drawer";

const Services = () => {
  return (
    <MainLayout>
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${back})`, height: "100vh" }}
      >
        <div className="absolute flex flex-col justify-center items-center md:justify-start md:items-start mt-16 text-white">
          <h2 className="text-3xl font-bold text-center md:text-start md:ml-10 border-b">
            Our Services
          </h2>
          <div className="flex flex-row px-4 py-8 mb-40 w-full justify-center">
            <ul className="w-full flex flex-col pl-5">
              {services.map((service, index) => (
                <ServiceItem
                  key={index}
                  title={service.title}
                  icon={service.icon}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

const ServiceItem = ({ title, icon }) => {
  return (
    <li className="flex items-center p-1">
      <div className="mr-4 text-xl">{icon}</div>{" "}
      <h3 className="text-md font-semibold">{title}</h3>
    </li>
  );
};

const services = [
  { title: "Design", icon: <FaDraftingCompass /> },
  { title: "Road Design", icon: <FaRoad /> },
  {
    title: "Preliminary Investigation and Feasibility",
    icon: <FaTools />,
  },
  { title: "Structural Engineering", icon: <FaSitemap /> },
  { title: "Electrical Engineering", icon: <FaBolt /> },
  { title: "ICT Infrastructure Design", icon: <FaNetworkWired /> },
  { title: "IT and Communication System", icon: <FaDesktop /> },
  { title: "Sanitary Engineering", icon: <FaShower /> },
  { title: "Mechanical Engineering", icon: <FaCog /> },
  { title: "Master planning", icon: <FaMap /> },
  { title: "Hydrology, drainage", icon: <FaWater /> },
];

export default Services;
