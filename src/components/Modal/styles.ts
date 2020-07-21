import styled from "styled-components";

export const BackgroundShadow = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 3;

    &.show {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &.hide {
        display: none;
    }
    
`;

export const Container = styled.div`
    width: 60%;
    height: auto;
    padding: 10px;

    border-radius: 0.3rem;

    background-color: var(--secondary);
    box-shadow: rgba(0,0,0, 0.2) 0px 1px 0px 0px;
`;

export const ModalTitle = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid var(--primary);
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;

    font-size: 16px;
    font-weight: bold;

    color: var(--white);


`;

export const ModalBody = styled.div`
    padding: 1rem;

    font-size: 14px;
    color: var(--senary);

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

    background-color: var(--link);
    color: rgb(255, 255, 255);

    cursor: pointer;

`;