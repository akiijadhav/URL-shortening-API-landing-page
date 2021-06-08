import styled from 'styled-components';
import ShortenBgDesktop from '../../images/bg-shorten-desktop.svg';
import { GetStarted } from '../Boost/Boost.styled';

export const SplitColor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 17vh;
  height: 100%;
  background-color: ${props => props.theme.LightBg};

  @media (max-width: 1240px) {
    margin: 0 auto;
    /* padding: 0 1rem; */
    min-width: 350px;
    width: 100%;
  }
  /* @media (max-width: 824px) {
    width: 500px;
  } */
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
    position: relative;
    transform: translateY(-75px);
    margin: auto;
    justify-content: center;

    @media (max-width: 1240px) {
      min-width: 350px;
      margin: auto;
      padding: 0 1rem;
      max-width: 65.375rem;
      width: calc(100% - 4rem);
    }

    @media (max-width: 824px) {
      width: calc(100% - 4rem);
    }

    @media (max-width: 824px) {
      margin: auto;
      padding: 0 1rem;
      max-width: auto;
    }
`

export const ShortenBtn = styled(GetStarted)`
    border-radius: ${props => props.theme.BrdrRdsSm};
    margin: ${props => props.theme.MarTb16LrAuto};

    @media (max-width: 1240px) {
      width: 100%;
    }
`

export const InputBox = styled.div`
    display: flex;
    justify-content: center;
    /* width: 63.375rem; */
    width: 100%;
    margin: auto;

    @media (max-width: 1240px) {
      /* background: red; */
      flex-wrap: wrap;
      height: auto;
      width: 100%;
    }
    
`
export const Input = styled.input.attrs(props => ({
    type: "text",
    size: props.size || '1rem',
  }))
    `
    border: 1px solid transparent;
    width: 50rem;
    height: 3rem;
    padding: 0rem 1rem 0 1rem;
    margin: 1rem 0;
    border-radius: ${props => props.theme.BrdrRdsSm};

    :focus {
      border: 1px solid ${props => props.theme.SecondaryRed};
      outline-style: none;
    }

    ::placeholder {
      color: ${props => props.theme.SecondaryRed};   
    };

    @media (max-width: 1240px) {
      /* background: red; */
      flex-wrap: wrap;
      width: calc(100% - 2.1rem);
    }
  `
  export const Form = styled.form`
    display: flex;
    width: 100%;
    max-width: 65.375rem;
    height: 5.375rem;
    align-items: center;


    @media (max-width: 1240px) {
      /* background: red; */
      flex-wrap: wrap;
      height: auto;
      width: 100%;
      padding: 0 1rem; 
    }

    @media (min-width: 450px) and (max-width: 1239px) {
      padding: 0;
    }
  `
  export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  `
  export const ErrorMessage = styled.span`
    color: ${props => props.theme.SecondaryRed};
    font-style: italic;

    @media (max-width: 1240px) {
      font-size: 0.8rem;
    }
  `
  export const UnorderedList = styled.ul`
    padding-inline-start: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    transform: translateY(-75px);
  `
  export const ListItem = styled.li`
    display: flex;
    list-style-type: none;
    width: 100%;
    max-width: 69.375rem; 
    margin: ${props => props.theme.MarTb16LrAuto};
  `