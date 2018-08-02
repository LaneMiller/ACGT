import React, { Component } from 'react';
import iconLrg from '../acgt logo.jpg'
import iconSml from '../acgt-logo-small.png'
import VotingRoom from './VotingRoom'
import NowPlaying from "./NowPlaying";
import Home from '../components/Home'
import { Route, Switch, Link, NavLink } from 'react-router-dom';

class Room extends Component {
  state = {
    votingQueue: [],
    playlistId: 1,
    playlist: [],
    searchTerm: "",
    searchResults: [],
    showNowPlaying: false,
  };

  componentDidMount() {
    return fetch(`http://localhost:3000/api/v1/playlists/${this.state.playlistId}`).then(res => res.json()).then(this.setInitialPlaylist)
  }

  setInitialPlaylist = (playlistData) => {
    if (playlistData.media.length > 0) {
      const videos = playlistData.media.map(video => {
        const { id, video_id, title, default_thumb, medium_thumb, liveBroadcastContent } = video;

        return {id, videoId: video_id, title, defaultThumb: default_thumb, mediumThumb: medium_thumb, liveBroadcastContent}
      })

      this.setState({ playlist: videos })
    }
  }

  updateSearchTerm = e => {
    this.setState({
      searchTerm: e.target.value
    })
  };
  searchHandler = e => {
    e.preventDefault();
    this.fetchVideos()
  };

  fetchVideos = () => {
    //Always run rails server before React so that localhost port stays the same
    fetch(`http://localhost:3000/api/v1/search/${this.state.searchTerm}`)
      .then(res => res.json())
      .then(json =>
        this.setState({
          searchResults: [...json],
          searchTerm: "",
        }, () => console.log(this.state.searchResults)  )
      );
  }

  handleResultClick = (mediaObj) => {
    const { title, thumbnails, liveBroadcastContent } = mediaObj.snippet.data;

    const video = {videoId: mediaObj.id, title, defaultThumb: thumbnails.default.url, mediumThumb: thumbnails.medium.url, liveBroadcastContent}

    const duplicates = this.state.votingQueue.filter(obj => obj.videoId === video.videoId)
    if (duplicates.length === 0) {
      this.setState({
        votingQueue: [...this.state.votingQueue, video],
        searchResults: [],
      })
    } else {
      alert("This video is already in the queue!")
      this.setState({
        searchResults: [],
      })
    }
  }

  addToPlaylist = video => {
    const { videoId, title, defaultThumb, mediumThumb, liveBroadcastContent } = video;
    const mediaParams = {video_id: videoId, title, default_thumb: defaultThumb, medium_thumb: mediumThumb, liveBroadcastContent, playlist_id: this.state.playlistId}

    const setPlaylistState = (json) => {this.setPlaylistState(video, json)}

    this.persistMedium(mediaParams).then(setPlaylistState)
  };

  persistMedium = (mediaParams) => {
    const postConfig = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(mediaParams)
    }

    return fetch('http://localhost:3000/api/v1/media', postConfig).then(res => res.json())
  }

  setPlaylistState = (video, json) => {
    this.setState(
      prevState => {
        const playlist = [...prevState.playlist, {...video, id: json.id}]
        return { playlist }
      }
      , () => console.log("playlist:", this.state.playlist)
    )
  }

  removeVotingCard = video => {
    this.setState(prevState => {
      const votingQueue = prevState.votingQueue.filter(
        item => item !== video
      );
      return { votingQueue };
    });
  };

  updatePlaylist = () => {
    let newPlaylist = [...this.state.playlist]
    const removedSong = newPlaylist.shift()
    this.setState({
      playlist: newPlaylist
    })

    this.unpersistMedium(removedSong.id)
  }

  unpersistMedium = (id) => {
    fetch(`http://localhost:3000/api/v1/media/${id}`, {method: 'DELETE'} )
  }

  render() {
    const showNowPlaying = () => {
      this.setState({ showNowPlaying: true })
      window.history.pushState(null, null, '/nowPlaying')
      }
    const hideNowPlaying = () => {
      this.setState({ showNowPlaying: false })
    }

    return (
      <div>
        {/*<img className="icon" src={iconLrg} />*/}
        <img className="icon" src={iconSml} />
        <div className="nav">
          <a onClick={showNowPlaying}><h3>Now Playing</h3></a>
          <Link to="/votingBooth" onClick={hideNowPlaying}><h3>Voting Booth</h3></Link>
        </div>



        <Route
          path="/"
          render={() => (
            <div>
              <NowPlaying
                view={this.state.showNowPlaying}
                playlist={this.state.playlist}
                updatePlaylist={this.updatePlaylist}
              />
              <VotingRoom
                {...this.state}
                updateSearchTerm={this.updateSearchTerm}
                searchHandler={this.searchHandler}
                handleResultClick={this.handleResultClick}
                addToPlaylist={this.addToPlaylist}
                removeVotingCard={this.removeVotingCard}
              />
            </div>
          )}
        />
      </div>
    );
  }
}

// <Route
//   path="/"
//   exact
//   render={(props) => <Home {...props} />}
// />

export default Room;
