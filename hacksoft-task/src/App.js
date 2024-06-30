import React from 'react';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Feed from './components/Feed';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <ProfileCard />
        <div className="feed-container">
          <Feed />
        </div>
      </div>
      <div className="orange-background"></div>
    </div>
  );
}

export default App;
