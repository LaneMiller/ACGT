import React, { Component } from 'react';
// import MediaWindow from "../components/MediaWindow";

class Playlist extends Component {
  renderPlaylist = () => {
    if (this.props.playlist.length > 0) {
      const upNext = [...this.props.playlist].slice(1)

      return upNext.map((song) =>
        <React.Fragment>
          <img src={song.defaultThumb} alt={song.videoId}></img>
          <h4 key={song.id} id={song.id} >
            {song.title}
          </h4>
        </React.Fragment>
      )
    } else {
      return <h3>You don't have any videos in your playlist. Go add some!</h3>
    }
  }

  render() {
    // const playlist = this.props.playlist.map((song) =>
    //   <MediaWindow song={song} key={songid} />
    // );
    const playlist = this.renderPlaylist()

    return (
      <ul className="playlist-list">
        <h3>Up Next:</h3>
        {playlist}
      </ul>
    );
  }

}

export default Playlist;
