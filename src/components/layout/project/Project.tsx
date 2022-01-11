import React from 'react'
import { Title } from '../aboutMe/about.style'
import { CardBody, CardContainer, CardFooter, CardHeader, ProjectContainer, WrapperImg } from './project.stylel'
import folder from '../../../assets/folder.png';
import { dataProjects } from '../../../data';

const Project = () => {
    return (
        <ProjectContainer id='projects'>
            <Title>Proyectos</Title>
            <WrapperImg>
                {
                    dataProjects.map(item => (
                        <CardContainer key={item.id}>
                            <CardHeader>
                                <h3>{item.title}</h3>
                                <img src={folder} alt='Img: https://www.flaticon.com/' onClick={()=> window.open(item.link)}/>
                            </CardHeader>
                            <CardBody>
                                <p>
                                    {item.description}
                                </p>
                            </CardBody>
                            <CardFooter>
                                <p>Tools:</p>
                                <div>
                                    {
                                        item.tools.map(tool => (
                                            <span key={tool}>
                                                {tool}
                                            </span>
                                        ))
                                    }
                                </div>
                            </CardFooter>
                        </CardContainer>
                    ))
                }
            </WrapperImg>
        </ProjectContainer>
    )
}

export default Project
