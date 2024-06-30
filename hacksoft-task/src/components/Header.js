import React from 'react';
import '../styles/HeaderStyles.css';
import logo from '../assets/hacksoftlogo.svg';

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="HackSoft Logo" className="logo" />
            <div className="profile-icon">
                <img src="../assets/avatar.png" alt="User Profile" />
            </div>
        </div>
    );
}

export default Header;
