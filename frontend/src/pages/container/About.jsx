import React from "react";
import { Link } from "react-router-dom";
import Drawer from "../../components/Drawer";
import useIntersectionObserver from "../../hooks/useIntersectionObserver"; // Import the custom hook

const About = () => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`container px-5 py-2 lg:py-10 mx-auto flex flex-col lg:flex-row items-center justify-center transition-opacity duration-1000 ${
        isIntersecting ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
        <div className="text-start">
          <h4 className="text-lg md:text-xl text-blue-600 font-bold md:mb-1 font-mono">
            About Us
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold font-primary mb-2">
            Learn More About our Company
          </h2>
          <hr className="border-2 border-green w-20 md:w-40 mb-3" />
          <p className="text-[15px] mb-5 font-lora">
            Spring Consulting Architects and Engineers, formerly known as
            Theodros Tsegaye Consulting Architects & Engineers, is an esteemed
            Category-I Ethiopian firm established in 2009. Specializing in a
            spectrum of engineering, architectural, and related services, our
            primary mission is to deliver comprehensive consulting solutions to
            both public and private sectors involved in various economic and
            social development projects. With a strong emphasis on precision and
            quality, we offer expertise in engineering design, supervision, and
            contract administration for buildings and infrastructure projects.
          </p>
          <Link
            to="/about"
            className="bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-500 text-white font-semibold"
          >
            Learn more
          </Link>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center flex-col md:flex-row">
        <div className="mb-5 lg:mr-5 lg:mb-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Image 1"
            className="w-full lg:w-[260px] h-[300px] md:h-auto object-cover rounded-lg"
          />
        </div>
        <div className="lg:mt-16 mb-6 md:mb-0 md:ml-8 lg:-ml-10">
          <div className="bg-gray-100 w-full lg:w-[330px] p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-mono mb-2 font-semibold">
              Spring Consulting Architects and Engineers
            </h2>
            <p className="text-sm mb-5 font-lora">
              Driven by a commitment to excellence, we at Spring Consulting
              Architects and Engineers strive to exceed expectations in every
              project we undertake. With our proven track record of delivering
              innovative solutions and exceptional service, we invite you to
              connect with us today and discover how we can bring your vision to
              life.
            </p>
            <Drawer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
