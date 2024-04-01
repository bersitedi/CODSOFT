import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import HomePage from "./pages/home/HomePage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/register/RegisterPage";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/login/LoginPage";

function App() {
  return (
    <div className="App font-sans">
      <Routes>
        <Route path="/blog/:id" element={<ArticleDetailPage />} />
        <Route index path="/" element={<HomePage />} />
        <Route index path="/register" element={<RegisterPage />} />
        <Route index path="/login" element={<LoginPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
