import styled from 'styled-components';
import {HeroPara} from '../Hero/Hero.Styled';

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 639.375rem;
    height: 100%;
    padding-top: 3rem;
    padding-bottom: 8rem;
    background-color: ${props => props.theme.LightBg};
    margin: auto;
`

export const Statsheader = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 639.375rem;
    margin: auto;
    text-align: center;
    padding: ${props => props.theme.PadTb32Lr0};
`
export const StatsTitle = styled.h2`
    width: 100%;
    font-size: 2.25rem;
    color: ${props => props.theme.PrimaryBgColor};
`
export const StatsPara = styled(HeroPara)`
    width: 39rem;
`
export const CardRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 69.375rem;
    max-height: 22.625rem;
    margin: 3rem auto;
`
export const CardContainer = styled.div`
    display: flex;
    flex-direction: Column;
        &:nth-child(1) {
            margin: 0 1rem;
            max-height: 217px;
            width: 75%;
            max-width: 21.125rem;
            border-radius: 12px;
            background-color: ${props => props.theme.White};
            padding: 2rem;

    }

    &:nth-child(2) {
            margin-top: 2rem;
            max-height: 217px;
            width: 75%;
            max-width: 21.125rem;
            border-radius: 12px;
            background-color: ${props => props.theme.White};
            padding: 2rem;

    }

    &:nth-child(3) {
            margin-top: 4rem;
            margin-left: 1rem;
            margin-right: 1rem;
            margin-bottom: 0;
            max-height: 217px;
            width: 75%;
            max-width: 21.125rem;
            border-radius: 12px;
            background-color: ${props => props.theme.White};
            padding: 2rem;

    } 
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
`
export const CardTitle = styled.h3`
    font-size: 1.125rem;
    color: ${props => props.theme.PrimaryBgColor};
`
export const CardBio = styled(HeroPara)`
    font-size: 1rem;
    width: 100%;
`