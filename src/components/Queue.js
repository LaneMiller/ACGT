import React, { Component } from 'react';
import VotingCard from '../containers/VotingCard'
import { Card } from 'semantic-ui-react'

class Queue extends Component {

  renderVotingCards = () => {
    const { votingQueue } = this.props
    return votingQueue.map( video => {
      return <VotingCard key={video.videoId}
        addToPlaylist={this.props.addToPlaylist}
        removeVotingCard={this.props.removeVotingCard}
        video={video}
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
