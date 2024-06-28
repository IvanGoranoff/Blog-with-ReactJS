import React from 'react';
import { PostContainer, PostHeader, Author, TimeAgo, PostContent, PostActions } from '../styles/PostStyles';

const Post = ({ author, content, likes, timeAgo }) => (
    <PostContainer>
        <PostHeader>
            <Author>{author}</Author>
            <TimeAgo>{timeAgo}</TimeAgo>
        </PostHeader>
        <PostContent>{content}</PostContent>
        <PostActions>
            <span>{likes} Likes</span>
            <button>Like</button>
            <button>Share</button>
        </PostActions>
    </PostContainer>
);

export default Post;
