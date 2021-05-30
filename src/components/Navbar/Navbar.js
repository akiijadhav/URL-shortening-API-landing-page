import React from 'react';
import logo from '../../images/logo.svg';
import {
        NavbarContainer,
        BrandLogo,
        UnorderedRoutes,
        UnorderedSignupRoutes,
        NavItems,
        NavBtns,
        SignupBtn,
        Anchor
            } from './Navbar.Styled';

const Navbar = () => {
    return (
        <NavbarContainer>
            <BrandLogo src={logo} alt="logo"/>
            <UnorderedRoutes>
                    <NavItems><Anchor href="#0">Features</Anchor></NavItems>
                    <NavItems><Anchor href="#1">Pricing</Anchor></NavItems>
                    <NavItems><Anchor href="#2">Resources</Anchor></NavItems>
            </UnorderedRoutes>
            <UnorderedSignupRoutes>
                <NavBtns><Anchor href="#3">Login</Anchor></NavBtns>
                <NavBtns><Anchor href="#4"><SignupBtn>Sign Up</SignupBtn></Anchor></NavBtns>
            </UnorderedSignupRoutes>
        </NavbarContainer>
    )
}

export default Navbar;