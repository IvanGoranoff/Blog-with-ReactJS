import React from 'react';
import '../styles/CreatePostStyles.css';

function CreatePost() {
    return (
        <div className="create-post">
            <textarea placeholder="Share something to the community..."></textarea>
            <button className="post-button">Post</button>
        </div>
    );
}

export default CreatePost;
