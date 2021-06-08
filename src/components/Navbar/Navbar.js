import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import styled from 'styled-components';

import {
        // NavbarContainer,
        BrandLogo,
        // UnorderedRoutes,
        // UnorderedSignupRoutes,
        // NavItems,
        // NavBtns,
        // SignupBtn,
        Anchor,
        SignupBtn,
        // HamBurgerIcon,
        // RouteContainer

            } from './Navbar.Styled';
// import { Line } from '../ShortenedList/ShortenedList.Styled';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ display: 'flex'}}>
            <Nav>
                <BrandLogo src={logo}/>
                <Hamburger onClick={(() => setIsOpen(!isOpen) )}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Hamburger>
                <Menu isOpen={isOpen}>
                    <MenuLinkWrapper1>
                        <MenuLink><Anchor>Features</Anchor></MenuLink>
                        <MenuLink><Anchor>Pricing</Anchor></MenuLink>
                        <MenuLink><Anchor>Resources</Anchor></MenuLink>
                        <Line1 />
                        </MenuLinkWrapper1>

                    <MenuLinkWrapper2>
                        <MenuLink><Anchor>Login</Anchor></MenuLink>
                        <MenuLink><Anchor><Anchor><SignupBtn>Signup</SignupBtn></Anchor></Anchor></MenuLink>
                    </MenuLinkWrapper2>
                </Menu>
            </Nav>
        </div>
    )
}

export default Navbar;

const Nav = styled.div`
    padding: 3rem 0;
    margin: 0 auto;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    flex-wrap: wrap;
    max-width: 69.375rem;
    

    @media (max-width: 992px) {
        justify-content: space-between;
    }
`
const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    padding: 0 3rem;
    flex:1;

    span {
      height: 2px;
        width: 18px;
        background: black;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width: 992px) {
        display: flex;
        flex: 1 1 45%;
        align-items: flex-end;
    }

    @media (max-width: 600px) {
        flex: 1 1 30%;
    }
`
const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    flex: 1;


    @media (max-width: 992px) {
        overflow: hidden;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        text-align: center;
        max-height: ${({ isOpen }) => isOpen ? "auto" : "0"};
        transition: max-height 0.3s ease-in;
        background: ${ props => props.theme.PrimaryBgColor};
        max-width: 100%;
        min-width: 375px;;
        margin: 3rem 1rem; 
    }
`
const MenuLink = styled.div`
    padding: 0 1rem;

    @media (max-width: 992px) {
        padding: 1rem;

    }


`
const MenuLinkWrapper1 = styled.div`
    display: flex;
    flex: 1 1;
    flex-direction: row;
    justify-content: flex-start;

    @media (max-width: 992px) {
        justify-content: center;
        flex-direction: column;
    }
`
const MenuLinkWrapper2 = styled.div`
    display: flex;
    flex: 0 0;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 992px) {
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }
`

const Line1 = styled.hr`
    width: 80%;
    border-top: 1px solid #edf2f7;
    display: none;
    
    @media(max-width:992px) {
        display: block;
    }
 `
