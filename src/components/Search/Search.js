import React from "react";
import "./search.css";

const Search = () => {
  const searchChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="search-main">
      <h1 className="search-header">SEARCH</h1>
      <form
        action=""
        className="input-group search-bar search-bar--page"
        role="search"
      >
        <input
          type="text"
          placeholder="Search our store"
          className="input-group-field"
          onChange={(e) => {
            searchChange(e);
          }}
        />
        <div className="input-group-btn">
          <button type="submit" className="btn">
            <i className="pi pi-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
