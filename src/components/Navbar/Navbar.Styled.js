import styled from 'styled-components';
import { CopyBtn } from '../ShortenedList/ShortenedList.Styled';

export const NavbarContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 69.375rem;
    margin: auto;
    padding: ${props => props.theme.padTb16Lr0};
    align-items: center;
    height: 15vh;
    /* justify-content: space-between; */
`
export const BrandLogo = styled.img`
    flex: 0;

    :hover {
        cursor: pointer;
    }
`

export const UnorderedRoutes = styled.ul`
    display: flex;
    flex: 2;
    list-style-type: none;
    padding-inline-start: 0;
    justify-content: flex-start;
`

export const UnorderedSignupRoutes = styled.ul`
    display: flex;
    flex: 1;
    list-style-type: none;
    padding-inline-start: 0;
    justify-content: flex-end;
    align-items: center;
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
`
export const Anchor = styled.a`
    text-decoration: none;
    color: ${props => props.theme.GrayishViolet};

    :hover {
        cursor: pointer;
        color: ${props => props.theme.PrimaryBgColor};
    }
`