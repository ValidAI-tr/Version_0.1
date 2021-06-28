
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


const Search = (props) => {
  const handleInputChange = (e) => {
    const { getYouTubeVideos } = props;
    const { value } = e.target;
    const dispatch = useDispatch();
    dispatch(getYouTubeVideos(value));
  };


  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e)}
      />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

export default Search;
