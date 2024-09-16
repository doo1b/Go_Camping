import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "../pages/indexpage/IndexPage";
import MainPage from "../pages/mainpage/MainPage";
import SearchResultPage from "../pages/searchresultpage/SearchResultPage";
import DetailPage from "../pages/detailpage/DetailPage";
import GuidePage from "../pages/guidepage/GuidePage";
import DebugData from "../pages/debugpage/debugData";
import Layout from "../components/layout/Layout";

const Router = () => {
  // 레이아웃 컴포넌트로 인해 중첩 라우트 설정할 예정?
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/searchresult" element={<SearchResultPage />} />
          <Route path="/detail/:contentId" element={<DetailPage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/data" element={<DebugData />} />
        </Route>
        <Route path="/main" element={<MainPage />} />
        <Route index element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
