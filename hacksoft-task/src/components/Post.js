import React, { useState } from 'react';
import '../styles/PostStyles.css';
import { FaThumbsUp, FaShare } from 'react-icons/fa';
import avatar from '../assets/avatar.png';

function Post({ post }) {
    const [likes, setLikes] = useState(post.likes);
    const [showMore, setShowMore] = useState(false);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="post">
            <div className="post-header">
                <img src={avatar} alt="Avatar" className="avatar" />
                <div className="post-info">
                    <div className="post-user">
                        <span className="name">{post.user}</span>
                        <span className="title">{post.title}</span>
                    </div>
                    <span className="time">{post.time}</span>
                </div>
            </div>
            <div className={`post-content ${showMore ? 'show' : ''}`}>
                {showMore ? post.content : `${post.content.substring(0, 100)}...`}
                {post.content.length > 100 && (
                    <span className="see-more" onClick={handleShowMore}>
                        {showMore ? '...see less' : '...see more'}
                    </span>
                )}
            </div>
            <div className="post-footer">
                <div className="like-share">
                    <button className="like-button" onClick={handleLike}>
                        <FaThumbsUp className="icon" />
                        {likes}
                    </button>
                    <button className="share-button">
                        <FaShare className="icon" />
                        Share
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Post;
