import React from 'react';
import BrandRecognition from '../../images/icon-brand-recognition.svg';
import DetailedRecords from '../../images/icon-detailed-records.svg';
import FullyCustomizable from '../../images/icon-fully-customizable.svg';
import {
    StatsContainer,
    Statsheader,
    StatsTitle,
    StatsPara,
    CardRowContainer,
    CardContainer,
    CardImage,
    CardIcon,
    CardTitle,
    CardBio
        } from './Statistics.Styled';

const Statistics = () => {
    return (
        <StatsContainer>
            <Statsheader>
                <StatsTitle>Advanced Statistics</StatsTitle>
                <StatsPara>Track how your links are performing across the web with our advanced statistics dashboard.</StatsPara>
            </Statsheader>


            <CardRowContainer>
                <CardContainer> 
                    <CardImage>
                        <CardIcon src={BrandRecognition} alt="brand-recognition" />
                    </CardImage>
                    <CardTitle>
                        Brand Recognition
                    </CardTitle>
                    <CardBio>
                        Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your consent.
                    </CardBio>
                </CardContainer>

                <CardContainer>
                    <CardImage>
                        <CardIcon src={DetailedRecords} alt="brand-recognition" />
                    </CardImage>
                    <CardTitle>
                        Detailed Records
                    </CardTitle>
                        <CardBio>
                            Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                        </CardBio>
                </CardContainer>

                <CardContainer>
                    <CardImage>
                        <CardIcon src={FullyCustomizable} alt="brand-recognition" />
                    </CardImage>
                    <CardTitle>
                        Fully Customizable
                    </CardTitle>
                    <CardBio>
                        Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                    </CardBio>
                </CardContainer>
            </CardRowContainer>
        </StatsContainer>
    )
}

export default Statistics;