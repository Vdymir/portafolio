import React from 'react'
import { Li, Link, Nav, NavContainer, Ul } from './navbar.style'

const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                <Ul>
                    <Li>
                        <Link href="#about"> About me</Link>
                    </Li>
                    <Li>
                        <Link href="#about">Experience</Link>
                    </Li>
                    <Li>
                        <Link href="#about">Project</Link>
                    </Li>
                    <Li>
                        <Link href="#about">Contact me</Link>

                    </Li>
                </Ul>
            </NavContainer>
        </Nav>
    )
}

export default Navbar
