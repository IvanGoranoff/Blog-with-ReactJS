import React from 'react';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Feed from './components/Feed';
import CreatePost from './components/CreatePost';
import LoadMoreButton from './components/LoadMoreButton';

function App() {
  const handlePost = (content) => {
    console.log("New post:", content);
  };

  return (
    <div>
      <Header />
      <div style={{ padding: '20px' }}>
        <ProfileCard
          name="Ivan G"
          position="front end, HackSoft"
          avatar="avatar_image"
          likes={210}
          posts={4}
        />
        <CreatePost onPost={handlePost} />
        <Feed />
        <LoadMoreButton onClick={() => console.log("Load more posts")} />
      </div>
    </div>
  );
}

export default App;
