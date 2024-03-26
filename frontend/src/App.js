import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import HomePage from "./pages/home/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App font-sans">
      <Routes>
        <Route path="/blog/:id" element={<ArticleDetailPage />} />
        <Route index path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
