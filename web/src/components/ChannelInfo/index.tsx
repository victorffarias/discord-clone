import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './styles'

const ChannelInfo: React.FC = () => {
    return (
        <Container>
            <HashtagIcon />

            <Title>main-chat</Title>

            <Separator />
            
            <Description>Open Channel for Chatting</Description>
        </Container>
    );
}

export default ChannelInfo