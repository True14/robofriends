import React, { memo } from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        aria-label="Search Robots"
        id="search-box"
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default memo(SearchBox);
