import React, { useEffect, useState } from 'react';
import '../styles/ProfileCardStyles.css';
import editIcon from '../assets/edit-icon.png';
import avatar from '../assets/avatar.png';
import { getPosts } from '../services/api';
import EditProfileModal from './EditProfileModal';

function ProfileCard() {
    const [likes, setLikes] = useState(0);
    const [postsCount, setPostsCount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('Ivan Goranov');
    const [title, setTitle] = useState('Candidate for a front-end developer at HackSoft');

    useEffect(() => {
        const fetchData = async () => {
            const posts = await getPosts();
            const userPosts = posts.filter(post => post.user === name);
            const reactionsCount = userPosts.reduce((total, post) => {
                return total + Object.values(post.reactions || {}).reduce((sum, count) => sum + count, 0);
            }, 0);

            setPostsCount(userPosts.length);
            setLikes(reactionsCount);
        };

        fetchData();
    }, [name]);

    const handleEditClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSaveProfile = (newName, newTitle) => {
        setName(newName);
        setTitle(newTitle);
    };

    return (
        <div className="profile-card">
            <div className="profile-header">
                <img src={avatar} alt="Avatar" className="avatar" />
                <div className="profile-info">
                    <h2>{name}</h2>
                    <p>{title}</p>
                </div>
                <img src={editIcon} alt="Edit" className="edit-icon" onClick={handleEditClick} />
            </div>
            <div className="profile-divider"></div>
            <div className="profile-stats">
                <div className="stat">
                    <span>{likes}</span>
                    <p>Reactions</p>
                </div>
                <div className="stat-divider"></div>
                <div className="stat">
                    <span>{postsCount}</span>
                    <p>Posts</p>
                </div>
            </div>
            <EditProfileModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                currentName={name}
                currentTitle={title}
                onSave={handleSaveProfile}
            />
        </div>
    );
}

export default ProfileCard;
