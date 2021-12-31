import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100vw;
    padding: 10px 20px;
`;

export const NavContainer = styled.div`
    height: 100%;
    width: 100%;
    max-width: 1400px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const Ul = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Li = styled.li`
    margin-left: 30px;
    font-size: 1rem;
    font-weight: bold;
    text-transform: capitalize;
    padding: 10px 15px;
    color: var(--color-bone);
    border-radius: 11px;
    background: #0b1f36;
    box-shadow:  3px 3px 0px #0a1b2f,
                -3px -3px 0px #0c233d;
    cursor: pointer;
    transition: all 0.3s;
    user-select: none;
    &:hover {
        box-shadow:  5px 5px 0px #0a1b2f,
                -5px -5px 0px #0c233d;
    }

    &:active {
        box-shadow:  inset 5px 5px 0px #0a1b2f;

    }
    &:first-of-type {
        margin-left: 0;
    }
`;

export const Link = styled.a`
    text-decoration: none;
    color: var(--color-bone);
`;