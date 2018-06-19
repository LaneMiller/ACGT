import React from 'react';

const Search = (props) => {
  return (
    <form onSubmit={props.searchHandler} style={{marginTop: '80px'}}>
      <input type='text' value={props.term}
        onChange={props.updateSearchTerm} placeholder="Add something good!" />
      <button type='submit'>Search</button>
    </form>
  )
}

export default Search;
