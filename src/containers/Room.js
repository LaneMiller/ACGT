import React, { Component } from 'react';
import VotingRoom from './VotingRoom'
import NowPlaying from "./NowPlaying";

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
        id: "_YC3sTbAPcU",
        auth: null,
        snippet: {
          data: {
            publishedAt: "2018-06-19T11:30:01.000Z",
            channelId: "UC8YgWcDKi1rLbQ1OtrOHeDw",
            title: "David Bowie - China Girl (Official Video)",
            description: "Official video for China Girl By David Bowie. Stream the David Bowie greatest hits here ▷ https://RhinoUK.lnk.to/ThisIsDavidBowieAY Subscribe here ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/_YC3sTbAPcU/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/_YC3sTbAPcU/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/_YC3sTbAPcU/hqdefault.jpg",
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
        id: "N4d7Wp9kKjA",
        auth: null,
        snippet: {
          data: {
            publishedAt: "2009-03-06T15:01:08.000Z",
            channelId: "UC2kTZB_yeYgdAg4wP2tEryA",
            title: "David Bowie - Let's Dance",
            description: "Music video by David Bowie performing Let's Dance. Taken from the album 'Heroes' Buy the David Bowie back catalogue on iTunes here: ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/N4d7Wp9kKjA/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/N4d7Wp9kKjA/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/N4d7Wp9kKjA/hqdefault.jpg",
                width: 480,
                height: 360
              }
            },
            channelTitle: "emimusic",
            liveBroadcastContent: "none",
            includes_tags: false
          },
          auth: null
        }
      }
    ],
    searchTerm: ""
  };

  updateSearchTerm = e => {
    this.setState({
      searchTerm: e.target.value
    })
  };

  searchHandler = e => {
    e.preventDefault();

    fetch(`http://localhost:3003/api/v1/search/${this.state.searchTerm}`)
      .then(res => res.json())
      .then(json =>
        this.setState({
          votingQueue: [...this.state.votingQueue, ...json],
          searchTerm: ""
        }, () => console.log(this.state.votingQueue))
      );

    console.log(this.state.searchTerm);
    console.log(this.state.votingQueue);

  };

  addToPlaylist = queueItem => {
    this.setState(
      prevState => {
        const playlist = [...prevState.playlist, queueItem];
        return { playlist };
      },
      () => console.log(this.state.playlist)
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

  onPlayerStateChange = () => {
    let newPlaylist = [...this.state.playlist].shift();
    this.setState({
      playlist: newPlaylist
    })
  }

  render() {
    return (
      <div>
        <VotingRoom
          {...this.state}
          updateSearchTerm={this.updateSearchTerm}
          searchHandler={this.searchHandler}
          addToPlaylist={this.addToPlaylist}
          removeVotingCard={this.removeVotingCard}
        />
        <NowPlaying 
          playlist={this.state.playlist} 
          onPlayerStateChange={this.onPlayerStateChange} 
        />
      </div>
    );
  }
}

export default Room;
