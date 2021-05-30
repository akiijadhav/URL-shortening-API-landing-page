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
`

export const HeroTitle =  styled.h1`
    font-size: 4rem;
    margin: ${props => props.theme.MarTb16Lr0};
    color: ${props => props.theme.PrimaryBgColor};
    display: flex;
    flex: 0;
    flex-direction: column;
    align-self: center;
    text-align: left;
    position: relative;
`

export const WorkingImg = styled.div`
    position: absolute;
    right: -100px;
    flex: 1;
    padding: ${props => props.theme.PadTb48Lr0};
`

export const HeroDescription = styled.div`
 flex: 0;
 margin: 2rem 0;
`
export const HeroPara = styled.p`
    width: 34.6875rem;
    word-spacing: 0.1rem;
    line-height: 1.7;
    letter-spacing: 0.1rem;
    flex-wrap: wrap;
    color: ${props => props.theme.Gray};
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