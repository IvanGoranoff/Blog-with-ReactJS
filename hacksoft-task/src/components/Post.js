import React from 'react';
import '../styles/PostStyles.css';
import avatar from '../assets/avatar.png';

function Post() {
    return (
        <div className="post">
            <div className="post-header">
                <img src={avatar} alt="Avatar" className="avatar" />
                <div>
                    <p>Daniel Goshev</p>
                    <span>Software Developer, HackSoft</span>
                </div>
            </div>
            <div className="post-content">
                <p>Despite our total project numbers only increasing by 2% compared to last month, the 58 projects we are working on contain a significant increase in deliverables.</p>
            </div>
            <div className="post-footer">
                <button>Like</button>
                <button>Share</button>
            </div>
        </div>
    );
}

export default Post;
