import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../store/counterSlice";
import SearchInput from "./SearchInput";

const GuideController = () => {
  const dispatch = useDispatch();
  const handleSearch = (query) => {
    console.log("Searching for:", query);
    dispatch(setSearchValue(query)); // Dispatching the action creator with the query as payload
  };

  return (
    <div className="flex flex-col w-full max-w-md bg-gradient-to-r from-blue-100 to-blue-200 border border-gray-300 rounded-lg shadow-lg p-8 gap-6 hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
      <div className="flex items-center justify-center mb-4">
        <FaMapMarkerAlt className="text-5xl text-blue-500" />
      </div>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-2 text-center">
        Welcome to Map Guide
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Your ultimate tool for navigating and exploring new places.
      </p>
      <SearchInput
        onSearch={handleSearch}
        className="border border-gray-400 rounded-lg shadow-inner p-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
      />
    </div>
  );
};

export default GuideController;
