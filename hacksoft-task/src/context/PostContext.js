import React, { createContext, useState } from 'react';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const updatePosts = (newPosts) => {
        setPosts(newPosts);
    };

    const addPost = (post) => {
        setPosts([post, ...posts]);
    };

    const updatePostReactions = (postId, newReactions) => {
        setPosts(posts.map(post => post.id === postId ? { ...post, reactions: newReactions } : post));
    };

    return (
        <PostContext.Provider value={{ posts, updatePosts, addPost, updatePostReactions }}>
            {children}
        </PostContext.Provider>
    );
};
