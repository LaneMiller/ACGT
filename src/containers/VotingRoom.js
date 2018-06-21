import React, { Component } from 'react';
import Search from '../components/Search'
import Queue from '../components/Queue'
import SearchResults from '../components/SearchResults'

class VotingRoom extends Component {
  renderSearchResults = () => {
    if (this.props.searchResults.length > 0) {
      return <SearchResults className="overlay" results={this.props.searchResults}
        handleResultClick={this.props.handleResultClick}/>
    }
  }

  render() {
    const searchResults = this.renderSearchResults()
    return (
      <div className="voting-room">
        <Search term={this.props.searchTerm}
          updateSearchTerm={this.props.updateSearchTerm}
          searchHandler={this.props.searchHandler} />
        {searchResults}
        <Queue
          votingQueue={this.props.votingQueue}
          addToPlaylist={this.props.addToPlaylist}
          removeVotingCard={this.props.removeVotingCard}/>
      </div>
    )
  }
}

export default VotingRoom;
