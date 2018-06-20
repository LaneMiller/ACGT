import React, { Component } from 'react';
import VotingRoom from './VotingRoom'

class Room extends Component {
  state = {
    votingQueue: ["While my guitar gently weeps"],
    playlist: [],
    searchTerm: ""
  };

  updateSearchTerm = e => {
    console.log(e.target.value);
    this.setState({
      searchTerm: e.target.value
    })
  };

  searchHandler = e => {
    e.preventDefault();

    fetch(`http://localhost:3003/api/v1/search/${this.state.searchTerm}`)
      .then(res => res.json())
      .then(json =>
        this.setState({
          votingQueue: [...this.state.votingQueue, this.state.searchTerm],
          searchTerm: ""
        }, () => console.log(json))
      );

    console.log(this.state.searchTerm);
    console.log(this.state.votingQueue);

  };

  addToPlaylist = queueItem => {
    this.setState(
      prevState => {
        const playlist = [...prevState.playlist, queueItem];
        return { playlist };
      },
      () => console.log(this.state.playlist)
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
          addToPlaylist={this.addToPlaylist}
          removeVotingCard={this.removeVotingCard}
        />
      </div>
    );
  }
}

export default Room;
