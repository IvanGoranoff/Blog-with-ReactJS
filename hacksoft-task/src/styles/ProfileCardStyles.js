import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;
