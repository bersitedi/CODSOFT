import React from "react";
import ArticleCard from "../../components/ArticleCard";
import { FaArrowRight } from "react-icons/fa";
import Title from "./Title";
import AdminProfile from "./AdminProfile";

const Articles = () => {
  return (
    <section className="container mx-auto px-2 py-10 flex flex-col lg:flex-row lg:gap-10">
      <div className="lg:w-3/4 lg:pr-6">
        <Title className="hiden lg:w-full lg:mb-10" />
        <div className="flex flex-wrap justify-between md:gap-x-5 gap-y-5 pb-10">
          <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
          <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
          <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
        </div>
        <button className="flex items-center gap-x-2 mx-auto font-bold text-primary border-2 border-primary px-6 py-1 rounded-lg hover:text-white hover:bg-primary shadow-md ">
          <span>More articles</span>
          <FaArrowRight className="w-3 h-3" />
        </button>
      </div>

      <div className="lg:w-1/4">
        <AdminProfile className="w-full h-full" />
      </div>
    </section>
  );
};

export default Articles;
