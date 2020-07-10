import React, {useState} from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon, Clickable, SlashIcon} from './styles'

const UserInfo: React.FC = () => {
    const [mutedMic, setMutedMic] = useState<number>(0);
    const [muteHeadset, setMutedHeadset] = useState<number>(0);

    function handleMicClick(){
        if(mutedMic === 0){
            setMutedMic(1);
        }else{
            setMutedMic(0)
        }
    }

    function handleHeadsetClick(){
        if(muteHeadset === 0){
            setMutedHeadset(1);
        }else{
            setMutedHeadset(0)
        }
    }


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
                <Clickable onClick={handleMicClick}>
                    {mutedMic === 1 ? <SlashIcon /> : ''}
                    <MicIcon />
                </Clickable>
                <Clickable onClick={handleHeadsetClick}>
                    {muteHeadset === 1 ? <SlashIcon /> : ''}
                    <HeadphoneIcon />
                </Clickable>
                <SettingsIcon />
            </Icons>
        </Container>
    );
}

export default UserInfo