import React from 'react';
import useStickyHeader from '../hooks/useStickyHeader';
import { HeaderContainer, Logo, Nav } from '../styles/HeaderStyles';

const Header = () => {
    const isSticky = useStickyHeader();

    return (
        <HeaderContainer isSticky={isSticky}>
            <Nav>
                <Logo>HackSoft</Logo>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
