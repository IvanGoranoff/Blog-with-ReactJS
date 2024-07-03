import React from 'react';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Feed from './components/Feed';
import './styles/App.css';
import backgroundSvg from './assets/bgground.svg';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="background-image" style={{ backgroundImage: `url(${backgroundSvg})` }}></div>
      <div className="content">
        <ProfileCard />
        <div className="feed-container">
          <Feed />
        </div>
      </div>
    </div>
  );
}

export default App;
