import styled from 'styled-components';
import {HeroPara} from '../Hero/Hero.Styled';

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* max-width: 639.375rem; */
    height: 100%;
    padding-top: 3rem;
    padding-bottom: 8rem;
    background-color: ${props => props.theme.LightBg};
    margin: auto;
    
    @media (max-width: 1200px) {
        padding-bottom: 3rem;
    }
`

export const Statsheader = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 639.375rem;
    margin: auto;
    text-align: center;
    padding: ${props => props.theme.PadTb32Lr0};

    @media (max-width: 1240px) {
        width: 100%;
        max-width: 100%;
        padding:1rem;
    }
`
export const StatsTitle = styled.h2`
    width: 100%;
    font-size: 2.25rem;
    color: ${props => props.theme.PrimaryBgColor};
`
export const StatsPara = styled(HeroPara)`
    width: 100%;

    @media (max-width: 1240px) {
        width: 35ch;
        margin: auto;
    }
`
export const CardRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 69.375rem;
    /* max-height: 22.625rem; */
    margin: 3rem auto;
    height: auto;

    @media (max-width: 1200px) {
        justify-content: space-evenly;
        flex-wrap: wrap;
        padding: 2rem;
    }

    @media (max-width: 968px) {
        flex-wrap: nowrap;
        flex-direction: column;
    } 
`
export const CardContainer = styled.div`
    display: flex;
    flex-direction: Column;
        &:nth-child(1) {
            margin: 0 1rem;
            max-height: 217px;
            width: 75%;
            max-width: 20.125rem;
            border-radius: 12px;
            background-color: ${props => props.theme.White};
            padding: 2rem;

            @media (max-width: 1200px) {
                max-height: 100% !important ;
            }

    }

    &:nth-child(2) {
            margin-top: 2rem;
            max-height: 217px;
            width: 75%;
            max-width: 20.125rem;
            border-radius: 12px;
            background-color: ${props => props.theme.White};
            padding: 2rem;

            @media (max-width: 1200px) {
                max-height: 100% !important ;
            }
    }

    &:nth-child(3) {
            margin-top: 4rem;
            margin-left: 1rem;
            margin-right: 1rem;
            margin-bottom: 0;
            max-height: 217px;
            width: 75%;
            max-width: 20.125rem;
            border-radius: 12px;
            background-color: ${props => props.theme.White};
            padding: 2rem;
            
            @media (max-width: 1200px) {
                max-height: 100% !important ;
            }

    }
    @media (max-width: 1200px) {
        margin: 3rem auto !important;
        height: auto;
        text-align: center;
        max-height: auto !important;
    }

    /* @media (max-width: 968px) {
        margin: 0 1rem;
    } */
`

export const CardImage = styled.div`
    position: relative;
`
export const CardIcon = styled.img`
    position: absolute;
    margin: -4.5rem 0;
    background-color: #232127;
    height: 4.5rem;
    width: 4.5rem;
    text-align: center;
    border-radius: 50%;

    @media (max-width: 1200px) {
        margin: -4.5rem 0 1rem 0;
        position: relative;
        justify-content: center;
        align-self: center;
    }
`
export const CardTitle = styled.h3`
    font-size: 1.125rem;
    color: ${props => props.theme.PrimaryBgColor};
`
export const CardBio = styled(HeroPara)`
    font-size: 1rem;
    width: 100%;
`