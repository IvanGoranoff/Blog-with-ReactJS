import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const fetchPosts = (page = 1) => {
    return api.get(`/posts?_page=${page}&_limit=10`);
};
