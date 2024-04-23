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
  FaLeaf,
  FaCity,
  FaTree,
  FaGlobe,
  FaBuilding,
  FaMountain,
  FaWater,
  FaClipboardList,
  FaRulerCombined,
  FaChalkboardTeacher,
} from "react-icons/fa";

const Services = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 mb-40">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
          <ServiceItem title="Design" icon={<FaDraftingCompass />} />
          <ServiceItem title="Road Design" icon={<FaRoad />} />
          <ServiceItem
            title="Preliminary Investigation and Feasibility studies"
            icon={<FaTools />}
          />
          <ServiceItem title="Structural Engineering" icon={<FaSitemap />} />
          <ServiceItem title="Electrical Engineering" icon={<FaBolt />} />
          <ServiceItem
            title="ICT Infrastructure Design"
            icon={<FaNetworkWired />}
          />
          <ServiceItem
            title="IT and Communication System"
            icon={<FaDesktop />}
          />
          <ServiceItem title="Sanitary Engineering" icon={<FaShower />} />
          <ServiceItem title="Mechanical Engineering" icon={<FaCog />} />
          <ServiceItem title="Master planning" icon={<FaMap />} />
          <ServiceItem title="Landscape Architecture" icon={<FaLeaf />} />
          <ServiceItem
            title="Settlement and Urban Development"
            icon={<FaCity />}
          />
          <ServiceItem title="Environmental management" icon={<FaTree />} />
          <ServiceItem title="Infrastructure Design" icon={<FaGlobe />} />
          <ServiceItem title="Earthquake engineering" icon={<FaBuilding />} />
          <ServiceItem title="Geotechnical Engineering" icon={<FaMountain />} />
          <ServiceItem
            title="Hydrology, drainage and water supply"
            icon={<FaWater />}
          />
          <ServiceItem
            title="Supervision, Contract Administration & Project Management"
            icon={<FaClipboardList />}
          />
          <ServiceItem title="Surveying" icon={<FaRulerCombined />} />
          <ServiceItem title="Quantity Surveying" icon={<FaRulerCombined />} />
          <ServiceItem
            title="Training and Technical Assistance"
            icon={<FaChalkboardTeacher />}
          />
        </div>
      </div>
    </MainLayout>
  );
};

const ServiceItem = ({ title, icon }) => {
  return (
    <div className="border border-gray-200 p-4 rounded-md flex items-center bg-white shadow-md transition duration-300 hover:shadow-lg hover:bg-gray-100">
      <div className="mr-4">{icon}</div>{" "}
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default Services;
