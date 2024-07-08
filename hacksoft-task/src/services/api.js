const apiUrl = 'http://localhost:5000/posts';

export const getPosts = async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log('getPosts data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
};

export const updatePost = async (id, updates) => {
    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updates),
        });
        const data = await response.json();
        console.log('updatePost data:', data);
        return data;
    } catch (error) {
        console.error('Error updating post:', error);
        throw error;
    }
};

export const addPost = async (post) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        });
        const data = await response.json();
        console.log('addPost data:', data);
        return data;
    } catch (error) {
        console.error('Error adding post:', error);
        throw error;
    }
};
