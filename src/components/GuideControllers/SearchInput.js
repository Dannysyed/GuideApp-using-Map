import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchInput({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div className="w-[21rem] max-w-sm  my-6 z-5">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
          className="p-3 border border-black w-full"
          aria-label="Search input"
        />
        <button
          type="submit"
          className="p-4 bg-blue-500 text-white  hover:bg-blue-600"
          aria-label="Search button"
        >
          <FaSearch size={20} />
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
