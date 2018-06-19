import React, { Component } from 'react';

class Medium extends Component {
  render() {
    return (
      <div style={{border: "1px solid black"}}>
        <h3>Inside "Medium" Component</h3>
        <h5>{this.props.mediaTitle}</h5>
      </div>
    )
  }
}

export default Medium;
