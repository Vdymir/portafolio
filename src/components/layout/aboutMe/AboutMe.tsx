import ScrollAnimation from "react-animate-on-scroll";
import { About, AboutContainer, BoxContainer, BoxTitle, Span, SpanBlue, Title } from "./about.style"
import Tilt from 'react-tilt';

const AboutMe = () => {
    return (
        <About id='about'>
            <AboutContainer>
                <Tilt options={{ max: 25 }} >
                    <ScrollAnimation animateIn='wobble' initiallyVisible delay={500}>
                        <BoxContainer>
                            <BoxTitle>¿Quien soy?</BoxTitle>
                            <Span>
                                Soy un desarrollador frontend apasionado por las tecnologías <SpanBlue>multiplataformas</SpanBlue>, con conocimientos fuertes en React,  <SpanBlue>React Native</SpanBlue>, JavaScript y TypeScript, actualmente me encuentro <SpanBlue>trabajando</SpanBlue> en proyectos que requieren React en la <SpanBlue>web</SpanBlue>, sin dejar de estudiar en mis tiempos libre React "avanzado" y <SpanBlue>Flutter</SpanBlue>. Tengo como objetivo <SpanBlue>dominar</SpanBlue> estas tecnologías.
                            </Span>
                        </BoxContainer>
                    </ScrollAnimation>
                </Tilt>
                {/* <BoxContainer>
                    <BoxTitle>Experiencia</BoxTitle>
                    <Span>
                    Acutualmente tengo aproximadamente 6 meses de experiencia usando React y React Native en proyectos pequeños y en proyectos grandes para empresas multinacioneles del Pais, siempre aplicando buenas practicas, codigo limpio y esclable, usando patrones de diseño para construir los componente en react, refactorizando y mejorando codigo existente.
                    </Span>
                </BoxContainer> */}
            </AboutContainer>
        </About>
    )
}

export default AboutMe
