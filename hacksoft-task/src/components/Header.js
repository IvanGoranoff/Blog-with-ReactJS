import React from 'react';
import useStickyHeader from '../hooks/useStickyHeader';
import { HeaderContainer, Logo, UserAvatar } from '../styles/HeaderStyles';
import logo from '../assets/hacksoftlogo.svg';
import avatar from '../assets/avatar.png';

const Header = () => {
    const isSticky = useStickyHeader();

    return (
        <HeaderContainer $isSticky={isSticky}>
            <Logo>
                <img src={logo} alt="HackSoft Logo" />
            </Logo>
            <UserAvatar src={avatar} alt="User Avatar" />
        </HeaderContainer>
    );
};

export default Header;
