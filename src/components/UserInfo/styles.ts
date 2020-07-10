import styled from "styled-components";
import { Mic, Headset, Settings} from 'styled-icons/material';
import { Slash } from 'styled-icons/fa-solid';

export const Container = styled.div`
    grid-area: UI;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;
    background-color: var(--quaternary);

    box-shadow: rgba(0,0,0, 0.2) 0px 1px 0px 0px;

`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
`;

export const Avatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;

    background-color: var(--gray);
`;

export const UserData = styled.div`
    margin-left: 8px;

    display: flex;
    flex-direction: column;

    > strong {
        color: var(--white);
        font-size: 13px;
    }

    > span {
        color: var(--gray);
        font-size: 13px;
    }
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;

    > svg:not(:first-child) {
        margin-left: 7px;
    }
`;

export const ButtonContainer = styled.button`
    background-color: transparent;

    opacity: .7;
    cursor: pointer;
    position: relative;

    transition: opacity .2s;

    &:hover {
        opacity: 1;
    }

    > div {
        position: relative;
    }
`

export const SlashIcon = styled(Slash)`
    width: 14px;
    height: 20px;

    color: var(--notification);

    position: absolute;
    left: 3px;
    top: 0px;
    z-index: 3;
    transform: rotate(90deg);

`

export const MicIcon = styled(Mic)`
    width: 20px;
    height: 20px;

    color: var(--white);
`;

export const HeadphoneIcon = styled(Headset)`
    width: 20px;
    height: 20px;

    color: var(--white);
`;

export const SettingsIcon = styled(Settings)`
    width: 20px;
    height: 20px;

    color: var(--white);
    opacity: .7;
    cursor: pointer;

    transition: opacity .2s;

    &:hover {
        opacity: 1;
    }
`;
