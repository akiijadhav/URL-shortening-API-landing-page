import styled from 'styled-components';
import { CopyBtn } from '../ShortenedList/ShortenedList.Styled';

export const NavbarContainer = styled.div`
    display: flex;
    width: 100%;
    margin: auto;
    padding: ${props => props.theme.padTb16Lr0};
    align-items: center;
    height: 15vh;
    /* min-width: 375px; */

    @media (min-width: 1241px){
        max-width: 69.375rem;
    }

    @media (max-width: 1240px) {
       width: 100%;
       min-width: 350px;
       flex-wrap: nowrap;
       padding: 1rem;
    }

    @media (max-width: 992px) {
        justify-content: space-between;
        margin: 0 1rem !important;
        width: auto;
        flex-wrap: wrap;
        align-content: center;
        flex-wrap: nowrap;
    }

    /* @media (max-width: 678px) {
        justify-content: space-evenly;
    } */
`
export const BrandLogo = styled.img`
    width: auto;

    :hover {
        cursor: pointer;
    }

    @media (min-width: 375px) and (max-width: 992px) {
        flex: 0 0 auto;
        padding-left: 2rem;
    }
`

export const UnorderedRoutes = styled.ul`
    display: flex;
    flex: 2;
    list-style-type: none;
    padding-inline-start: 0;
    justify-content: flex-start;

    @media (max-width: 992px) {
        display: none;
        flex-direction: column;
        flex: 0;
    }
`

export const UnorderedSignupRoutes = styled.ul`
    flex: 1;
    list-style-type: none;
    padding-inline-start: 0;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 1240px) {
        margin: 0 2rem;
    }

    @media (max-width: 992px) {
        display: none;
        flex-direction: column;
        flex: 0;
        justify-content: center !important;
        margin: 0;
    }
`
export const NavItems = styled.li`
    padding: ${props => props.theme.PadTb16Lr24};
    color: ${props => props.theme.GrayishViolet};

    :hover {
        cursor: pointer;
        color: ${props => props.theme.PrimaryBgColor};
    }
`

export const NavBtns = styled.li`
    padding: ${props => props.theme.PadTb16Lr24};
    color: ${props => props.theme.GrayishViolet};

    :hover {
        cursor: pointer;
        color: ${props => props.theme.PrimaryBgColor};
    }
`
export const SignupBtn = styled(CopyBtn)`
    border-radius: ${props => props.theme.BrdrRdsMd};

    @media (max-width: 992px) {
        width: 21rem;
        
    }

    @media (max-width: 768px) {
        width: 14rem;
        
    }
`
export const Anchor = styled.a`
    text-decoration: none;
    color: ${props => props.theme.GrayishViolet};

    :hover {
        cursor: pointer;
        color: ${props => props.theme.PrimaryBgColor};
    }

    @media (max-width: 992px) {
        color: ${props => props.theme.White};

        :hover {
        cursor: pointer;
        color: ${props => props.theme.PrimaryBtnColor};
        }
    }
`

export const HamBurgerIcon = styled.i`
    cursor: pointer;
    font-size: 1.5rem;
    min-width: 120px;
    display: none;
    text-align: center;

    & :focus {
        outline: none;
    }

    @media (max-width: 992px) {
        display: block;
        min-width: 0;
        font-size: 1.3rem;
    }
`

export const RouteContainer = styled.div`
    display: block;
    align-items: center;
    flex-direction: row;
    flex: 1;
    transform: translateY(0);

    @media (max-width: 992px) {
        display: none;
        text-align: center;
        align-items: center;
        -ms-flex: 1;
        width: 100%;
        max-width: 25rem;
        z-index: 99999;
        flex-direction: column;
        justify-content: center;
        background-color: ${props => props.theme.PrimaryBgColor};
        margin: auto;
        position: relative;
        transform: translateY(6rem);
        height: auto;
        min-height: 21.5rem;
        border-radius: 12px;
    }

    @media (max-width: 768px) {
        width: auto;
    }
`
export const DesktopView = styled.div`
    display: flex;
    background: pink;
    flex: 1;    
`