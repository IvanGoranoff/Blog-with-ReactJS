import React, { useState } from 'react';
import { createPost } from '../services/api';
import '../styles/CreatePostStyles.css';
import avatar from '../assets/avatar.png';

function CreatePost({ onPostCreated }) {
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (content.trim()) {
            const newPost = {
                user: 'Current User',
                avatar,
                title: 'Software Developer at HackSoft',
                content,
                likes: 0,
                time: 'Just now',
                reactions: { like: 0, love: 0, laugh: 0, surprise: 0 },
                comments: []
            };
            await createPost(newPost);
            onPostCreated(newPost);
            setContent('');
        }
    };

    return (
        <div className="create-post">
            <form onSubmit={handleSubmit}>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Share something to the community..."
                ></textarea>
                <button type="submit">Post</button>
            </form>
        </div>
    );
}

export default CreatePost;
