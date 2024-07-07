import React, { useEffect, useState } from 'react';
import Post from './Post';
import CreatePost from './CreatePost';
import '../styles/FeedStyles.css';
import { getPosts } from '../services/api';
import LoadMoreButton from './LoadMoreButton';

function Feed() {
    const [posts, setPosts] = useState([]);
    const [visiblePosts, setVisiblePosts] = useState(5);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getPosts();
            setPosts(data);
        };

        fetchPosts();
    }, []);

    const loadMorePosts = () => {
        setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 5);
    };

    const handlePostCreated = (newPost) => {
        setPosts([newPost, ...posts]);
    };

    return (
        <div className="feed">
            <CreatePost onPostCreated={handlePostCreated} />
            {posts.slice(0, visiblePosts).map((post) => (
                <Post key={post.id} post={post} />
            ))}
            {visiblePosts < posts.length && (
                <LoadMoreButton onClick={loadMorePosts} />
            )}
        </div>
    );
}

export default Feed;
