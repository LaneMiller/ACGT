import React from 'react';

const Home = (props) => {
  const votingBooth = () => {props.history.push('/votingBooth')}
  return (
    <div className="home">
      <div id="host">
        <h3>Host</h3>
      </div>
      <span>||</span>
      <div id="join">
        <h3 onClick={votingBooth}>Join</h3>
      </div>
    </div>
  )
}

export default Home;
