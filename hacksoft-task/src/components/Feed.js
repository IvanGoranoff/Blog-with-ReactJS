import React, { useEffect, useState } from 'react';
import Post from './Post';
import CreatePost from './CreatePost';
import LoadMoreButton from './LoadMoreButton';
import '../styles/FeedStyles.css';
import { getPosts } from '../services/api';

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

    const handlePostAdded = (newPost) => {
        setPosts([newPost, ...posts]);
    };

    const handleLoadMore = () => {
        setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 5);
    };

    return (
        <div className="feed">
            <CreatePost onPostAdded={handlePostAdded} />
            {posts.slice(0, visiblePosts).map((post) => (
                <Post key={post.id} post={post} />
            ))}
            {visiblePosts < posts.length && (
                <LoadMoreButton onClick={handleLoadMore} />
            )}
        </div>
    );
}

export default Feed;
