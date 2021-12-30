import Navbar from '../Navbar'
import { Button, Container, ContainerTxt, HeaderConatiner, Headers, Img } from './header.style'
import profile from '../../../assets/profile.jpeg'

const Header = () => {

    const handleClick = () => window.open('https://drive.google.com/file/d/1kYHeX-d3rQ3TwlhoE_vGkCFvQVGnv4n2/view?usp=sharing')

    return (
        <Headers>
            <Navbar />
            <HeaderConatiner>
                <Container>
                    <Img src={profile} alt='Profile' />
                </Container>
                <ContainerTxt>
                    <span>Hi! I'm 👋🏼</span>
                    <h2>Vladimir Castañeda</h2>
                    <p>Front End Developer .</p>

                    <Button onClick={handleClick} >
                        See Cv
                    </Button>
                </ContainerTxt>
            </HeaderConatiner>
        </Headers>
    )
}

export default Header
