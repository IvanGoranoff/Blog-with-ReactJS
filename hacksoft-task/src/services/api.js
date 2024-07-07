const API_URL = 'http://localhost:5000/posts';

export const getPosts = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
};

export const updatePost = async (id, updatedPost) => {
    await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPost)
    });
};

export const createPost = async (newPost) => {
    await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    });
};
