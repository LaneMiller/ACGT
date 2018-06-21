import React, { Component } from "react";
import YouTube from "react-youtube";

class MediaWindow extends Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

  renderMediaComponent = () => {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    if (this.props.playlist.length > 0) {
      return <YouTube
        videoId={this.props.playlist[0].id}
        opts={opts}
        onEnd={this.props.updatePlaylist}
      />
    } else {
      return <h5>You don't have any videos in your playlist. Go add some!</h5>
    }
  }

  render() {
    const media = this.renderMediaComponent()

    return (
      <div>
        {media}
      </div>
    );
  }
}

export default MediaWindow;
