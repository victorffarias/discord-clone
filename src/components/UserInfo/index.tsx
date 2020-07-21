import React, {useState} from 'react';
import Modal from '../Modal';


import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon, ButtonContainer, SlashIcon} from './styles'

const OnOffIcon: React.FC = props => {
    const [state, setState] = useState("on");

    const handleClick = () => setState(state === 'on' ? 'off' : 'on')

    return (
    <ButtonContainer onClick={handleClick}>
        {state === 'off' ? <SlashIcon /> : ''}
        {props.children}
    </ButtonContainer>
    );
}

const UserInfo: React.FC = () => {
    return (
        <Container>
            <Profile>
            <Avatar />
            <UserData>
                <strong> Victor Farias</strong>
                <span>#3476</span>
            </UserData>
            </Profile>

            <Icons>
                <OnOffIcon>
                    <MicIcon />
                </OnOffIcon>
                <OnOffIcon>
                    <HeadphoneIcon />
                </OnOffIcon>
                <SettingsIcon/>
            </Icons>
            <Modal/>
        </Container>
    );
}

export default UserInfo