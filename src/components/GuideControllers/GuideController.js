import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../store/counterSlice";

const GuideController = () => {
  const dispatch = useDispatch();
  const handleSearch = (query) => {
    console.log("Searching for:", query);
    dispatch(setSearchValue(query)); // Dispatching the action creator with the query as payload
  };

  return (
    <div className="flex flex-col w-[100%]  border-black basis-1/3 items-center rounded-lg shadow drop-shadow-right p-4 gap-10 ">
      <h1 className="text-3xl font-bold mb-4 z-50">Welcome to Map Guide</h1>
      <SearchInput onSearch={handleSearch} />
    </div>
  );
};

export default GuideController;
