import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: ${({ $isSticky }) => ($isSticky ? 'fixed' : 'relative')};
  top: 0;
  width: 100%;
  background: white;
  z-index: 1000;
  box-shadow: ${({ $isSticky }) => ($isSticky ? '0 2px 4px rgba(0,0,0,0.1)' : 'none')};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: orange;

  img {
    height: 40px;
    margin-right: 4%; 
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin-right: 4%; 

`;


