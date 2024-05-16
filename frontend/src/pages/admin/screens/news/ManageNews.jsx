import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDataTable } from "../../../../hooks/useDataTable";
import DataTable from "../../components/DataTable";
import axios from "axios";
import { toast } from "react-hot-toast";

const ManageNews = () => {
  const {
    userState,
    currentPage,
    searchKeyword,
    data: newsData,
    isLoading,
    isFetching,
    isLoadingDeleteData,
    queryClient,
    searchKeywordHandler,
    submitSearchKeywordHandler,
    deleteDataHandler,
    setCurrentPage,
  } = useDataTable({
    dataQueryFn: async () => {
      try {
        const response = await axios.get(
          `/api/news?searchKeyword=${searchKeyword}&page=${currentPage}&limit=10`
        );
        const { data, headers } = response;
        return { data, headers };
      } catch (error) {
        toast.error(error.message);
        throw error;
      }
    },
    dataQueryKey: "news",
    deleteDataMessage: "News is deleted",
    mutateDeleteFn: ({ slug, token }) => {
      return axios.delete(`/api/news/${slug}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  return (
    <DataTable
      pageTitle="Manage News"
      dataListName="News"
      searchInputPlaceHolder="News title..."
      searchKeywordOnSubmitHandler={submitSearchKeywordHandler}
      searchKeywordOnChangeHandler={searchKeywordHandler}
      searchKeyword={searchKeyword}
      tableHeaderTitleList={["Title", "Category", "Created At", "Tags", ""]}
      isLoading={isLoading}
      isFetching={isFetching}
      data={newsData?.data}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      headers={newsData?.headers}
      userState={userState}
    >
      {newsData?.data.map((news) => (
        <tr key={news._id}>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="relative block">
                  <img
                    src={news?.photo || "default_photo_url"}
                    alt={news.title}
                    className="mx-auto object-cover rounded-lg w-10 aspect-square"
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">{news.title}</p>
              </div>
            </div>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">
              {news.categories && news.categories.length > 0
                ? news.categories
                    .slice(0, 3)
                    .map(
                      (category, index) =>
                        `${category.title}${
                          news.categories.slice(0, 3).length === index + 1
                            ? ""
                            : ", "
                        }`
                    )
                : "Uncategorized"}
            </p>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">
              {new Date(news.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <div className="flex gap-x-2">
              {news.tags && news.tags.length > 0
                ? news.tags.map((tag, index) => (
                    <p key={index}>
                      {tag}
                      {news.tags.length - 1 !== index && ","}
                    </p>
                  ))
                : "No tags"}
            </div>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 space-x-5">
            <button
              disabled={isLoadingDeleteData}
              type="button"
              className="text-red-600 hover:text-red-900 disabled:opacity-70 disabled:cursor-not-allowed"
              onClick={() => {
                deleteDataHandler({
                  slug: news?.slug,
                  token: userState.userInfo.token,
                });
              }}
            >
              Delete
            </button>
            <Link
              to={`/admin/news/manage/edit/${news?.slug}`}
              className="text-green-600 hover:text-green-900"
            >
              Edit
            </Link>
          </td>
        </tr>
      ))}
    </DataTable>
  );
};

export default ManageNews;
