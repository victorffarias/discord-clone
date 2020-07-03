import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot ?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''}/>

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role> Disponivel 1</Role>

            <UserRow nickname="Victor Farias"/>

            <Role>Offline - 19</Role>
            <UserRow nickname="Other Guy" isBot />
            <UserRow nickname="Other Guy"/>
            <UserRow nickname="Other Guy"/>
            <UserRow nickname="Other Guy"/>
            <UserRow nickname="Other Guy"/>
            <UserRow nickname="Other Guy"/>
            <UserRow nickname="Other Guy"/>
            <UserRow nickname="Other Guy"/>
            <UserRow nickname="Other Guy"/>
            <UserRow nickname="Other Guy"/>
            <UserRow nickname="Other Guy"/>
            <UserRow nickname="Other Guy"/>
            <UserRow nickname="Other Guy"/>
            <UserRow nickname="Other Guy"/>
            <UserRow nickname="Other Guy"/>
            <UserRow nickname="Other Guy"/>
            <UserRow nickname="Other Guy"/>
            <UserRow nickname="Other Guy"/>
            <UserRow nickname="Other Guy"/>
            <UserRow nickname="Other Guy"/>
            <UserRow nickname="Other Guy"/>
        </Container>
    );
}

export default UserList