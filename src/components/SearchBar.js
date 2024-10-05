// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [year, setYear] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query, year);
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Year (optional)"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
