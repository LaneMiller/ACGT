import React from 'react';

const Search = (props) => {
  return (
    <form id="search" onSubmit={props.searchHandler}>
      <input type='text' value={props.term}
        onChange={props.updateSearchTerm} placeholder="Media Search" />
      <button type='submit'>Search</button>
    </form>
  )
}

export default Search;
