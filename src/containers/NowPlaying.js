import React, { Component } from 'react';
import Playlist from './Playlist'
import MediaWindow from "../components/MediaWindow";

class NowPlaying extends Component {
  render() {
    return (
      <div>
        <Playlist playlist={this.props.playlist} />
        <MediaWindow 
          playlist={this.props.playlist} 
          onPlayerStateChange={this.props.onPlayerStateChange}
        />
      </div>
    )
  }
}

export default NowPlaying;
