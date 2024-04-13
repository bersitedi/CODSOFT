import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import HomePage from "./pages/home/HomePage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/register/RegisterPage";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import ContactForm from "./pages/contact/ContactForm";
import Services from "./pages/services/Services";

function App() {
  return (
    <div className="App font-sans">
      <Routes>
        <Route path="/blog/:id" element={<ArticleDetailPage />} />
        <Route index path="/" element={<HomePage />} />
        <Route index path="/register" element={<RegisterPage />} />
        <Route index path="/login" element={<LoginPage />} />
        <Route index path="/profile" element={<ProfilePage />} />
        <Route index path="/contact" element={<ContactForm />} />
        <Route index path="/services" element={<Services />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
