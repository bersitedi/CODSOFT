import React, { useState, useEffect } from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { Link, useParams } from "react-router-dom";
import { images, stables } from "../../constant";
import SocialShareButtons from "../../components/SocialShareButtons";
import { useQuery } from "@tanstack/react-query";
import parseJsonToHtml from "../../utils/parseJsonToHtml";
import Editor from "../../components/editor/Editor";
import { getAllNews, getSingleNews } from "../../services/index/news";
import ArticleDetailSkeleton from "../articleDetail/component/ArticleDetailSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import SimilarNews from "./container/SimilarNews";

const NewsDetailPage = () => {
  const { slug } = useParams();
  const [breadCrumbsData, setBreadCrumbsData] = useState([]);
  const [body, setBody] = useState(null);
  const [selectedPostIndex, setSelectedPostIndex] = useState(0);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["news", slug],
    queryFn: () => getSingleNews({ slug }),
    onSuccess: (data) => {
      setBreadCrumbsData([
        { name: "Home", link: "/" },
        { name: "News", link: "/news" },
        { name: data.title, link: `/news/${data.slug}` },
      ]);
      setBody(parseJsonToHtml(data?.body));
    },
  });

  const { data: newsData } = useQuery({
    queryFn: () => getAllNews(),
    queryKey: ["news"],
  });

  const handleSelectPost = (index) => {
    setSelectedPostIndex(index);
  };

  return (
    <MainLayout>
      {isLoading ? (
        <ArticleDetailSkeleton />
      ) : isError ? (
        <ErrorMessage message="Something went wrong, Couldn't fetch the post detail" />
      ) : (
        data && (
          <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
            <article className="flex-1">
              <BreadCrumbs data={breadCrumbsData} />
              <img
                className="rounded-xl w-full"
                src={
                  data.photo
                    ? stables.S3_BUCKET_URL + data.photo
                    : images.samplePostImage
                }
                alt={data.title}
              />
              <div className="mt-4 flex gap-2">
                {data.categories &&
                  data.categories.map((category, index) => (
                    <Link
                      key={index}
                      to={`/news?category=${category.name}`}
                      className="text-primary text-sm font-roboto inline-block md:text-base"
                    >
                      {category.name}
                    </Link>
                  ))}
              </div>

              <h1 className="text-xl font-semibold font-mono mt-4 text-dark-hard md:text-[26px]">
                {data.title}
              </h1>
              <div className="w-full">
                {!isLoading && !isError && (
                  <Editor content={body} editable={false} />
                )}
              </div>
            </article>
            <div>
              <SimilarNews
                header="Latest Article"
                news={newsData?.data?.slice(0, 5)}
                tags={data.tags}
                className="mt-8 lg:mt-0 lg:max-w-xs"
                selectedPostIndex={selectedPostIndex}
                onSelectPost={handleSelectPost}
              />
              <div className="mt-7">
                <h2 className="font-roboto font-medium text-dark-hard mb-4 md:text-xl">
                  Share on:
                </h2>
                <SocialShareButtons
                  url={encodeURI(window.location.href)}
                  title={encodeURIComponent(data.title)}
                />
              </div>
            </div>
          </section>
        )
      )}
    </MainLayout>
  );
};

export default NewsDetailPage;
