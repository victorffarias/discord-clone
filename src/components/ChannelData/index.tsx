import React, {useRef, useEffect}from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'
import ChannelMessage, {Mention} from '../ChannelMessage';

const ChannelData: React.FC = () => {
    const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messageRef.current;

        if(div){
            div.scrollTop = div.scrollHeight;
        }
    })

    return (
        <Container>
            <Messages ref={messageRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage 
                    author="Victor Farias"
                    date="25/05/2020"
                    content="It's my birthday!"/>
                ))}
                

                <ChannelMessage 
                    author="Other Guy"
                    date="25/05/2020"
                    content={
                        <>
                            <Mention>@Victor Farias</Mention>, bem vindo!
                        </>
                    }
                    hasMention
                    isBot
                />      

            </Messages>
            <InputWrapper>
                <Input type="text" placeholder="Message #main-chat"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    );
}

export default ChannelData