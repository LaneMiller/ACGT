import React, { Component } from 'react';
import VotingCard from '../containers/VotingCard'

class Queue extends Component {

  renderVotingCards = () => {
    const { votingQueue } = this.props
    return votingQueue.map( item => {
      return <VotingCard key={item}
        addToPlaylist={this.props.addToPlaylist}
        removeVotingCard={this.props.removeVotingCard}
        mediaTitle={item}
      />
    } )
  }

  render() {
    const votingCards = this.renderVotingCards()
    return (
      <div style={{margin: '100px 10px', border: '1px solid black'}} >
        {votingCards}
      </div>
    )
  }
}

export default Queue;
