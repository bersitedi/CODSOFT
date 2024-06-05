import React, { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import News from "./news/News";

const categories = [
  {
    id: 1,
    title: "News & Articles",
    content: `
     Stay informed and inspired with the latest updates from Spring Architects & Engineers on our News & Articles page. Here, we share insights into our ongoing and upcoming projects, industry trends, and expert opinions from our team of professionals. Whether you are interested in architectural innovations, engineering breakthroughs, or urban development strategies, our news page provides a wealth of information designed to keep you up-to-date.
    `,
    buttonText: "Read More",
    link: "/media#top",
  },
  {
    id: 2,
    title: "Services",
    content: `
     At Spring Architects & Engineers, we pride ourselves on delivering exceptional consulting services across a broad spectrum of infrastructure projects. Our expertise spans both the public and private sectors, ensuring that we meet the unique needs of each client with precision and dedication. From conceptual design to project completion, our team of skilled architects, engineers, and consultants work collaboratively to provide innovative solutions that are not only functional but also aesthetically pleasing.
    `,
    buttonText: "Read More",
    link: "/services#top",
  },
  {
    id: 3,
    title: "Our Vision",
    content: `At Spring Architects & Engineers, our vision is to transform dreams into reality through excellence and innovation. We believe in creating spaces that not only meet the practical needs of our clients but also inspire and uplift the communities they serve. Our commitment to quality, sustainability, and forward-thinking design drives us to push the boundaries of what is possible in the built environment.`,
    buttonText: "Get Started",
    link: "/project#top",
  },
];

const AboutSection = () => {
  const [ref, isIntersecting2] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const navigateToPageTop = (link) => {
    window.location.href = link;
  };
  const navigateToProjectsPageTop = () => {
    window.location.href = "/project#top";
  };
  const navigateToContactPageTop = () => {
    window.location.href = "/contact#top";
  };

  return (
    <div className="container mx-auto px-4 lg:py-5 mt-5 animate-fadeIn">
      <div className="w-full mb-3">
        <h4 className="text-base md:text-2xl text-blue-600 font-bold md:mb-1 font-mono">
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
          <p className="font-lora text-gray-800 text-base mb-4 pr-2">
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
            <button
              onClick={navigateToContactPageTop}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Contact us
            </button>
            <button
              onClick={navigateToProjectsPageTop}
              className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
      <News />
      <div
        ref={ref}
        className={`mt-5 transition-opacity duration-1000 ${
          isIntersecting2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto md:px-4 lg:pb-10 lg:py-8">
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row justify-center  md:px-4 md:pb-10 py-3 lg:py-8">
              <div className="flex flex-col w-full lg:w-1/3 px-8 py-4 border-l border-l-gray-200  items-start space-y-4 lg:hidden">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center cursor-pointer"
                    onClick={() => setActiveCategory(category)}
                  >
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center border-2 border-gray-400 ${
                        activeCategory.id === category.id
                          ? "bg-blue-500 border-blue-500"
                          : "bg-white"
                      }`}
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
                    <h2
                      className={`font-medium text-base text-gray-800 mb-2 ml-2 ${
                        activeCategory.id === category.id
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      {category.title}
                    </h2>
                  </div>
                ))}
              </div>
              <div className="w-full lg:w-2/3 lg:py-4 py-2 pb-8 md:pr-3 lg:pr-20">
                <h2 className="font-bold text-2xl md:text-3xl text-gray-800 mb-2">
                  {activeCategory.title}
                </h2>
                <hr className="border-2 border-green w-20 mb-3" />
                <p className="font-lora text-base">{activeCategory.content}</p>
                <button
                  onClick={() => navigateToPageTop(activeCategory.link)}
                  className="mt-4 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                >
                  {activeCategory.buttonText}
                </button>
              </div>
              <div className="hidden lg:flex flex-col w-full lg:w-1/3 px-8 py-4 border-l border-l-gray-200   items-start space-y-4">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center cursor-pointer"
                    onClick={() => setActiveCategory(category)}
                  >
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center border-2 border-gray-400 ${
                        activeCategory.id === category.id
                          ? "bg-blue-500 border-blue-500"
                          : "bg-white"
                      }`}
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
                    <h2
                      className={`font-medium text-lg  text-gray-800 mb-2 ml-2 ${
                        activeCategory.id === category.id
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      {category.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
