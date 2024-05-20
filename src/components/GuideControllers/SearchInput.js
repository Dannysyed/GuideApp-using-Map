import React from "react";

const SearchInput = ({ onSearch, className }) => {
  const [query, setQuery] = React.useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className={`w-full ${className}`}
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchInput;
