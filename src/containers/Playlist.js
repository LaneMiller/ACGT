import React, { Component } from 'react';
// import MediaWindow from "../components/MediaWindow";

class Playlist extends Component {
  render() {
    // const playlist = this.props.playlist.map((song) =>
    //   <MediaWindow song={song} key={songid} />
    // );

    return (
      <ul>
        {this.props.playlist.map((song) =>
          <li key={song.id} id={song.id} >
            <img src={song.snippet.data.thumbnails.default.url} alt={song.id}></img>
            {song.snippet.data.title}
          </li>
        )}
      </ul>
    );
  }

}

export default Playlist;
