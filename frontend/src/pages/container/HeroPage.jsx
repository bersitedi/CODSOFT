import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import backgroundImage from "../../assets/hero.svg";
import { useNavigate } from "react-router-dom";
import CarouselComponent from "../../components/CarouselComponent";
import Drawer from "../../components/Drawer";

const HeroPage = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const navigate = useNavigate(); // Use useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/project?search=${encodeURIComponent(searchKeyword)}`);
  };
  return (
    <>
      <div className="">
        <CarouselComponent />
      </div>
    </>
  );
};

export default HeroPage;
