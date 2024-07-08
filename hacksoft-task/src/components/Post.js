import React, { useState, useContext } from 'react';
import '../styles/PostStyles.css';
import { FaThumbsUp, FaHeart, FaLaugh, FaSurprise, FaComment } from 'react-icons/fa';
import avatar from '../assets/avatar.png';
import { updatePost } from '../services/api';
import { PostContext } from '../context/PostContext';
import { UserContext } from '../context/UserContext';

function Post({ post }) {
    const { posts, updatePosts, updatePostReactions } = useContext(PostContext);
    const { user } = useContext(UserContext);
    const [reactions, setReactions] = useState(post.reactions || { like: 0, love: 0, laugh: 0, surprise: 0 });
    const [comments, setComments] = useState(post.comments || []);
    const [commentText, setCommentText] = useState("");
    const [showComments, setShowComments] = useState(false);
    const [expandedComments, setExpandedComments] = useState({});
    const [showMoreContent, setShowMoreContent] = useState(false);

    const handleReaction = async (type) => {
        const updatedReactions = {
            ...reactions,
            [type]: reactions[type] + 1
        };
        setReactions(updatedReactions);
        const updatedPost = { ...post, reactions: updatedReactions };
        await updatePost(post.id, { reactions: updatedReactions });

        updatePostReactions(post.id, updatedReactions);
    };

    const handleComment = async () => {
        if (commentText.trim()) {
            const newComment = { text: commentText, user: user.name, avatar };
            const updatedComments = [...comments, newComment];
            setComments(updatedComments);
            setCommentText("");
            const updatedPost = { ...post, comments: updatedComments };
            await updatePost(post.id, { comments: updatedComments });

            const updatedPosts = posts.map(p => p.id === post.id ? updatedPost : p);
            updatePosts(updatedPosts);
        }
    };

    const toggleCommentExpansion = (index) => {
        setExpandedComments((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const toggleContentExpansion = () => {
        setShowMoreContent(!showMoreContent);
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
            <div className={`post-content ${showMoreContent ? 'show' : ''}`}>
                {showMoreContent ? post.content : `${post.content.substring(0, 100)}...`}
                {post.content.length > 100 && (
                    <span className="see-more" onClick={toggleContentExpansion}>
                        {showMoreContent ? '...see less' : '...see more'}
                    </span>
                )}
            </div>
            <div className="post-footer">
                <div className="reactions">
                    <button className="icon-button" onClick={() => handleReaction('like')}>
                        <FaThumbsUp className="icon" /> {reactions.like}
                    </button>
                    <button className="icon-button" onClick={() => handleReaction('love')}>
                        <FaHeart className="icon" /> {reactions.love}
                    </button>
                    <button className="icon-button" onClick={() => handleReaction('laugh')}>
                        <FaLaugh className="icon" /> {reactions.laugh}
                    </button>
                    <button className="icon-button" onClick={() => handleReaction('surprise')}>
                        <FaSurprise className="icon" /> {reactions.surprise}
                    </button>
                    <button className="icon-button" onClick={() => setShowComments(!showComments)}>
                        <FaComment className="icon" /> {comments.length}
                    </button>
                </div>
            </div>
            {showComments && (
                <div className="comments-section">
                    {comments.map((comment, index) => (
                        <div key={index} className="comment">
                            <img src={avatar} alt="Avatar" className="avatar" />
                            <div className="comment-content">
                                <span className="comment-user">{comment.user}</span>
                                <span className="comment-text">
                                    {expandedComments[index] ? comment.text : `${comment.text.substring(0, 100)}...`}
                                    {comment.text.length > 100 && (
                                        <span className="see-more" onClick={() => toggleCommentExpansion(index)}>
                                            {expandedComments[index] ? ' see less' : ' see more'}
                                        </span>
                                    )}
                                </span>
                            </div>
                        </div>
                    ))}
                    <div className="add-comment">
                        <textarea
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            placeholder="Add a comment..."
                        ></textarea>
                        <button onClick={handleComment}>Comment</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Post;
