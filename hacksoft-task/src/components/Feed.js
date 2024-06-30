import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';
import LoadMoreButton from './LoadMoreButton';
import '../styles/FeedStyles.css';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchPosts();
    }, [page]);

    const fetchPosts = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
            setPosts(prevPosts => [...prevPosts, ...response.data]);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const loadMorePosts = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <div className="feed">
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
            <LoadMoreButton loadMore={loadMorePosts} />
        </div>
    );
}

export default Feed;
