import React, {useState} from 'react';

import { BackgroundShadow, Container, ButtonContainer, ModalTitle, ModalBody, ModalButton } from './styles'

interface ModalProps {
    handleClose ?: string | React.ReactElement | React.ReactNode;
    show ?: boolean;


};

const Modal: React.FC<ModalProps> = ({handleClose, show}) => {
    const [state, setState] = useState<string>('hide');

    const showModal = () => setState('show');
    const hideModal = () => setState('hide');


    return (
        <BackgroundShadow className={state}>
            <Container>
                <ModalTitle>Modal Title</ModalTitle>
                <ModalBody>Modal Body Message</ModalBody>
                <ButtonContainer onClick={hideModal}>
                    <ModalButton>Close</ModalButton>
                </ButtonContainer>
                
            </Container>
        </BackgroundShadow>
        
    );
}

export default Modal