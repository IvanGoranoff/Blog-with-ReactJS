import React from 'react';
import '../styles/PostStyles.css';
import avatar from '../assets/avatar.png';

const Post = ({ post }) => {
    return (
        <div className="post">
            <div className="post-header">
                <img src={avatar} alt={post.title} className="avatar" />
                <div>
                    <h3>{post.title}</h3>
                    <p>Software Developer, HackSoft</p>
                </div>
            </div>
            <p>{post.body}</p>
            <div className="post-footer">
                <span>4 Likes</span>
                <button>Like</button>
                <button>Share</button>
            </div>
        </div>
    );
}

export default Post;
