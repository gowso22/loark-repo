import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import SearchResult from "../page/SearchResult";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
