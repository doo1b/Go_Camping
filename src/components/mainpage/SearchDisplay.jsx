import React, { useState } from "react";
import Search from "../../assets/Search";

const SearchDisplay = () => {
  const [searchForm, setSearchForm] = useState("");
  const [keyword, setKeyword] = useState("");
  const submitSearchForm = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={submitSearchForm}
      className="w-[255px] h-[45px] flex justify-between items-center px-4 z-10 rounded-full shadow-mainBoxShadow bg-white fixed top-[22px] right-6"
    >
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="캠핑장을 검색해 보세요!"
        className="pl-1 outline-none"
      />
      <button>
        <Search />
      </button>
    </form>
  );
};

export default SearchDisplay;
