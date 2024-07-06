import React, { useState, useEffect } from 'react';
import '../styles/FeedStyles.css';
import Post from './Post';
import CreatePost from './CreatePost';
import LoadMoreButton from './LoadMoreButton';
import { fetchPosts, submitPost } from '../services/api';

function Feed() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchPosts().then(data => setPosts(data));
    }, []);

    const handlePostSubmit = (content) => {
        const newPost = { id: posts.length + 1, content, user: 'Ivan Goranov', likes: 0, time: new Date().toISOString() };
        setPosts([newPost, ...posts]);
        submitPost(newPost); // Simulating an API call to submit the post
    };

    const loadMorePosts = () => {
        const nextPage = currentPage + 1;
        fetch(`http://localhost:5000/posts?_page=${nextPage}&_limit=5`)
            .then(response => response.json())
            .then(data => {
                setPosts([...posts, ...data]);
                setCurrentPage(nextPage);
            });
    };

    return (
        <div className="feed">
            <CreatePost onPostSubmit={handlePostSubmit} />
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
            <LoadMoreButton onClick={loadMorePosts} />
        </div>
    );
}

export default Feed;
