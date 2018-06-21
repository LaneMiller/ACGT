import React, { Component } from 'react';

class Medium extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    const { data } = this.props.mediaObj.snippet
    console.log("mediaObj:", this.props.mediaObj);
    return (
      <div className="voting-medium" style={{border: "1px solid black"}}>
        <img src={data.thumbnails.medium.url}
          alt={data.title} />
        <h5>{data.title}</h5>
      </div>
    )
  }
}

export default Medium;
