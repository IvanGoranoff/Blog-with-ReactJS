import styled from 'styled-components';

export const PostContainer = styled.div`
  background: white;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Author = styled.div`
  font-weight: bold;
`;

export const TimeAgo = styled.div`
  color: gray;
`;

export const PostContent = styled.p`
  margin: 10px 0;
`;

export const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
