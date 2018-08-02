import React, { Component } from 'react';

class Polling extends Component {
  render() {
    return (
      <div className="polling-info">
        <p>Time Remaining: {this.props.timer}</p>
        <button type="button" name="upvotes" onClick={this.props.handleVote}>⬆</button>
        <button type="button" name="downvotes" onClick={this.props.handleVote}>⬇</button>
        <p>upvotes: {this.props.upvotes}</p>
        <p>downvotes: {this.props.downvotes}</p>
      </div>
    )
  }
}

export default Polling;
