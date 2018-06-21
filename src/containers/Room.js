import React, { Component } from 'react';
import VotingRoom from './VotingRoom'
import NowPlaying from "./NowPlaying";
import Home from '../components/Home'
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import YouTube from "react-youtube";

class Room extends Component {
  state = {
    votingQueue: [],
    playlist: [
      {
        id: "iYYRH4apXDo",
        auth: null,
        snippet: {
          data: {
            publishedAt: "2015-07-09T16:53:21.000Z",
            channelId: "UC8YgWcDKi1rLbQ1OtrOHeDw",
            title: "David Bowie – Space Oddity",
            description: "Official music video for Space Oddity by David Bowie. Produced & directed by Mick Rock – New York, December 1972. Copyright Mick Rock 2002. Subscribe to ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/iYYRH4apXDo/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/iYYRH4apXDo/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/iYYRH4apXDo/hqdefault.jpg",
                width: 480,
                height: 360
              }
            },
            channelTitle: "David Bowie",
            liveBroadcastContent: "none",
            includes_tags: false
          },
          auth: null
        }
      },
      {
        id: "eK4MyREDv1M",
        auth: null,
        snippet: {
          data: {
            publishedAt: "2018-06-21T11:30:01.000Z",
            channelId: "UC8YgWcDKi1rLbQ1OtrOHeDw",
            title: "David Bowie - Day In Day Out (Official Video)",
            description: "Official video for Day-In Day-Out By David Bowie. Stream the David Bowie greatest hits here ▷https://RhinoUK.lnk.to/ThisIsDavidBowieAY Subscribe here ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/eK4MyREDv1M/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/eK4MyREDv1M/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/eK4MyREDv1M/hqdefault.jpg",
                width: 480,
                height: 360
              }
            },
            channelTitle: "David Bowie",
            liveBroadcastContent: "none",
            includes_tags: false
          },
          auth: null
        }
      },
      {
        id: "iCJLOXqnT2I",
        auth: null,
        snippet: {
          data: {
            publishedAt: "2018-06-20T11:30:01.000Z",
            channelId: "UC8YgWcDKi1rLbQ1OtrOHeDw",
            title: "David Bowie - Absolute Beginners (Official Video)",
            description: "Official video for Absolute Beginners By David Bowie. Stream the David Bowie greatest hits here ▷https://RhinoUK.lnk.to/ThisIsDavidBowieAY Subscribe here ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/iCJLOXqnT2I/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/iCJLOXqnT2I/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/iCJLOXqnT2I/hqdefault.jpg",
                width: 480,
                height: 360
              }
            },
            channelTitle: "David Bowie",
            liveBroadcastContent: "none",
            includes_tags: false
          },
          auth: null
        }
      },
      {
        id: "v--IqqusnNQ",
        auth: null,
        snippet: {
          data: {
            publishedAt: "2009-02-28T05:44:44.000Z",
            channelId: "UCh8hlIe7EcmVilHjnrE7gNw",
            title: "David Bowie - Life On Mars?",
            description: "Music video by David Bowie performing Life On Mars?. Taken from the album 'Heroes' Buy the David Bowie back catalogue on iTunes here: ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/v--IqqusnNQ/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/v--IqqusnNQ/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/v--IqqusnNQ/hqdefault.jpg",
                width: 480,
                height: 360
              }
            },
            channelTitle: "DavidBowieVEVO",
            liveBroadcastContent: "none",
            includes_tags: false
          },
          auth: null
        }
      },
      {
        id: "lXgkuM2NhYI",
        auth: null,
        snippet: {
          data: {
            publishedAt: "2018-06-13T11:00:08.000Z",
            channelId: "UC8YgWcDKi1rLbQ1OtrOHeDw",
            title: "David Bowie - Heroes (Official video)",
            description: "Official video for Heroes By David Bowie. Stream the David Bowie greatest hits here ▷ https://RhinoUK.lnk.to/ThisIsDavidBowieAY Subscribe here ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/lXgkuM2NhYI/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/lXgkuM2NhYI/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/lXgkuM2NhYI/hqdefault.jpg",
                width: 480,
                height: 360
              }
            },
            channelTitle: "David Bowie",
            liveBroadcastContent: "none",
            includes_tags: false
          },
          auth: null
        }
      }
    ],
    searchTerm: "",
    searchResults: [],
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

  onPlayerStateChange() {
    let newPlaylist = [...this.state.playlist].shift();
    this.setState({
      playlist: newPlaylist
    })
  }

  render() {
    return (
      <div>
        <div className="nav">
          <Link to="/nowPlaying">Now Playing</Link>
          <Link to="/votingBooth">Voting Booth</Link>
        </div>

        <Route
          path="/"
          exact
          render={(props) => <Home {...props} />}
        />

        <Route
          path="/votingBooth"
          exact
          render={() => <VotingRoom
            {...this.state}
            updateSearchTerm={this.updateSearchTerm}
            searchHandler={this.searchHandler}
            handleResultClick={this.handleResultClick}
            addToPlaylist={this.addToPlaylist}
            removeVotingCard={this.removeVotingCard}
          />}
        />

        <Route
          path="/nowPlaying"
          exact
          render={() => <NowPlaying
            playlist={this.state.playlist}
            onPlayerStateChange={this.onPlayerStateChange}
          />}
        />
      </div>
    );
  }
}

export default Room;
