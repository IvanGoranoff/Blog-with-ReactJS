const apiUrl = 'http://localhost:5000/posts';

export const getPosts = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
};

export const updatePost = async (id, updates) => {
    await fetch(`${apiUrl}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
    });
};

export const addPost = async (post) => {
    await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });
};
