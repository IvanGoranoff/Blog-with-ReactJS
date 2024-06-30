import React from 'react';
import '../styles/PostStyles.css';
import avatar from '../assets/avatar.png';
import { FaThumbsUp, FaShare } from 'react-icons/fa'; // Импортиране на иконите

function Post() {
    return (
        <div className="post">
            <div className="post-header">
                <img src={avatar} alt="Avatar" className="avatar" />
                <div className="post-info">
                    <div className="post-user">
                        <p className="name">Daniel Goshev</p>
                        <p className="title">Software Developer, HackSoft</p>
                    </div>
                    <p className="time">20 minutes ago</p>
                </div>
            </div>
            <div className="post-content">
                <p>Despite our total project numbers only increasing by 2% compared to last month, the 58 projects we are working on contain a significant increase in deliverables.</p>
                <p className="see-more">...see more</p>
                <div className="like-share">
                    <FaThumbsUp className="icon" />
                    <span>4</span>
                </div>
            </div>
            <div className="post-footer">

                <button className="like-button"><FaThumbsUp className="icon-button" /> Like</button>
                <button className="share-button"><FaShare className="icon-button" /> Share</button>
            </div>
        </div>
    );
}

export default Post;
