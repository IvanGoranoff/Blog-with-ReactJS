import React, { useState } from 'react';
import '../styles/CreatePostStyles.css';

function CreatePost({ onPostSubmit }) {
    const [postContent, setPostContent] = useState('');

    const handlePostSubmit = (e) => {
        e.preventDefault();
        if (postContent.trim() !== '') {
            onPostSubmit(postContent);
            setPostContent('');
        }
    };

    return (
        <form className="create-post" onSubmit={handlePostSubmit}>
            <textarea
                placeholder="Share something to the community..."
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
            ></textarea>
            <button type="submit">Post</button>
        </form>
    );
}

export default CreatePost;
