import React from 'react';
import '../styles/ProfileCardStyles.css';
import avatar from '../assets/avatar.png';

const ProfileCard = () => {
    return (
        <div className="profile-card">
            <img src={avatar} alt="I" className="avatar" />
            <h2>Ivan Goranov</h2>
            <p>Candidate for a front-end developer at HackSoft</p>
            <div className="stats">
                <span>210 Likes</span>
                <span>4 Posts</span>
            </div>
        </div>
    );
}

export default ProfileCard;
