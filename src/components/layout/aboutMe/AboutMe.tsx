import { About, AboutContainer, BoxContainer, BoxTitle, Span, Title } from "./about.style"

const AboutMe = () => {
    return (
        <About id='about'>
            <Title>About Me</Title>
            <AboutContainer>
                <BoxContainer>
                    <BoxTitle>Me</BoxTitle>
                    <Span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quidem! Amet voluptas porro non cupiditate obcaecati earum, molestiae debitis nemo laborum eos rem facere asperiores autem ipsam possimus, quo numquam?
                    </Span>
                </BoxContainer>
                <BoxContainer>
                    <BoxTitle>Experience</BoxTitle>
                    <Span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur cumque, dolorem unde voluptatibus harum molestiae commodi vel odio distinctio. Inventore voluptatibus praesentium quisquam repellendus sunt non. Modi, quis impedit!
                    </Span>
                </BoxContainer>
            </AboutContainer>
        </About>
    )
}

export default AboutMe
