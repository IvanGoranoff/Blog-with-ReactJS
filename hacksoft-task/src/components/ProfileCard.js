import React from 'react';
import '../styles/ProfileCardStyles.css';
import avatar from '../assets/avatar.png';
import editIcon from '../assets/edit-icon.png';

const ProfileCard = () => {
    return (
        <div className="profile-card">
            <div className="profile-header">
                <img src={avatar} alt="I" className="avatar" />
                <div className="profile-info">
                    <h2>Ivan Goranov</h2>
                    <p>Candidate for a front-end developer at HackSoft</p>
                </div>
                <img src={editIcon} alt="Edit" className="edit-icon" />
            </div>
            <div className="profile-divider"></div>
            <div className="profile-stats">
                <div className="stat">
                    <span>210</span>
                    <p>Likes</p>
                </div>
                <div className="stat-divider"></div>
                <div className="stat">
                    <span>4</span>
                    <p>Posts</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
