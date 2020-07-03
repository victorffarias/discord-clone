import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon} from './styles'

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Text Channels</span>
                <AddCategoryIcon/>
            </Category>

            <ChannelButton channelName="open-chat"/>
            <ChannelButton channelName="work"/>
            <ChannelButton channelName="games"/>
            <ChannelButton channelName="private"/>
            <ChannelButton channelName="images"/>

        </Container>
    );
}

export default ChannelList