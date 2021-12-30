import React from 'react'
import { Li, Nav, NavContainer, Ul } from './navbar.style'

const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                <Ul>
                    <Li>
                        About me
                    </Li>
                    <Li>
                        Experience
                    </Li>
                    <Li>
                        Project
                    </Li>
                    <Li>
                        Contact me
                    </Li>
                </Ul>
            </NavContainer>
        </Nav>
    )
}

export default Navbar
