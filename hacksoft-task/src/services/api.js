const apiUrl = 'http://localhost:5000/posts';

export const getPosts = async () => {
    try {
        const response = await fetch('http://localhost:5000/posts');
        const data = await response.json();
        console.log('getPosts data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
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
