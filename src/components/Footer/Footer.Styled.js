import styled from 'styled-components';

export const BgWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.VeryDarkViolet};
`


export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    max-width: 69.375rem;
    margin: auto;
    justify-content: space-evenly;
    align-items: baseline;
`
// SiteName,
// SiteFeatures,
// SiteResources,
// SitePages,
// SiteSocials
export const SiteName = styled.h2`
    font-size: 2.25rem;
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.White};
`

export const SiteFeatures = styled.div`
   flex-direction: column;
`

export const SiteResources = styled(SiteFeatures)`
`

export const SitePages = styled(SiteFeatures)`
`

export const SiteSocials = styled(SiteFeatures)`
`

export const CategoryHeader = styled.p`
    font-size: 1.125rem;
    color: ${props => props.theme.White};
    padding: ${props => props.theme.PadTb8Lr40};
    text-align: left;
`

export const Flist = styled.ul`
    display: flex;
    flex-direction: column;
    padding-inline-start: 0;
    list-style-type: none;

    & li {
        padding: ${props => props.theme.PadTb8Lr40};
        font-size: 1rem;

        & a {
            text-decoration: none;
            text-align: left;
            color: ${props => props.theme.Gray};

            :hover {
                color: ${props => props.theme.PrimaryBtnColor};
            }
        }
    }
`

export const Rlist = styled(Flist)`
`

export const Plist = styled(Flist)`
`

export const Slist = styled.ul`
    display: flex;
    padding-inline-start: 0%;
    flex-direction: row;
    list-style-type: none;

    & li {
        padding: ${props => props.theme.padTbLr8};
        
        :hover {
            cursor: pointer;
        }
    }
`