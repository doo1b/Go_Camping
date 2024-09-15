import React, { useState } from "react";
import Search from "../../assets/Search";

const SearchDisplay = () => {
  const [searchForm, setSearchForm]= useState('');
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
        value={searchForm}
        onChange={(e)=>setSearchForm(e.target.value)}
        placeholder="캠핑장을 검색해 보세요!"
        className="outline-none pl-1"
      />
      <button>
        <Search />
      </button>
    </form>
  );
};

export default SearchDisplay;
