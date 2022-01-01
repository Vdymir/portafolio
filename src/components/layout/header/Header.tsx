import Navbar from '../Navbar'
import { Button, Container, ContainerTxt, HeaderConatiner, Headers, Img } from './header.style'
import profile from '../../../assets/profile.jpeg'
import { URL_CV, URL_Github } from '../../../config'

const Header = () => {

    const handleClick = (url: string) => window.open(url)

    return (
        <Headers>
            <Navbar />
            <HeaderConatiner>
                <Container>
                    <Img src={profile} alt='Profile' onClick={() => handleClick(URL_Github)}/>
                </Container>
                <ContainerTxt>
                    <span>Hi! I'm 👋🏼</span>
                    <h2>Vladimir Castañeda</h2>
                    <p>Desarrollador Frontend </p>

                    <Button onClick={() => handleClick(URL_CV)} >
                        ver cv
                    </Button>
                </ContainerTxt>
            </HeaderConatiner>
        </Headers>
    )
}

export default Header
