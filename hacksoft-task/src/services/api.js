export const getPosts = async () => {
    const response = await fetch('http://localhost:5000/posts');
    const data = await response.json();
    return data;
};

export const updatePost = async (postId, updatedData) => {
    const response = await fetch(`http://localhost:5000/posts/${postId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    });
    const data = await response.json();
    return data;
};
