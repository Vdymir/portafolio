import styled from 'styled-components';

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
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 20px;
    padding: 0 4rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

export const CardContainer = styled.div`
    width: 370px;
    height: 250px;
    background-color: #26282B;
    border-radius: 10px;
    box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 5px 15px;
    transition: all 0.2s linear;

    &:hover {
        transform: scale(1.05);
    }
`;

export const CardHeader = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
        color: var(--color-primary);
        font-size: 1.4rem;
    }

    img {
        width: 50px;
        cursor: pointer;
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

        &:hover {
            transform: scale(1.2);
        }
    }
`;

export const CardBody = styled.div`
    flex: 1;

    p {
        font-size: 1rem;
        color: var(--color-bone);
        text-align: justify;
        font-weight: 600;    
    }
`;

export const CardFooter = styled.footer`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    p {
        color: var(--color-primary);
        text-transform: uppercase;
        font-weight: bold;
    } 
    span {
        color: var(--color-bone);
        font-weight: 500;
        margin-left: 5px;
        text-transform: capitalize;
        background-color: rgba(0,0,0,.5);
        padding: 5px 10px;
        border-radius: 20px;
    }
`;