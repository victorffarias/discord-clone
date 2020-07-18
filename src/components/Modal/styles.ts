import styled from "styled-components";

export const BackgroundShadow = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 3;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    width: 60%;
    height: auto;
    padding: 10px;

    border-radius: 0.3rem;

    background-color: var(--white);
`;

export const ModalTitle = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #e9ecef;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;


`;

export const ModalBody = styled.div`
    padding: 1rem;

`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
`;

export const ModalButton = styled.button`
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: 0.3rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;

    background-color: rgb(67, 181, 129); 
    color: rgb(255, 255, 255);

    cursor: pointer;

`;