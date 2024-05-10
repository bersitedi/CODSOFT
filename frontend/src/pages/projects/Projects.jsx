import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ArticleCard from "../../components/ArticleCard";
import MainLayout from "../../components/MainLayout";
import { fetchPostsByCategory } from "../../services/index/posts";
import ArticleCardSkeleton from "../../components/ArticleCardSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import Pagination from "../../components/Pagination";
import { FaProjectDiagram } from "react-icons/fa";

const Projects = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryTitle = queryParams.get("category");

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        if (categoryTitle) {
          const posts = await fetchPostsByCategory(categoryTitle);
          setPosts(posts);
        } else {
          console.log("Category title is not provided.");
        }
      } catch (error) {
        setIsError(true);
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [categoryTitle]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <MainLayout>
      <div className="absolute space-x-4 w-full py-3 px-4">
        <span className="flex items-center justify-center space-x-3">
          <FaProjectDiagram className="md:text-2xl text-blue-500" />
          <p className="font-bold text-blue-500 text-xl">{categoryTitle}</p>
        </span>
      </div>
      <section className="flex flex-col container mt-10 mx-auto px-5 py-10">
        <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
          {isLoading || isFetching ? (
            [...Array(3)].map((item, index) => (
              <ArticleCardSkeleton
                key={index}
                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
              />
            ))
          ) : isError ? (
            <ErrorMessage message="Couldn't fetch the posts data" />
          ) : posts.length === 0 ? (
            <p className="text-orange-500">No Posts Found!</p>
          ) : (
            posts.map((post) => (
              <ArticleCard
                key={post._id}
                post={post}
                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
              />
            ))
          )}
        </div>
        <Pagination
          onPageChange={(page) => handlePageChange(page)}
          currentPage={currentPage}
          totalPageCount={totalPageCount}
        />
      </section>
    </MainLayout>
  );
};

export default Projects;
