import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import ErrorMessage from "../../components/ErrorMessage";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { getAllNews } from "../../services/index/news";
import NewsCard from "../../components/NewsCard";
import ArticleCardSkeleton from "../../components/ArticleCardSkeleton";
import { getAllNewsCategories } from "../../services/index/newsCategories";

const News = () => {
  const [categories, setCategories] = useState([]);
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllNews("", 1, 3),
    queryKey: ["news"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllNewsCategories();
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const getFirstCategory = () => {
    if (categories.length > 0) {
      return categories[0].title;
    }
    return "default";
  };

  const navigateToProjectsPageTop = () => {
    window.location.href = `/news?category=${getFirstCategory()}#top`;
  };

  return (
    <section className="mt-4 lg:mt-8">
      <div
        ref={ref}
        className={`flex flex-col container mx-auto  py-4 md:py-8 transition-opacity duration-1000 ${
          isIntersecting ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col justify-start items-start space-x-4 w-full">
          <span className="flex items-start md:items-center justify-start space-x-2">
            <h4 className="font-semibold text-base md:text-xl font-primary text-primary">
              Stay informed and inspired with the latest updates and upcoming
              projects from Spring Architects & Engineers
            </h4>
          </span>
        </div>
        <hr className="border-2 border-green w-32 mt-2 mb-8" />
        <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
          {isLoading ? (
            [...Array(3)].map((item, index) => (
              <ArticleCardSkeleton
                key={index}
                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
              />
            ))
          ) : isError ? (
            <ErrorMessage message="Something went wrong, Couldn't fetch the posts data" />
          ) : (
            data?.data.map((news) => (
              <NewsCard
                key={news._id}
                news={news}
                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
              />
            ))
          )}
        </div>
        <button
          onClick={navigateToProjectsPageTop}
          className="mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-1 rounded-lg hover:bg-cta hover:text-white"
        >
          <span>More articles</span>
          <FaArrowRight className="w-3 h-3" />
        </button>
      </div>
    </section>
  );
};

export default News;
