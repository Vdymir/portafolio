import styled, { keyframes } from "styled-components";
import { Li } from "../Navbar/navbar.style";

export const Headers = styled.header`
    min-width: 100vw;
    height: 100vh;
    background: rgb(0,7,14);
    background: linear-gradient(45deg, rgba(0,7,14,1) 0%, rgba(1,14,28,1) 49%, rgba(0,7,14,1) 100%);
   
`;

export const HeaderConatiner = styled.div`
    width: 100%;
    max-width: 1400px;
    height: 500px;
    max-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`
export const Img = styled.img`
    margin: auto;
    width: 280px;
    border-radius: 10px;
    object-fit: contain;
    filter: drop-shadow( 8px 8px 2px var(--color-primary));
    transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        filter: drop-shadow( 18px 18px 2px var(--color-primary));
    }
    &:active {
        transform: scale(1.05);
        filter: drop-shadow( 12px 12px 2px var(--color-primary));
    }
`;

const write = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(100%);
    }
`;


export const ContainerTxt = styled(Container)`
    flex-direction: column;
    align-items: flex-start;
    user-select: none;
    cursor: context-menu;
    span {
        color: var(--color-bone);
        font-size: 2rem;
    }
    h2 {
        font-weight: bold;
        color: var(--color-title);
        text-transform: uppercase;
        font-size: 3rem;
    }
    p {
        font-size: 2rem;
        color: var(--color-primary);
        position: relative;
        overflow: hidden;
        border-radius: 10px;
        background: linear-gradient(145deg, #010f1d, #010d18);
        box-shadow:  17px 17px 33px #010c16,
                    -17px -17px 33px #011020;
        padding: 5px;
    }
    p::before {
        content: "";
        width: 100%;
        height: 100%;
        background-color: var(--color-bg);
        position: absolute;
        border-left: 1px solid var(--color-primary);
        top: 1px;
        animation: ${write} 2s infinite alternate steps(22);
    }
`;
export const Button = styled(Li)`
    margin-top: 10px;
    list-style: none;
    text-transform: uppercase;
`;