import React, { useContext, useState } from 'react';
import { newContext } from '../../App';
import './../../Style/Search.css'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { setData } = useContext(newContext)

  const handleSearch = () => {
    let query = searchQuery.toLowerCase()
    setData((pre) => {
      return pre.filter((item) => {
        return (
          item.title.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
        )
      })
    })
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}/>
      <button onClick={handleSearch} >Search</button>
    </div>
  );
};

export default SearchBar;
