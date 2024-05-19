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
import { getAllNewsCategories } from "../../services/index/newsCategories";
import { fetchNewsByCategory } from "../../services/index/news";
import NewsCard from "../../components/NewsCard";

const NewsPage = () => {
  const [news, setNews] = useState([]);
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
        const response = await getAllNewsCategories();
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
        const news = await fetchNewsByCategory(categoryToFetch);
        setNews(news);
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
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
          <div className="w-full lg:hidden">
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
              ) : news.length === 0 ? (
                <p className="text-orange-500">No Posts Found!</p>
              ) : (
                news.map((news) => (
                  <NewsCard
                    key={news._id}
                    news={news}
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
          <div className="hidden lg:flex w-1/4 mt-10">
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

export default NewsPage;
