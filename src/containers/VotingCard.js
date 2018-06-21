import React, { Component } from 'react';
import Medium from '../components/Medium'
import Polling from '../components/Polling'

class VotingCard extends Component {
  state = {
    upvotes: 0,
    downvotes: 0,
    timer: 60,
  }

  componentDidMount() {
    this.startCountdown()
  }

  startCountdown = () => {
    this.interval = setInterval( () => {
      this.setState( prevState => ({
        timer: prevState.timer - 1
      }), this.unmountCard )
    }, 1000)
  }

  unmountCard = () => {
    if (this.state.timer === 0) {
      if (this.state.upvotes > this.state.downvotes) {
        this.props.addToPlaylist(this.props.mediaObj)
        this.props.removeVotingCard(this.props.mediaObj)
      }
      else if (this.state.upvotes === this.state.downvotes && !this.state.revived) {
        this.setState( prevState => ({
          timer: prevState.timer + 15,
          revived: true,
        }) )
      } else {
        this.props.removeVotingCard(this.props.mediaObj)
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  handleVote = (e) => {
    const vote = e.target.name //vote will either equal 'upvotes' or 'downvotes'

    this.setState( prevState => {
      return {[vote]: prevState[vote] + 1} //this increments the prevState of either
    })                                // this.state.upvotes or this.state.downvotes
  }

  render() {
    return (
      <div className="voting-card">
        <Medium mediaObj={this.props.mediaObj}/>
        <Polling {...this.state} handleVote={this.handleVote} />
      </div>
    )
  }
}

export default VotingCard;
