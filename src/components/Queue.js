import React, { Component } from 'react';
import VotingCard from '../containers/VotingCard'
import { Card } from 'semantic-ui-react'

class Queue extends Component {

  renderVotingCards = () => {
    const { votingQueue } = this.props
    return votingQueue.map( mediaObj => {
      return <VotingCard key={mediaObj.id}
        addToPlaylist={this.props.addToPlaylist}
        removeVotingCard={this.props.removeVotingCard}
        mediaObj={mediaObj}
      />
    } )
  }

  render() {
    const votingCards = this.renderVotingCards()
    return (
      <div className="queue">
        <Card.Group>
          {votingCards}
        </Card.Group>
      </div>
    )
  }
}

export default Queue;
