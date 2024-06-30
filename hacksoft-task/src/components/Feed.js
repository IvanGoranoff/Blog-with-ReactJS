import React from 'react';
import '../styles/FeedStyles.css';
import Post from './Post';
import CreatePost from './CreatePost';
import LoadMoreButton from './LoadMoreButton';

function Feed() {
    return (
        <div className="feed">
            <CreatePost />
            <Post />
            <Post />
            <LoadMoreButton />
        </div>
    );
}

export default Feed;
