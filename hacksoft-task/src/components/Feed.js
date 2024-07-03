import React, { useState } from 'react';
import '../styles/FeedStyles.css';
import Post from './Post';
import CreatePost from './CreatePost';
import LoadMoreButton from './LoadMoreButton';

function Feed() {
    const [posts, setPosts] = useState([<Post key={1} />, <Post key={2} />]);

    const loadMorePosts = () => {
        const morePosts = [<Post key={posts.length + 1} />, <Post key={posts.length + 2} />];
        setPosts([...posts, ...morePosts]);
    };

    return (
        <div className="feed">
            <CreatePost />
            {posts}
            <LoadMoreButton onClick={loadMorePosts} />
        </div>
    );
}

export default Feed;
