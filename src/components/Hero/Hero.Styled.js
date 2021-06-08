import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 80vh;
    max-width: 69.375rem;
    margin: auto;
    padding: ${props => props.theme.padTb16Lr0};
    align-items: flex-start;
    flex-wrap: wrap;

    @media (max-width: 1240px) {
        max-width: 65.375rem;
        padding: 1rem;
        height: 100vh;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`

export const HeroTitle = styled.h1`
    font-size: 4rem;
    margin: ${props => props.theme.MarTb16Lr0};
    color: ${props => props.theme.PrimaryBgColor};
    display: flex;
    flex: 0;
    flex-direction: column;
    align-self: center;
    text-align: left;
    position: relative;

    @media (max-width: 1240px) {
        width: 14ch;
        text-align: center;
    }

    @media (max-width: 992px) {
        font-size: 3rem;
    }
`

export const WorkingImg = styled.div`
    flex: 1;
    /* padding: ${props => props.theme.PadTb48Lr0}; */
    height: 100%;

    @media (max-width: 1240px) {
        justify-content: center;
        width: 100%;
        height: 100%;
        order: 1;
    }
`
export const SvgImg = styled.img`
    height: auto;
    width: auto;
    position: absolute;
    right: -8rem;
`

export const HeroDescription = styled.div`
    flex: 0;
    margin: 2rem 0;
    min-height: 500px;

    @media (max-width: 1240px) {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 1rem auto;
        order: 2;
 }
`
export const HeroPara = styled.p`
    width: 34.6875rem;
    word-spacing: 0.1rem;
    line-height: 1.7;
    letter-spacing: 0.1rem;
    flex-wrap: wrap;
    color: ${props => props.theme.Gray};

    @media(max-width: 1240px) {
        width: 35ch;
    }
`
export const GetStartedBtn = styled.button`
    width: 10.25rem;
    height: 3rem;
    border-radius: 1.5rem;
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