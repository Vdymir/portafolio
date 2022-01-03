import React from 'react'
import { Title } from '../aboutMe/about.style'
import { CardContainer, ImgProjects, ProjectContainer, WrapperImg } from './project.stylel'
import img from '../../../assets/poleDance.jpeg';

const Project = () => {
    return (
        <ProjectContainer>
            <Title>Proyectos</Title>
            <WrapperImg>
                <CardContainer>
                    <ImgProjects src={img} alt='hola'/>
                </CardContainer>
            </WrapperImg>
        </ProjectContainer>
    )
}

export default Project
