import React from "react";
import ArticleCard from "../../components/ArticleCard";
import { FaArrowRight } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../services/index/posts";
import { toast } from "react-hot-toast";

const Articles = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["posts"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  return (
    <section className="container mx-auto px-2 py-10 flex flex-col mt-10 lg:flex-row lg:gap-10">
      <div className="lg:pr-6">
        <div className="flex flex-wrap justify-between md:gap-x-5 gap-y-5 pb-10">
          {!isLoading &&
            !isError &&
            data.map((post) => (
              <ArticleCard
                key={post._id}
                post={post}
                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
              />
            ))}
        </div>
        <button className="flex items-center gap-x-2 mx-auto font-bold text-primary border-2 border-primary px-6 py-1 rounded-lg hover:text-white hover:bg-primary shadow-md ">
          <span>More articles</span>
          <FaArrowRight className="w-3 h-3" />
        </button>
      </div>
    </section>
  );
};

export default Articles;
