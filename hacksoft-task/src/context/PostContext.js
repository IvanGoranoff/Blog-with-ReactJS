import React, { createContext, useState, useEffect } from 'react';
import { getPosts } from '../services/api';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPosts();
            console.log('Fetched posts:', data);
            setPosts(data);
        };

        fetchData();
    }, []);

    const updatePosts = (newPosts) => {
        console.log('Updating posts:', newPosts);
        setPosts(newPosts);
    };

    const addPost = (post) => {
        console.log('Adding post:', post);
        setPosts([post, ...posts]);
    };

    const updatePostReactions = (postId, newReactions) => {
        console.log('Updating post reactions:', postId, newReactions);
        setPosts(posts.map(post => post.id === postId ? { ...post, reactions: newReactions } : post));
    };

    return (
        <PostContext.Provider value={{ posts, updatePosts, addPost, updatePostReactions }}>
            {children}
        </PostContext.Provider>
    );
};
