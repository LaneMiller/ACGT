import React, { Component } from "react";
import YouTube from "react-youtube";

class MediaWindow extends Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

  renderMediaComponent = () => {
    const opts = {
      height: '440',
      width: '720',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        iv_load_policy: 3,
      }
    };

    if (this.props.playlist.length > 0) {
      return <YouTube
        videoId={this.props.playlist[0].videoId}
        opts={opts}
        onEnd={this.props.updatePlaylist}
      />
    } else {
      null
    }
  }

  render() {
    const media = this.renderMediaComponent()

    return (
      <div className="media-window">
        {media}
      </div>
    );
  }
}

export default MediaWindow;
