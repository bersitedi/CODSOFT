// Inside projects.jsx

import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import ArticleCard from "../../components/ArticleCard";
import MainLayout from "../../components/MainLayout";
import { fetchPostsByCategory } from "../../services/index/posts";

const Projects = () => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryTitle = queryParams.get("category");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (categoryTitle) {
          const posts = await fetchPostsByCategory(categoryTitle);
          setPosts(posts);
        } else {
          console.log("Category title is not provided.");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [categoryTitle]);

  return (
    <MainLayout>
      <div>
        <h1>{categoryTitle}</h1>
        {posts.map((post) => (
          <ArticleCard
            key={post._id}
            post={post}
            className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default Projects;
