import React from "react";
import logo1 from "../assets/buildinglogo.png";
import logo2 from "../assets/team.png";
import logo3 from "../assets/fast.png";
import logo4 from "../assets/dependable.png";

const Card = () => {
  const generateCards = () => {
    const cardData = [
      {
        title: "Quality & Reliability",
        icon: logo3,
        description:
          "At Spring, we prioritize precision and consistency in every service, ensuring steadfast performance and unwavering trust.",
      },
      {
        title: "Professional Service",
        icon: logo4,
        description:
          "Master Planning, Building, Landscaping & Furniture Design, Supervision & Quality Control Works & Contract Adminstration",
      },
      {
        title: "Years in Business",
        icon: logo1,
        description:
          "With over 15 years of dedicated service, Spring Architects and Engineers have established a proven track record of excellence.",
      },
      {
        title: "Number of personnel",
        icon: logo2,
        description:
          "Our team comprises 34 highly skilled technical professionals and 4 dedicated administrative staff members, ensuring comprehensive support for all projects.",
      },
    ];

    return cardData.map((card, index) => (
      <div
        key={index}
        className="group bg-gray-50 rounded-xl text-primary hover:shadow-md transition duration-300 ease-in-out p-6 text-center w-full md:w-[300px] h-full md:h-[280px]"
      >
        <div className="animate-fadeIn mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-400 mb-4">
          <img src={card.icon} alt={card.title} className="w-8 h-8" />
        </div>
        <h2 className="animate-fadeIn text-xl font-semibold mb-2 font-mono text-gray-800">
          {card.title}
        </h2>
        <p className="animate-fadeIn font-lora text-sm group-hover:text-primary text-gray-600">
          {card.description}
        </p>
      </div>
    ));
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 flex flex-wrap justify-center gap-2 sm:gap-6 md:gap-8 lg:gap-4">
        {generateCards()}
      </div>
    </div>
  );
};

export default Card;
