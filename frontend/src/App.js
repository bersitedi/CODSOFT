import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import HomePage from "./pages/home/HomePage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/register/RegisterPage";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import ContactForm from "./pages/contact/ContactForm";
import Services from "./pages/services/Services";
import AboutUs from "./pages/about/AboutUs";
import Projects from "./pages/projects/Projects";
import AdminLayout from "./pages/admin/AdminLayout";
import Admin from "./pages/admin/screens/Admin";
import NewPost from "./pages/admin/screens/posts/NewPost";
import ManagePosts from "./pages/admin/screens/posts/ManagePosts";
import EditPost from "./pages/admin/screens/posts/EditPost";

function App() {
  return (
    <div className="App font-sans">
      <Routes>
        <Route path="/project/:slug" element={<ArticleDetailPage />} />
        <Route index path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="posts/new" element={<NewPost />} />
          <Route path="posts/manage" element={<ManagePosts />} />
          <Route path="posts/manage/edit/:slug" element={<EditPost />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
