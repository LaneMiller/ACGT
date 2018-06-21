import React, { Component } from 'react';
import ResultInfo from './ResultInfo'

class SearchResults extends Component {
  renderResults = () => {
    return this.props.results.map( mediaObj => <ResultInfo key={mediaObj.id} mediaObj={mediaObj} handleResultClick={this.props.handleResultClick} /> )
  }

  render() {
    const results = this.renderResults()
    return (
      <div className='overlay'>
        {results}
      </div>
    )
  }
}

export default SearchResults;
