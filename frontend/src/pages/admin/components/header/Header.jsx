import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../assets/logo.jpg";
import {
  AiFillDashboard,
  AiFillHome,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import { MdDashboard, MdMessage } from "react-icons/md";
import NavItem from "./NavItem";
import NavItemCollapse from "./NavItemCollapse";
import { useWindowSize } from "@uidotdev/usehooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../../../../services/index/posts";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { createNews } from "../../../../services/index/news";

const Header = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const userState = useSelector((state) => state.user);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [activeNavName, setActiveNavName] = useState("dashboard");
  const windowSize = useWindowSize();

  const { mutate: mutateCreatePost, isLoading: isLoadingCreatePost } =
    useMutation({
      mutationFn: ({ slug, token }) => {
        return createPost({
          token,
        });
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries(["posts"]);
        toast.success("Post is created");
        navigate(`/admin/posts/manage/edit/${data.slug}`);
      },
      onError: (error) => {
        toast.error(error.message);
        console.log(error);
      },
    });
  const { mutate: mutateCreateNews, isLoading: isLoadingCreateNews } =
    useMutation({
      mutationFn: ({ slug, token }) => {
        return createNews({
          token,
        });
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries(["news"]);
        toast.success("News is created");
        navigate(`/admin/media/manage/edit/${data.slug}`);
      },
      onError: (error) => {
        toast.error(error.message);
        console.log(error);
      },
    });

  const toggleMenuHandler = () => {
    setIsMenuActive((prevState) => !prevState);
  };
  useEffect(() => {
    if (windowSize.width < 1024) {
      setIsMenuActive(false);
    } else {
      setIsMenuActive(true);
    }
  }, [windowSize.width]);

  const handleCreateNewPost = ({ token }) => {
    mutateCreatePost({ token });
  };
  const handleCreateNews = ({ token }) => {
    mutateCreateNews({ token });
  };

  return (
    <header className="flex h-fit w-full items-center justify-between p-4 lg:h-full lg:max-w-[300px] lg:flex-col lg:items-start lg:justify-start lg:p-0">
      <Link to="/">
        <AiFillHome className="text-4xl lg:hidden" />
      </Link>
      <div className="cursor-pointer lg:hidden">
        {isMenuActive ? (
          <AiOutlineClose className="w-6 h-6" onClick={toggleMenuHandler} />
        ) : (
          <AiOutlineMenu className="w-6 h-6" onClick={toggleMenuHandler} />
        )}
      </div>

      {isMenuActive && (
        <div className="fixed inset-0 z-50 lg:static lg:h-full lg:w-full">
          <div
            className="fixed inset-0 bg-black opacity-50 lg:hidden"
            onClick={toggleMenuHandler}
          />
          <div className="fixed top-0 bottom-0 left-0 z-50 w-3/4 overflow-y-auto bg-white p-4 lg:static lg:h-full lg:w-full lg:p-6">
            <Link to="/">
              <AiFillHome className="text-4xl" />
            </Link>
            <h4 className="mt-10 font-bold text-[#C7C7C7]">Main Menue</h4>
            <div className="mt-6 flex flex-col gap-y-[0.563rem]">
              <NavItem
                title="Dashboard"
                link="/admin"
                icon={<AiFillDashboard className="text-xl" />}
                name="dashboard"
                activeNavName={activeNavName}
                setActiveNavName={setActiveNavName}
              />

              <NavItemCollapse
                title="Posts"
                icon={<MdDashboard className="text-xl" />}
                name="posts"
                activeNavName={activeNavName}
                setActiveNavName={setActiveNavName}
              >
                <Link to="/admin/posts/manage">Manage all posts</Link>
                <button
                  disabled={isLoadingCreatePost}
                  className="text-start disabled:opacity-60 disabled:cursor-not-allowed"
                  onClick={() =>
                    handleCreateNewPost({ token: userState.userInfo.token })
                  }
                >
                  Add New Post
                </button>
                <Link to="/admin/categories/manage">Categories</Link>
              </NavItemCollapse>
              <NavItemCollapse
                title="News"
                icon={<MdDashboard className="text-xl" />}
                name="news"
                activeNavName={activeNavName}
                setActiveNavName={setActiveNavName}
              >
                <Link to="/admin/media/manage">Manage all news</Link>
                <button
                  disabled={isLoadingCreateNews}
                  className="text-start disabled:opacity-60 disabled:cursor-not-allowed"
                  onClick={() =>
                    handleCreateNews({ token: userState.userInfo.token })
                  }
                >
                  Add News
                </button>
                <Link to="/admin/mediacategories/manage">Categories</Link>
              </NavItemCollapse>
              <NavItem
                title="Users"
                link="/admin/users/manage"
                icon={<FaUser className="text-xl" />}
                name="users"
                activeNavName={activeNavName}
                setActiveNavName={setActiveNavName}
              />
              <NavItem
                title="Messages"
                link="/admin/messages/manage"
                icon={<MdMessage className="text-xl" />}
                name="messages"
                activeNavName={activeNavName}
                setActiveNavName={setActiveNavName}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
