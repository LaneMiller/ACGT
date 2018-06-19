import React, { Component } from 'react';
import VotingRoom from './VotingRoom'

class Room extends Component {
  state = {
    votingQueue: ["While my guitar gently weeps"],
    playlist: [],
    searchTerm: '',
  }

  updateSearchTerm = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  searchHandler = (e) => {
    e.preventDefault()
    //TEMP way to add to votingQueue
    this.setState({
      votingQueue: [...this.state.votingQueue, this.state.searchTerm],
      searchTerm: '',
    })
  }

  addToPlaylist = (queueItem) => {
    this.setState(prevState => {
      const playlist = [...prevState.playlist, queueItem]
      return { playlist }
    }, () => console.log(this.state.playlist) )
  }

  removeVotingCard = (queueItem) => {
    this.setState(prevState => {
      const votingQueue = prevState.votingQueue.filter(item => item !== queueItem)
      return { votingQueue }
    })
  }

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
    )
  }
}

export default Room;
