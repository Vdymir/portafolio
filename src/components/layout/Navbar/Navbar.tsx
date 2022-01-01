import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Li, Link, Nav, NavContainer, Ul } from './navbar.style'

const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                    <Ul>
                        <Li>
                            <Link href="#about"> Sobre mi</Link>
                        </Li>
                        {/* <Li>
                        <Link href="#about">Experience</Link>
                    </Li> */}
                        <Li>
                            <Link href="#about">Proyectos</Link>
                        </Li>
                        <Li>
                            <Link href="#about">Contacta me</Link>

                        </Li>
                    </Ul>
            </NavContainer>
        </Nav>
    )
}

export default Navbar
