import React, { useEffect, useState } from 'react';
import Post from './Post';
import '../styles/FeedStyles.css';
import { getPosts } from '../services/api';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getPosts();
            setPosts(data);
        };

        fetchPosts();
    }, []);

    return (
        <div className="feed">
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}

export default Feed;
