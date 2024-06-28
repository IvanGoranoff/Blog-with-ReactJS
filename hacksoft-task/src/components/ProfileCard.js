import React from 'react';
import { Card, Avatar, Info, Name, Stats } from '../styles/ProfileCardStyles';

const ProfileCard = ({ name, position, avatar, likes, posts }) => (
    <Card>
        <Avatar src={avatar} alt={`${name}'s avatar`} />
        <Info>
            <Name>{name}</Name>
            <div>{position}</div>
            <Stats>
                <div>{likes} Likes</div>
                <div>{posts} Posts</div>
            </Stats>
        </Info>
    </Card>
);

export default ProfileCard;
