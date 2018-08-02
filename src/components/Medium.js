import React, { Component } from 'react';

class Medium extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    const { video } = this.props

    return (
      <div className="voting-medium">
        <img src={video.mediumThumb}
          alt={video.title} />
        <h5>{video.title}</h5>
      </div>
    )
  }
}

export default Medium;
