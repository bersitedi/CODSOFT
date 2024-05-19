import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ArticleCard from "../../components/ArticleCard";
import MainLayout from "../../components/MainLayout";
import { fetchPostsByCategory } from "../../services/index/posts";
import ArticleCardSkeleton from "../../components/ArticleCardSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import Pagination from "../../components/Pagination";
import { FaProjectDiagram } from "react-icons/fa";
import { getAllCategories } from "../../services/index/postCategories";

const Projects = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryTitle, setSelectedCategoryTitle] = useState(null);
  const [categoryTitle, setCategoryTitle] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    setCategoryTitle(queryParams.get("category"));
  }, [location]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategories();
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (!selectedCategoryTitle && !categoryTitle) return;

    const fetchPosts = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const categoryToFetch = selectedCategoryTitle || categoryTitle;
        const posts = await fetchPostsByCategory(categoryToFetch);
        setPosts(posts);
      } catch (error) {
        setIsError(true);
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [categoryTitle, selectedCategoryTitle]);

  const handleCategoryClick = async (categoryTitle) => {
    setIsFetching(true);
    try {
      setSelectedCategoryTitle(categoryTitle);
      setCategoryTitle(categoryTitle);
    } catch (error) {
      setIsError(true);
      console.error("Error fetching posts:", error);
    } finally {
      setIsFetching(false);
    }
  };

  const handleHeaderDropdownChange = (categoryTitle) => {
    setSelectedCategoryTitle(categoryTitle);
    setCategoryTitle(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <MainLayout handleCategoryChange={handleHeaderDropdownChange}>
      <section className="flex flex-col lg:flex-row justify-center lg:justify-between items-center container mx-auto px-5 py-4 md:py-10 animate-fadeIn">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full mb-2 lg:hidden">
            <div className="">
              <h3 className="text-lg font-semibold mb-2">Categories</h3>
              <ul>
                {categories.map((category) => (
                  <li key={category.id}>
                    <button onClick={() => handleCategoryClick(category.title)}>
                      {category.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-3/4">
            <h2 className="text-2xl font-bold font-mono mb-1 text-gray-600">
              {categoryTitle || selectedCategoryTitle}
            </h2>
            <hr className="border-2 border-green w-16 mb-5" />
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
          </div>
          <div className="hidden lg:flex w-full lg:w-1/4 md:mt-10">
            <div className="border-l-2 border-gray-300 p-4">
              <h3 className="text-lg font-semibold mb-2">Categories</h3>
              <ul>
                {categories.map((category) => (
                  <li key={category.id}>
                    <button onClick={() => handleCategoryClick(category.title)}>
                      {category.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Projects;
