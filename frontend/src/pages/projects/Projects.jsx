import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ArticleCard from "../../components/ArticleCard";
import MainLayout from "../../components/MainLayout";
import { fetchPostsByCategory } from "../../services/index/posts";
import ArticleCardSkeleton from "../../components/ArticleCardSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import Pagination from "../../components/Pagination";

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
      <section className="flex flex-col container mx-auto px-5 py-10">
        <div>
          <h1 className="text-3xl font-bold bg-gray-50 text-gray-600 rounded-md mb-5 p-3">
            {categoryTitle}
          </h1>
        </div>
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
