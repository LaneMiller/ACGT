import React, { Component } from "react";

class MediaWindow extends Component {
  constructor() {
    super()

    window["onYouTubeIframeAPIReady"] = e => {
      this.YT = window["YT"];
      this.player = new window["YT"].Player("player", {
        videoId: this.props.playlist[0].id,
        events: {
          onStateChange: this.props.onPlayerStateChange.bind(this),
          onReady: ''
        }
      })
    }
  }

  render() {
    const url = `https://www.youtube.com/embed/${this.props.playlist[0].id}?enablejsapi=1&version=3&amp;
    autoplay=1&amp;showinfo=0`;

    return (
      <div>
        <iframe
          id="yt-video-player"
          type="text/html"
          width="640"
          height="390"
          src={url}
          frameborder="0"
          title={`${this.props.playlist[0].snippet.data.title}`}
        />
      </div>
    );
  }
}

export default MediaWindow;