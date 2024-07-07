import React, { useEffect, useState } from 'react';
import Post from './Post';
import '../styles/FeedStyles.css';
import { getPosts } from '../services/api';
import LoadMoreButton from './LoadMoreButton';

function Feed() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const data = await getPosts(5, page * 5);
            setPosts((prevPosts) => [...prevPosts, ...data]);
            setLoading(false);
        };

        fetchPosts();
    }, [page]);

    const loadMorePosts = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <div className="feed">
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
            <LoadMoreButton onClick={loadMorePosts} loading={loading} />
        </div>
    );
}

export default Feed;
