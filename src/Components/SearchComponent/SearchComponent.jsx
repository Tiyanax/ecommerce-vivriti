import React, { useState } from 'react';
import './SearchComponent.css';

const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const clearSearch = () => {
    setSearchValue('');
  };

  return (
    <div className="search-container">
      <input
        className='search-product'
        placeholder='Search products...'
        type="text"
        value={searchValue}
        onChange={handleInputChange}
      />
      {searchValue && (
          <span className="clear-icon" onClick={clearSearch}>
          </span>
        )}
    </div>
  );
};

export default SearchComponent;