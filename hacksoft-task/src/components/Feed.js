import React, { useEffect, useState, useContext } from 'react';
import Post from './Post';
import '../styles/FeedStyles.css';
import { getPosts, addPost } from '../services/api';
import { PostContext } from '../context/PostContext';
import { UserContext } from '../context/UserContext';
import LoadMoreButton from './LoadMoreButton';
import CreatePost from './CreatePost';

function Feed() {
    const { posts, setPosts } = useContext(PostContext);
    const { user } = useContext(UserContext);
    const [visiblePosts, setVisiblePosts] = useState(5);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getPosts();
            setPosts(data);
            console.log('Fetched posts:', data);
        };

        fetchPosts();
    }, [setPosts]);

    const handleLoadMore = () => {
        setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 5);
    };

    const handleAddPost = async (content) => {
        const newPost = {
            user: user.name,
            avatar: user.avatar || 'http://localhost:3000/assets/avatar.png',
            title: user.title,
            content,
            reactions: { like: 0, love: 0, laugh: 0, surprise: 0 },
            comments: [],
            time: new Date().toLocaleString()
        };
        await addPost(newPost);
        const updatedPosts = await getPosts();
        setPosts(updatedPosts);
    };

    return (
        <div className="feed">
            <CreatePost onAddPost={handleAddPost} />
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
