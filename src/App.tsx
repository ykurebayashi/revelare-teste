import { BrowserRouter, Route, Routes } from "react-router";
import { Blog } from "./modules/Blog";
import { DetailedPost } from "./modules/Blog/Detail";
import { Home } from "./modules/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/post/:id" element={<DetailedPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
