import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import MainLayout from "../../components/MainLayout";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";
import ArticleCard from "../../components/ArticleCard";
import ArticleCardSkeleton from "../../components/ArticleCardSkeleton";
import ErrorMessage from "../../components/ErrorMessage";

const ProjectsPage = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalPostsCount, setTotalPostsCount] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");
  const postsPerPage = 10;

  const location = useLocation();
  const locationSearchKeyword =
    new URLSearchParams(location.search).get("search") || "";

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await axios.get(
          `https://spring-97bs.onrender.com/api/posts?searchKeyword=${encodeURIComponent(
            searchKeyword || locationSearchKeyword
          )}&page=${currentPage}&limit=${postsPerPage}`
        );

        const { data, headers } = response;

        setData(data);
        const totalCountHeader = headers["x-totalcount"];
        const totalPageCountHeader = headers["x-totalpagecount"];
        setTotalPostsCount(totalCountHeader || 0);
        setTotalPages(
          totalPageCountHeader || Math.ceil(totalCountHeader / postsPerPage)
        );
      } catch (error) {
        setIsError(true);
        toast.error("Failed to fetch posts. Please try again later.");
        console.error("Error fetching posts:", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [currentPage, searchKeyword, locationSearchKeyword, location]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = ({ searchKeyword }) => {
    setSearchKeyword(searchKeyword);
    setCurrentPage(1);
  };

  return (
    <MainLayout>
      <section className="animate-fadeIn flex flex-col container mx-auto px-5 py-10">
        <Search
          className="w-full max-w-xl mb-10"
          initialValue={searchKeyword || locationSearchKeyword}
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
            data.map((post) => (
              <ArticleCard
                key={post._id}
                post={post}
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

export default ProjectsPage;
