import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import HomePage from "./pages/home/HomePage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/register/RegisterPage";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import ContactForm from "./pages/ContactForm";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/projects/Projects";
import AdminLayout from "./pages/admin/AdminLayout";
import Admin from "./pages/admin/screens/Admin";
import ManagePosts from "./pages/admin/screens/posts/ManagePosts";
import EditPost from "./pages/admin/screens/posts/EditPost";
import Categories from "./pages/admin/screens/categories/Categories";
import EditCategories from "./pages/admin/screens/categories/EditCategories";
import Users from "./pages/admin/screens/users/Users";
import ProjectsPage from "./pages/projects/ProjectsPage";
import Messages from "./pages/admin/screens/messages/Messages";
import ViewMessages from "./pages/admin/screens/messages/ViewMessages";
import ManageNews from "./pages/admin/screens/news/ManageNews";
import EditNews from "./pages/admin/screens/news/EditNews";
import NewsCategories from "./pages/admin/screens/newscategories/NewsCategories";
import EditNewsCategories from "./pages/admin/screens/newscategories/EditNewsCategories";
import NewsPage from "./pages/news/NewsPage";
import NewsDetailPage from "./pages/newsDetail/NewsDetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/project/:slug" element={<ArticleDetailPage />} />
        <Route path="/project" element={<ProjectsPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:slug" element={<NewsDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="posts/manage" element={<ManagePosts />} />
          <Route path="posts/manage/edit/:slug" element={<EditPost />} />
          <Route path="news/manage" element={<ManageNews />} />
          <Route path="news/manage/edit/:slug" element={<EditNews />} />
          <Route path="categories/manage" element={<Categories />} />
          <Route
            path="categories/manage/edit/:slug"
            element={<EditCategories />}
          />
          <Route path="newscategories/manage" element={<NewsCategories />} />
          <Route
            path="newscategories/manage/edit/:slug"
            element={<EditNewsCategories />}
          />
          <Route path="users/manage" element={<Users />} />
          <Route path="messages/manage" element={<Messages />} />
          <Route path="messages/manage/view/:id" element={<ViewMessages />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
