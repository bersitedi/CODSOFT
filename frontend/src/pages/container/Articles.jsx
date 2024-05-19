import React from "react";
import ArticleCard from "../../components/ArticleCard";
import { FaArrowRight } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../services/index/posts";
import { toast } from "react-hot-toast";
import ArticleCardSkeleton from "../../components/ArticleCardSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import { Link } from "react-router-dom";
import { IoMdPin } from "react-icons/io";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Articles = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllPosts("", 1, 6),
    queryKey: ["posts"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section className="mt-2">
      <div
        ref={ref}
        className={`flex flex-col container mx-auto px-5 py-4 md:py-8 transition-opacity duration-1000 ${
          isIntersecting ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col justify-start items-start space-x-4 w-full py-3">
          <span className="flex items-start md:items-center justify-start space-x-2">
            <IoMdPin className="text-3xl text-primary" />
            <p className="font-semibold text-[17px] font-secondary text-gray-600">
              Welcome to Spring Consulting Architects and Engineers.
            </p>
          </span>
        </div>
        <hr className="border-2 border-green w-32 mb-10" />
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
            data?.data.map((post) => (
              <ArticleCard
                key={post._id}
                post={post}
                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
              />
            ))
          )}
        </div>
        <Link
          to="/project"
          className="mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-1 rounded-lg hover:bg-cta hover:text-white"
        >
          <span>More articles</span>
          <FaArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </section>
  );
};

export default Articles;
