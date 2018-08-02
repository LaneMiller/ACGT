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
    playlist: [],
    searchTerm: "",
    searchResults: [],
    showNowPlaying: false,
  };

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
    const duplicates = this.state.votingQueue.filter(obj => obj.id === mediaObj.id)
    if (duplicates.length === 0) {
      this.setState({
        votingQueue: [...this.state.votingQueue, mediaObj],
        searchResults: [],
      })
    } else {
      alert("This video is already in the queue!")
      this.setState({
        searchResults: [],
      })
    }
  }

  addToPlaylist = queueItem => {
    // const mediaParams = {video_id: queueItem.id, snippet:{data:{title: queueItem.snippet.data.title, thumbnails:{default:{url: queueItem.snippet.data.thumbnails.default.url}, medium:{url: queueItem.snippet.data.thumbnails.medium.url}}, liveBroadcastContent: queueItem.snippet.data.liveBroadcastContent}}}
    const { title, thumbnails, liveBroadcastContent } = queueItem.snippet.data;

    const mediaParams = {video_id: queueItem.id, title: title, default: thumbnails.default.url, medium: thumbnails.medium.url, liveBroadcastContent}

    this.setState(
      prevState => {
        const playlist = [...prevState.playlist, queueItem]
        return { playlist }
      }
      , () => console.log("playlist:", this.state.playlist)
    )

    // this.persistMedium(mediaParams)
  };

  persistMedium = (mediaParams) => {
    const postConfig = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(mediaParams)
    }
    return fetch('http://localhost:3000/api/v1/media', postConfig).then(res => res.json()).then(json => ({id: json.id, video_id: json.video_id, snippet:{data:{title: json.title, thumbnails:{default:{url: json.default}, medium:{url: json.medium}}, liveBroadcastContent: json.liveBroadcastContent}}}))
  }

  removeVotingCard = queueItem => {
    this.setState(prevState => {
      const votingQueue = prevState.votingQueue.filter(
        item => item !== queueItem
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
    console.log(removedSong.id);
    // this.unpersistMedium(removedSong.id)
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
