import React, { Component } from 'react';
// import MediaWindow from "../components/MediaWindow";

class Playlist extends Component {
  renderPlaylist = () => {
    console.log(this.props.playlist);
    if (this.props.playlist.length > 0) {
      const playlistMinusFirst = this.props.playlist.slice(1)
      return playlistMinusFirst.map((song) =>
        <React.Fragment>
          <img src={song.snippet.data.thumbnails.default.url} alt={song.id}></img>
          <h4 key={song.id} id={song.id} >
            {song.snippet.data.title}
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
