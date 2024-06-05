import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarouselComponent from "../../components/CarouselComponent";

const HeroPage = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const navigate = useNavigate();

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
