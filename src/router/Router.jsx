import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "../pages/indexpage/IndexPage";
import MainPage from "../pages/mainpage/MainPage";
import SearchResultPage from "../pages/searchresultpage/SearchResultPage";
import DetailPage from "../pages/detailpage/DetailPage";
import GuidePage from "../pages/guidepage/GuidePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/searchresult" element={<SearchResultPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/guide" element={<GuidePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;