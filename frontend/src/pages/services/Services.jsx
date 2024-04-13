import React from "react";
import MainLayout from "../../components/MainLayout";

const Services = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Items */}
          <ServiceItem
            title="Design"
            description="Innovative and sustainable design solutions."
          />
          <ServiceItem
            title="Road Design"
            description="Planning and designing efficient road networks."
          />
          <ServiceItem
            title="Preliminary Investigation and Feasibility studies"
            description="Engineering assessments and feasibility studies."
          />
          <ServiceItem
            title="Structural Engineering"
            description="Designing safe and efficient structures."
          />
          <ServiceItem
            title="Electrical Engineering"
            description="Innovative electrical system designs."
          />
          <ServiceItem
            title="ICT Infrastructure Design"
            description="Creating robust and scalable IT infrastructure."
          />
          <ServiceItem
            title="IT and Communication System"
            description="Developing cutting-edge IT and communication systems."
          />
          <ServiceItem
            title="Sanitary Engineering"
            description="Designing sanitary systems for optimal hygiene."
          />
          <ServiceItem
            title="Mechanical Engineering"
            description="Innovative mechanical system designs."
          />
          <ServiceItem
            title="Master planning"
            description="Strategic planning for comprehensive development."
          />
          <ServiceItem
            title="Landscape Architecture"
            description="Creating beautiful and functional outdoor spaces."
          />
          <ServiceItem
            title="Settlement and Urban Development"
            description="Planning and development of urban areas."
          />
          <ServiceItem
            title="Environmental management"
            description="Sustainable environmental management practices."
          />
          <ServiceItem
            title="Infrastructure Design"
            description="Designing resilient and efficient infrastructure."
          />
          <ServiceItem
            title="Earthquake engineering"
            description="Ensuring structural safety in earthquake-prone areas."
          />
          <ServiceItem
            title="Geotechnical Engineering"
            description="Assessing and mitigating geotechnical risks."
          />
          <ServiceItem
            title="Hydrology, drainage and water supply"
            description="Managing water resources and drainage systems."
          />
          <ServiceItem
            title="Supervision, Contract Administration & Project Management"
            description="Overseeing projects and ensuring timely completion."
          />
          <ServiceItem
            title="Surveying"
            description="Accurate land surveys for construction projects."
          />
          <ServiceItem
            title="Quantity Surveying"
            description="Cost estimation and budget management for projects."
          />
          <ServiceItem
            title="Training and Technical Assistance"
            description="Providing training and technical support."
          />
        </div>
      </div>
    </MainLayout>
  );
};

const ServiceItem = ({ title, description, icon }) => {
  return (
    <div className="border border-gray-200 p-6 rounded-lg flex flex-col items-center justify-center bg-white shadow-md transition duration-300 hover:shadow-lg hover:bg-gray-100">
      <div className="flex items-center justify-center mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default Services;
