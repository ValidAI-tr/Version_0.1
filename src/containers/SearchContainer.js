import React from 'react';
import { connect, useSelector } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

const searchQuery = state => state.searchQuery;

var SearchContainer = (props) => {
  // const val = useSelector(searchQuery);
  // console.log(val);
  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        value={props.searchQuery}
        onChange={(e) => props.handleSearchInputChange(e)}
      />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );

};

export default connect((state, ownProps) => {
  const test = '';
  return {test};
})(SearchContainer);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.
