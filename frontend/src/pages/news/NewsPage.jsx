import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const [activeCategory, setActiveCategory] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    const categoryFromQuery = queryParams.get("category");
    setCategoryTitle(categoryFromQuery);
    setSelectedCategoryTitle(categoryFromQuery);
    setActiveCategory(categoryFromQuery);
  }, [location]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllNewsCategories();
        setCategories(response.data);
        if (!queryParams.get("category") && response.data.length > 0) {
          const defaultCategory = response.data[0].title;
          setCategoryTitle(defaultCategory);
          setSelectedCategoryTitle(defaultCategory);
          setActiveCategory(defaultCategory);
          navigate(`/media?category=${defaultCategory}`, { replace: true });
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [queryParams, navigate]);

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
      setActiveCategory(categoryTitle);
      navigate(`/media?category=${categoryTitle}`, { replace: true });
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
    setActiveCategory(categoryTitle);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <MainLayout handleCategoryChange={handleHeaderDropdownChange}>
      <section className="flex flex-col justify-center items-center container mx-auto px-5 py-4 md:py-10 animate-fadeIn">
        <div className="w-full mb-4">
          <div>
            <ul className="flex flex-wrap">
              {categories.map((category, index) => (
                <li key={category.id} className="flex items-center">
                  <button
                    onClick={() => handleCategoryClick(category.title)}
                    className={`px-3 py-1 mr-1 text-sm mb-1 rounded-full ${
                      activeCategory === category.title
                        ? "text-white bg-primary rounded-full bg-opacity-80"
                        : "text-gray-700 bg-gray-200 rounded-full bg-opacity-80"
                    }`}
                  >
                    {category.title}
                  </button>
                  {index < categories.length - 1 && (
                    <span className="mr-1 mb-1 text-gray-400">|</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-[18px] md:text-2xl font-bold font-primary mb-1 text-gray-600">
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
      </section>
    </MainLayout>
  );
};

export default NewsPage;
