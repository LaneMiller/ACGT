import React, { Component } from 'react';
import Search from '../components/Search'
import Queue from '../components/Queue'

class VotingRoom extends Component {
  render() {
    return (
      <div>
        <Search term={this.props.searchTerm}
          updateSearchTerm={this.props.updateSearchTerm}
          searchHandler={this.props.searchHandler} />
        <Queue
          votingQueue={this.props.votingQueue}
          addToPlaylist={this.props.addToPlaylist}
          removeVotingCard={this.props.removeVotingCard}/>
      </div>
    )
  }
}

export default VotingRoom;
