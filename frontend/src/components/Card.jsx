import React from "react";
import logo1 from "../assets/buildinglogo.png";
import logo2 from "../assets/innovationlogo.png";
import logo3 from "../assets/fast.png";
import logo4 from "../assets/dependable.png";

const Card = () => {
  const generateCards = () => {
    const cardData = [
      {
        title: "Creative & Natural",
        icon: logo1,
        description:
          "Description for Card 1.Description for Card 1.Description for Card 1.",
      },
      {
        title: "Innovative & Quality",
        icon: logo2,
        description:
          "Description for Card 2. Description for Card 1.Description for Card 1.",
      },
      {
        title: "Fast & Reliable",
        icon: logo3,
        description:
          "Description for Card 3. Description for Card 1.Description for Card 1.",
      },
      {
        title: "Professional Service",
        icon: logo4,
        description:
          "Description for Card 4. Description for Card 1.Description for Card 1.",
      },
    ];

    return cardData.map((card, index) => (
      <div
        key={index}
        className="bg-gray-50 group hover:bg-primary rounded-xl hover:text-white hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out p-6 text-center w-full md:w-[300px] h-full"
      >
        <h2 className="text-xl font-semibold mb-4 group-hover:text-white">
          {card.title}
        </h2>
        <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-300 mb-4">
          <img src={card.icon} alt={card.title} className="w-8 h-8" />
        </div>
        <p className="text-gray-700 font-lora text-sm group-hover:text-gray-300">
          {card.description}
        </p>
      </div>
    ));
  };

  return (
    <div className="mt-5 md:mt-0">
      <div className="container mx-auto flex flex-wrap justify-center lg:justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-4">
        {generateCards()}
      </div>
    </div>
  );
};

export default Card;
