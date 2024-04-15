import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { Link, useParams } from "react-router-dom";
import SimilarPosts from "./container/SimilarPosts";
import { images, stables } from "../../constant";
import SocialShareButtons from "../../components/SocialShareButtons";
import { useQuery } from "@tanstack/react-query";
import { getSinglePost } from "../../services/index/posts";
import { generateHTML } from "@tiptap/html";
import Bold from "@tiptap/extension-bold";
// Option 2: Browser-only (lightweight)
// import { generateHTML } from '@tiptap/core'
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Italic from "@tiptap/extension-italic";
import parse from "html-react-parser";

const postData = [
  {
    _id: "1",
    image: images.Post1Image,
    title: "Learn how to cook healthy meals",
    createdAt: "2024-04-26",
  },
  {
    _id: "2",
    image: images.Post1Image,
    title: "Learn how to cook healthy meals",
    createdAt: "2024-04-26",
  },
  {
    _id: "3",
    image: images.Post1Image,
    title: "Learn how to cook healthy meals",
    createdAt: "2024-04-26",
  },
  {
    _id: "4",
    image: images.Post1Image,
    title: "Learn how to cook healthy meals",
    createdAt: "2024-04-26",
  },
];

const tagsData = ["Cooking", "Lifestyle", "Healthy", "Food", "Diet", "Learn"];
const ArticleDetailPage = ({ post }) => {
  const { slug } = useParams();
  const [breadCrumbsData, setBreadCrumbsData] = useState([]);
  const [body, setBody] = useState(null);

  const { data } = useQuery({
    queryKey: ["Project", slug],
    queryFn: () => getSinglePost({ slug }),
    onSuccess: (data) => {
      setBreadCrumbsData([
        { name: "Home", link: "/" },
        { name: "Project", link: "/projects" },
        { name: "Article title", link: `/project/${data.slug}` },
      ]);
      setBody(
        parse(
          generateHTML(data?.body, [Bold, Italic, Text, Paragraph, Document])
        )
      );
    },
  });
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbsData} />
          <img
            src={
              data?.photo
                ? stables.UPLOAD_FOLDER_BASE_URL | data?.photo
                : images.Post1Image
            }
            className="w-full rounded-xl"
            alt={data?.title}
          />
          <div className="mt-4 flex gap-2">
            {data?.categories.map((category) => (
              <Link
                to={`/project?category=${category.name}`}
                className="text-primary text-sm font-roboto inline-block md:text-base"
              >
                {category.name}
              </Link>
            ))}
          </div>

          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
            {data?.title}
          </h1>
          <div className="mt-4 prose prose-sm sm:prose-base">{body}</div>
        </article>
        <div>
          <SimilarPosts
            header="Latest Article"
            posts={postData}
            tags={tagsData}
            className="mt-8 lg:mt-0 lg:max-w-xs"
          />
          <div className="mt-7">
            <h2 className="font-roboto font-medium text-dark-hard mb-4 md:text-xl">
              Share on:
            </h2>
            <SocialShareButtons
              url={encodeURI(
                "https://moonfo.com/post/client-side-and-server-side-explanation"
              )}
              title={encodeURIComponent(
                "Client-side and server-side explanation"
              )}
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
