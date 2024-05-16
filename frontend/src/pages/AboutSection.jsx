import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineFundProjectionScreen,
  AiOutlinePhone,
  AiOutlineStar,
} from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { BsTools } from "react-icons/bs";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const AboutSection = () => {
  const [ref, isIntersecting2] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div className="container mx-auto md:px-4 lg:py-5 mt-5 animate-fadeIn">
      <div className="w-full mb-3">
        <h4 className="text-lg md:text-xl text-blue-600 font-bold md:mb-1 font-mono">
          About Us
        </h4>
        <hr className="border-2 border-green w-10 mb-3" />
      </div>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-4 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1560264357-8d9202250f21?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Company"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 mt-3 lg:mt-0 lg:pl-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
            Welcome to Spring Consulting Architects and Engineers
          </h3>
          <p className="text-md font-lora text-gray-800 mb-4 pr-2">
            Formerly known as Theodros Tsegaye Consulting Architects &
            Engineers, we're a leading Category-I firm in Ethiopia, offering
            comprehensive Engineering, Architectural, and related services since
            2009. Specializing in diverse infrastructure projects, we provide
            top-tier consulting services to both public and private sectors.
            With expertise in design, supervision, and contract administration,
            we excel in engineering services for building and infrastructure
            works, alongside surveying, structural, and environmental studies.
            Explore our portfolio and discover how we can turn your vision into
            reality with excellence and innovation
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
      <div
        ref={ref}
        className={`mt-5 transition-opacity duration-1000 ${
          isIntersecting2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="py-4 lg:py-10 lg:px-10">
          <div className="flex items-center mb-3">
            <BsTools className="text-gray-100 bg-blue-700 bg-opacity-70 border-1 shadow-md border-blue-500 p-1 w-8 h-8 rounded-full mr-2" />
            <h4 className="text-xl font-mono font-bold text-gray-800">
              Our Approach
            </h4>
          </div>
          <p className="text-md font-lora text-gray-700 mb-4 pr-2">
            Our approach is rooted in collaboration, creativity, and technical
            excellence. We understand that each project is unique, with its own
            set of requirements and constraints. That's why we take the time to
            listen to our clients, understand their vision, and tailor our
            solutions to meet their specific needs.{" "}
          </p>
          <div className="flex items-center mb-3">
            <AiOutlineFundProjectionScreen className="text-gray-100 bg-blue-700 bg-opacity-70 border-1 shadow-md border-blue-500 p-1 w-8 h-8 rounded-full mr-2" />
            <h4 className="text-xl font-mono font-bold text-gray-800">
              Services
            </h4>
          </div>
          <ul className="list-disc font-lora text-gray-700 pl-5 mb-1 md:mb-2">
            <li>Architectural Engineering</li>
            <li>Structural Engineering</li>
            <li>Supervision and Quality Control Works</li>
            <li>Contract Administration</li>
            <li>Building, Surveying, Neighborhood Design, and Site Designs</li>
            <li>Sanitary and Electrical Building Designs</li>
          </ul>
          <Link to="/services" className="text-sm font-bold text-blue-500">
            Read more
          </Link>
          <div className="flex items-center mt-2 lg:mt-0 mb-3">
            <AiOutlineStar className="text-gray-100 bg-blue-700 bg-opacity-70 border-1 shadow-md border-blue-500 p-1 w-8 h-8 rounded-full mr-2" />
            <h4 className="text-xl font-mono mt-3 font-bold text-gray-800">
              Commitment to Excellence
            </h4>
          </div>
          <p className="text-md font-lora text-gray-700 mb-4 pr-2">
            At Spring Consulting Architects and Engineers, we are committed to
            excellence in every aspect of our work. With a proven track record
            and a team of dedicated professionals, we strive to exceed
            expectations and deliver exceptional results on every project.
          </p>
          <div className="flex items-center mb-3">
            <HiLocationMarker className="text-gray-100 bg-blue-700 bg-opacity-70 border-1 shadow-md border-blue-500 p-1 w-8 h-8 rounded-full mr-2" />
            <h4 className="text-xl font-mono font-bold text-gray-800">
              Office and Facilities
            </h4>
          </div>
          <p className="text-md font-lora text-gray-700 mb-4 pr-2">
            Located in Addis Ababa, our office is equipped with state-of-the-art
            design and engineering facilities, including plotter, computers,
            printers, and scanners. This ensures seamless project management and
            delivery.
          </p>
          <div className="flex items-center mb-3">
            <FaUserFriends className="text-gray-100 bg-blue-700 bg-opacity-70 border-1 shadow-md border-blue-500 p-1 w-8 h-8 rounded-full mr-2" />
            <h4 className="text-xl font-mono font-bold text-gray-800">
              Key Staff
            </h4>
          </div>
          <p className="text-md font-lora text-gray-700 mb-4 pr-2">
            Our team consists of experienced professional Engineers, Architects,
            and sub-professional support staff, ensuring expertise and
            efficiency in every project. When necessary, we engage additional
            specialists to meet project requirements, ensuring quality and
            timely delivery.
          </p>
          <div className="flex items-center mb-3">
            <AiOutlinePhone className="text-gray-100 bg-blue-700 bg-opacity-70 border-1 shadow-md border-blue-500 p-1 w-8 h-8 rounded-full mr-2" />
            <h4 className="text-xl font-mono font-bold text-gray-800">
              Get in Touch
            </h4>
          </div>
          <p className="text-md font-lora text-gray-700 mb-5 pr-2">
            Whether you're planning a new construction project, renovating an
            existing space, or seeking expert advice on architectural and
            engineering matters, we're here to help. Contact us today to learn
            more about how we can bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="bg-blue-500 px-4 py-2 rounded-md border-1 border-blue-400 hover:bg-blue-400 shadow-sm shadow-gray-500 text-white"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
