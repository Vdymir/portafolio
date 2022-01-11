import styled from 'styled-components';

export const About = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin-bottom: 4rem;
    position: relative;
    
    &:before { 
        content:"";
        position: absolute;
        right: 0;
        left:0;
        top: -30px;
        height: 30px;
        background: linear-gradient(to bottom, rgba(0,0,0,0), #00070E);
    }
`;
export const Title = styled.h2`
    margin-top: 2rem;
    font-size: 2rem;
    text-transform: uppercase;
    color: var(--color-primary);
    padding: 10px 15px;
   
`;
export const AboutContainer = styled.main`
    /* display: grid;
    grid-template-columns: repeat(auto-fill, minmax(650px, 1fr));
    gap: 10px; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1400px;
    margin-top: 2rem;
`;
export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 600px;
    margin: 1rem auto auto;
    border-radius: 10px;
    justify-content: flex-start;
    text-align: center;
    padding: 15px 25px;
    border: 1px solid rgba(255, 255, 255, .3);
    background: linear-gradient(to top, rgba(255, 255, 255, .01), rgba(255, 255, 255, .03));
    box-shadow:  15px 15px 30px #000408,
             -15px -15px 30px #000a14;

`;
export const BoxTitle = styled(Title)`
    margin-top: 0;
    font-weight: 500;
    font-size: 1.5rem;
`;
export const Span = styled.span`
    color: var(--color-bone);
    text-align: justify;
    font-weight: 400;
    letter-spacing: 1px;

`;
export const SpanBlue = styled(Span)`
    color: var(--color-primary);
`;