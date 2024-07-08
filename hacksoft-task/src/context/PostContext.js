import React, { createContext, useState, useEffect } from 'react';
import { getPosts } from '../services/api';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPosts();
            setPosts(data);
        };

        fetchData();
    }, []);

    const updatePosts = (updatedPosts) => {
        setPosts(updatedPosts);
    };

    return (
        <PostContext.Provider value={{ posts, updatePosts }}>
            {children}
        </PostContext.Provider>
    );
};
