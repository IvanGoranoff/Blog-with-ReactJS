import React, { useState } from 'react';
import { CreatePostContainer, TextArea, PostButton } from '../styles/CreatePostStyles';

const CreatePost = ({ onPost }) => {
    const [content, setContent] = useState('');

    const handlePost = () => {
        if (content.trim()) {
            onPost(content);
            setContent('');
        }
    };

    return (
        <CreatePostContainer>
            <TextArea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Share text..."
            />
            <PostButton onClick={handlePost}>Post</PostButton>
        </CreatePostContainer>
    );
};

export default CreatePost;
