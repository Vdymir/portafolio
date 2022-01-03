import styled, { keyframes } from 'styled-components';

export const ProjectContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    background: rgb(0,7,14);
    background: linear-gradient(45deg, rgba(0,7,14,1) 0%, rgba(1,14,28,1) 49%, rgba(0,7,14,1) 100%);
    position: relative;

    &:before { 
        content:"";
        position: absolute;
        right: 0;
        left:0;
        height: 30px;
        background: linear-gradient(to top, rgba(0,0,0,0), #00070E);
    }
`;

export const WrapperImg = styled.div`
    width: 100%;
    max-width: 1400px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 20px;
    padding: 0 4rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const rotate = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

export const CardContainer = styled.div`
    width: 350px;
    height: 350px;
    box-shadow: 16px 14px 20px #0000008c;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    &:before {
        content: "";
        background: conic-gradient(
            from 90deg at 50% 50%,
            var(--color-primary),
            transparent,
            transparent,
            transparent
        );
        width: 150%;
        height: 150%;
        position: absolute;
        animation: ${rotate} 2s linear infinite;
    }

    &:after {
        content: "";
        width: 340px;
        height: 340px;
        background-color: #101010;
        position: absolute;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: inset 16px 14px 20px #0000008c;
    }
`;

export const ImgProjects = styled.img`
    z-index: 2;
    width: 90%;
    border-radius: 10px;
    box-shadow: 10px 8px 15px #0000008c;
    border: 1px solid rgba(255, 255, 255, .2);
`;