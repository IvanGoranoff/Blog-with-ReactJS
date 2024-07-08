import React, { createContext, useState, useEffect } from 'react';
import { getPosts, addPost, updatePost } from '../services/api';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getPosts();
            setPosts(data);
        };

        fetchPosts();
    }, []);

    const createPost = async (post) => {
        const newPost = await addPost(post);
        setPosts((prevPosts) => [...prevPosts, newPost]);
    };

    const updatePosts = (updatedPost) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
        );
    };

    const loadMorePosts = async () => {
        const data = await getPosts();
        setPosts((prevPosts) => [...prevPosts, ...data]);
    };

    return (
        <PostContext.Provider value={{ posts, createPost, updatePosts, loadMorePosts }}>
            {children}
        </PostContext.Provider>
    );
};
