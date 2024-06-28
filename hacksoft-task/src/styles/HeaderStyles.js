import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: ${({ isSticky }) => (isSticky ? 'fixed' : 'relative')};
  top: 0;
  width: 100%;
  background: white;
  z-index: 1000;
  box-shadow: ${({ isSticky }) => (isSticky ? '0 2px 4px rgba(0,0,0,0.1)' : 'none')};
  padding: 10px 20px;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: orange;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
