import React, { Component } from "react";
import YouTube from "react-youtube";

class MediaWindow extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId={this.props.playlist[0].id}
        opts={opts}
        onReady={this._onReady}
        onEnd={this.props.updatePlaylist}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}

export default MediaWindow;
