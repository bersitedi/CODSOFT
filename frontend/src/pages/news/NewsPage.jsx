import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import { toast } from "react-hot-toast";
import MainLayout from "../../components/MainLayout";
import Pagination from "../../components/Pagination";
import { useSearchParams } from "react-router-dom";
import Search from "../../components/Search";
import ErrorMessage from "../../components/ErrorMessage";
import ArticleCardSkeleton from "../../components/ArticleCardSkeleton";
import NewsCard from "../../components/NewsCard";

const NewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    parseInt(localStorage.getItem("currentPage")) || 1
  );
  const [totalPages, setTotalPages] = useState(0);
  const [totalPostsCount, setTotalPostsCount] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");
  const postsPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await axios.get(
          `/api/news?searchKeyword=${searchKeyword}&page=${currentPage}&limit=${postsPerPage}`
        );

        // Extract data and headers from the response
        const { data, headers } = response;

        // Set data state
        setData(data);

        // Extract and set headers
        const totalCountHeader = headers["x-totalcount"];
        const totalPageCountHeader = headers["x-totalpagecount"];
        setTotalPostsCount(totalCountHeader || 0);
        setTotalPages(
          totalPageCountHeader || Math.ceil(totalCountHeader / postsPerPage)
        );
      } catch (error) {
        setIsError(true);
        toast.error(error.message);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [currentPage, searchKeyword]);

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = ({ searchKeyword }) => {
    setSearchKeyword(searchKeyword);
    setCurrentPage(1); // Reset page to 1 when searching
  };

  return (
    <MainLayout>
      <section className="flex flex-col container mx-auto px-5 py-10">
        <Search
          className="w-full max-w-xl mb-10"
          onSearchKeyword={handleSearch}
        />
        <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
          {isLoading || !data ? (
            [...Array(postsPerPage)].map((_, index) => (
              <ArticleCardSkeleton
                key={index}
                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
              />
            ))
          ) : isError ? (
            <ErrorMessage message="Couldn't fetch the posts data" />
          ) : data.length === 0 ? (
            <p className="text-orange-500">No Posts Found!</p>
          ) : (
            data.map((news) => (
              <NewsCard
                key={news._id}
                news={news}
                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
              />
            ))
          )}
        </div>
        {!isLoading && (
          <Pagination
            onPageChange={(page) => handlePageChange(page)}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        )}
      </section>
    </MainLayout>
  );
};

export default NewsPage;
