import Navbar from '../Navbar'
import { Button, Container, ContainerTxt, HeaderConatiner, Headers, Img } from './header.style'
import profile from '../../../assets/profile.jpeg'
import { URL_CV, URL_Github } from '../../../config'
import ScrollAnimation from 'react-animate-on-scroll';

const Header = () => {

    const handleClick = (url: string) => window.open(url)

    return (
        <Headers>
                <Navbar/>
            <HeaderConatiner>
                <Container>
                    <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutRight" delay={500}>
                        <Img src={profile} alt='Profile' onClick={() => handleClick(URL_Github)} />
                    </ScrollAnimation>
                </Container>
                <ContainerTxt>
                    <ScrollAnimation animateIn='flipInY' animateOut='flipOutY' delay={700}>
                        <span>Hi! I'm 👋🏼</span>
                        <h2>Vladimir Castañeda</h2>
                        <p>Desarrollador Frontend </p>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft" delay={800}>
                        <Button onClick={() => handleClick(URL_CV)} >
                            ver cv
                        </Button>
                    </ScrollAnimation>
                </ContainerTxt>
            </HeaderConatiner>
        </Headers>
    )
}

export default Header
