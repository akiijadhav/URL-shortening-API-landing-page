import styled from 'styled-components';
import ShortenBgDesktop from '../../images/bg-shorten-desktop.svg';
import { GetStarted } from '../Boost/Boost.styled';

export const SplitColor = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 17vh;
  height: auto;
  background-color: ${props => props.theme.LightBg};
`

export const LgContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 69.375rem;
    border-radius: ${props => props.theme.BrdrRdsSm};
    justify-content: center;
    background-size: cover;
    background: url(${ShortenBgDesktop}) no-repeat center;
    background-color: ${props => props.theme.PrimaryBgColor};
    padding: ${props => props.theme.PadTb32Lr0};
    z-index: 50;
    position: absolute;
    top: 95%;
    justify-content: center;
`

export const ShortenBtn = styled(GetStarted)`
    border-radius: ${props => props.theme.BrdrRdsSm};
    margin: ${props => props.theme.MarTb16LrAuto};
`

export const InputBox = styled.div`
    display: flex;
    justify-content: center;
    width: 63.375rem;
    margin: auto;
`
export const Input = styled.input.attrs(props => ({
    type: "text",
    size: props.size || '1rem',
  }))
    `
    border: 1px solid transparent;
    width: 50rem;
    height: 3rem;
    padding-left: ${props => props.size};
    margin: ${props => props.theme.MarTb16Lr0};
    border-radius: ${props => props.theme.BrdrRdsSm};

    :focus {
      border: 1px solid ${props => props.theme.SecondaryRed};
      outline-style: none;
    }

    ::placeholder {
      color: ${props => props.theme.SecondaryRed};   
    };
  `
  export const Form = styled.form`
    display: flex;
    width: 100%;
    max-width: 63.375rem;
    height: 5.375rem;
    align-items: center;
  `
  export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
  `
  export const ErrorMessage = styled.span`
    color: ${props => props.theme.SecondaryRed};
    font-style: italic;
  `
  export const UnorderedList = styled.ul`
    padding-inline-start: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 75px;
  `
  export const ListItem = styled.li`
    display: flex;
    list-style-type: none;
    width: 100%;
    max-width: 69.375rem; 
    margin: ${props => props.theme.MarTb16LrAuto};
  `