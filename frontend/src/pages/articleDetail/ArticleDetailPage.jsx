import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { Link } from "react-router-dom";
import SimilarPosts from "./container/SimilarPosts";
import { images } from "../../constant";
import CommentsContainer from "../../components/comments/CommentsContainer";

const breadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Article title", link: "/blog/1" },
];
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
const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbsData} />
          <img src={images.Post1Image} className="w-full rounded-xl" alt="" />
          <Link
            to="/blog?category=selectedCategory"
            className="text-primary text-sm font-roboto inline-block md:text-base"
          >
            COOKING
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
            Learn how to cook healthy meals
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7 ">
              Indulging in a sweet treat can be guilt-free and effortless with
              pudding. Modern recipes prioritize wholesome ingredients like
              almond milk and natural sweeteners, making it a healthy dessert
              option. With minimal effort and versatile ingredients, pudding is
              a quick and adaptable dessert suitable for various dietary
              preferences.
            </p>
          </div>
          <CommentsContainer className="mt-10" loggedinUserId="a" />
        </article>
        <SimilarPosts
          header="Latest Article"
          posts={postData}
          tags={tagsData}
          className="mt-0 lg:max-w-xs"
        />
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
