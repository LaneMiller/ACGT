import React, { Component } from 'react';
import VotingRoom from './VotingRoom'

class Room extends Component {
  state = {
    votingQueue: [],
    playlist: [],
    searchTerm: "",
    searchResults: [],
  };

  updateSearchTerm = e => {
    this.setState({
      searchTerm: e.target.value
    })
  };
  searchHandler = e => {
    e.preventDefault();
    this.fetchVideos()
  };

  fetchVideos = () => {
    //Always run rails server before React so that localhost port stays the same
    fetch(`http://localhost:3000/api/v1/search/${this.state.searchTerm}`)
      .then(res => res.json())
      .then(json =>
        this.setState({
          searchResults: [...json],
          searchTerm: "",
        }, () => console.log(this.state.searchResults)  )
      );
  }

  handleResultClick = (mediaObj) => {
    console.log(mediaObj.snippet.data.title);
    this.setState({
      votingQueue: [...this.state.votingQueue, mediaObj],
      searchResults: [],
    })
  }

  addToPlaylist = queueItem => {
    this.setState(
      prevState => {
        const playlist = [...prevState.playlist, queueItem];
        return { playlist };
      }
      , () => console.log("playlist:", this.state.playlist)
    );
  };

  removeVotingCard = queueItem => {
    this.setState(prevState => {
      const votingQueue = prevState.votingQueue.filter(
        item => item !== queueItem
      );
      return { votingQueue };
    });
  };

  render() {
    return (
      <div>
        <VotingRoom
          {...this.state}
          updateSearchTerm={this.updateSearchTerm}
          searchHandler={this.searchHandler}
          handleResultClick={this.handleResultClick}
          addToPlaylist={this.addToPlaylist}
          removeVotingCard={this.removeVotingCard}
        />
      </div>
    );
  }
}

export default Room;
