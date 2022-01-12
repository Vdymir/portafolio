import styled from 'styled-components';

export const FooterCont = styled.footer`
    width: 100%;
    height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 480px) {
        padding: 0 1rem;
    }

    h3 {
        text-transform: uppercase;
        font-size: .95rem;
        letter-spacing: 1px;
        color: var(--color-bone);
        text-align: center;
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 1rem;

        @media (max-width: 480px) {
            padding: 0;
        }
        
        li {
            margin-left: 1rem;

            &:first-of-type {
            margin-left: 0;

            }
            img {
                width: 40px;
                filter: grayscale(.1);
                cursor: pointer;
                transition: transform .3s;

                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    }
`;