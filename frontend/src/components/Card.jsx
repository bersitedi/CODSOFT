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
      },
      {
        title: "Professional Services",
        icon: logo4,
      },
      {
        title: "15+ Years in Business",
        icon: logo1,
      },
      {
        title: "35+ professionals",
        icon: logo2,
      },
    ];

    return cardData.map((card, index) => (
      <div
        key={index}
        className="group bg-gray-50 rounded-xl text-primary shadow-md transition duration-300 ease-in-out py-6 px-3 text-center w-[250px] h-[180px] mx-auto"
      >
        <div className="animate-fadeIn mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-400 mb-4">
          <img src={card.icon} alt={card.title} className="w-8 h-8" />
        </div>
        <h2 className="animate-fadeIn text-2xl font-semibold mb-2 font-secondary text-gray-600">
          {card.title}
        </h2>
      </div>
    ));
  };

  return (
    <div className="hidden sm:block bg-gray-50 py-6">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 justify-center">
        {generateCards()}
      </div>
    </div>
  );
};

export default Card;
