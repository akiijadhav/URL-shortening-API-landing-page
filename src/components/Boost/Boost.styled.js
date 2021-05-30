import styled from 'styled-components';
import BoostDesktopBg from '../../images/bg-boost-desktop.svg'

//styles
export const BoostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 3rem 0;
    justify-content: center;
    text-align: center;
    background: url(${BoostDesktopBg}) no-repeat center;
    background-size: cover;
    background-color: ${props => props.theme.VeryDarkBlue};
`

export const GetStarted = styled.button`
    width: 10.25rem;
    height: 3rem;
    border-radius: ${props => props.theme.BrdrRdsMd};
    margin: ${props => props.theme.MarTb16LrAuto};
    border: none;
    background-color: ${props => props.theme.PrimaryBtnColor};
    color: ${props => props.theme.White};

    :hover {
        filter: brightness(1.3) saturate(0.3);      
        outline: none;
        cursor: pointer;
    }
`

export const BoostTitle = styled.h2`
    margin: ${props => props.theme.MarTb16LrAuto};
    font-size: 2.25rem;
    color: ${props => props.theme.White};
`