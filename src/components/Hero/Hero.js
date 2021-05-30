import React from 'react';
import illustratioWorking from '../../images/illustration-working.svg'
import {
        HeroContainer,
        WorkingImg,
        HeroTitle,
        HeroDescription,
        HeroPara,
        GetStartedBtn
        } from './Hero.Styled';


const Hero = () => {
    return (
        <HeroContainer>
            <HeroDescription>
                <HeroTitle>More than just shorter links</HeroTitle>
                    <HeroPara>Build your band's recognition and get detailed insights on how your links are performing.</HeroPara>
                <GetStartedBtn>Get Started</GetStartedBtn>
            </HeroDescription>
            <WorkingImg>
                <img src={illustratioWorking} alt="hero-illustration"></img>
            </WorkingImg>
        </HeroContainer>
    )
}

export default Hero;