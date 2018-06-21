import React, { Component } from 'react';
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
    this.setState(
      prevState => {
        const playlist = [...prevState.playlist, queueItem];
        return { playlist };
      }
      , () => console.log("playlist:", this.state.playlist)
    );
  };

  removeVotingCard = queueItem => {
    this.setState(prevState => {
      const votingQueue = prevState.votingQueue.filter(
        item => item !== queueItem
      );
      return { votingQueue };
    });
  };

  updatePlaylist = () => {
    let newPlaylist = [...this.state.playlist].slice(1);
    this.setState({
      playlist: newPlaylist
    })
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
        <div className="nav">
          <a onClick={showNowPlaying}>Now Playing</a>
          <Link to="/votingBooth" onClick={hideNowPlaying}>Voting Booth</Link>
        </div>

        <Route
          path="/"
          exact
          render={(props) => <Home {...props} />}
        />

        <Route
          path="/votingBooth"
          exact
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

export default Room;
