import axios from 'axios';

export const fetchPosts = async () => {
    const response = await fetch('http://localhost:5000/posts');
    const data = await response.json();
    return data;
};

export const submitPost = async (post) => {
    await fetch('http://localhost:5000/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
    });
};
