import React from 'react';

import { BackgroundShadow, Container, ButtonContainer, ModalTitle, ModalBody, ModalButton } from './styles'

const Modal: React.FC = () => {
    return (
        <BackgroundShadow>
            <Container>
                <ModalTitle>Modal Title</ModalTitle>
                <ModalBody>Modal Body Message</ModalBody>
                <ButtonContainer>
                    <ModalButton>Close</ModalButton>
                </ButtonContainer>
                
            </Container>
        </BackgroundShadow>
        
    );
}

export default Modal