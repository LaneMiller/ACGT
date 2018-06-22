import React, { Component } from 'react';
import Playlist from './Playlist'
import MediaWindow from "../components/MediaWindow";

class NowPlaying extends Component {
  render() {
    const view = this.props.view ? 'block' : 'none'
    return (
      <div className='now-playing' id="now-playing" style={{ display: view }}>
        <Playlist playlist={this.props.playlist} />
        <MediaWindow
          playlist={this.props.playlist}
          updatePlaylist={this.props.updatePlaylist}
          />
      </div>
    )
  }
}

export default NowPlaying;
