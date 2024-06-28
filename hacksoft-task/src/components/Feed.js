import React, { useEffect, useState } from 'react';
import { FeedContainer, PostWrapper } from '../styles/FeedStyles';
import Post from './Post';
import { getFeedData } from '../services/api';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getFeedData();
            setPosts(data);
        }
        fetchData();
    }, []);

    return (
        <FeedContainer>
            {posts.map(post => (
                <PostWrapper key={post.id}>
                    <Post
                        author={post.author}
                        content={post.content}
                        likes={post.likes}
                        timeAgo={post.timeAgo}
                    />
                </PostWrapper>
            ))}
        </FeedContainer>
    );
};

export default Feed;
