import React, { useState, useContext } from 'react';
import '../styles/CreatePostStyles.css';
import { addPost } from '../services/api';
import { UserContext } from '../context/UserContext';
import avatar from '../assets/avatar.png';

function CreatePost({ onPostAdded }) {
    const [content, setContent] = useState('');
    const { user } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (content.trim()) {
            const newPost = {
                user: user.name,
                avatar: avatar,
                title: user.title,
                content: content.trim(),
                likes: 0,
                time: new Date().toLocaleString(),
                reactions: { like: 0, love: 0, laugh: 0, surprise: 0 },
                comments: []
            };
            await addPost(newPost);
            onPostAdded(newPost);
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
