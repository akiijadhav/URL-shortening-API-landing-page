import styled from 'styled-components';

export const LinksListContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.White};
    border-radius: ${props => props.theme.BrdrRdsSm};

    @media (max-width: 1240px) {
        flex-direction: column;
        margin: auto 1rem;
        padding: 0 1rem;
    }
`
export const OriginalLink = styled.div`
    padding: ${props => props.theme.PadTb8Lr32};

    @media (max-width: 1240px) {
       width: 100%;
       text-align: center;
    }

`
export const ClipboardForm = styled.form`
    padding: ${props => props.theme.PadTb8Lr32};
    width: 40%;
    flex: 1 1 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 1240px) {
        flex-direction: column;
        width: 100%;
        padding: 0.5rem 0;
    }
`
export const Line = styled.hr`
    display: none;
    border-top: 1px solid #edf2f7;
    @media (max-width: 1240px) {
        display: block;
    }
` 

export const CopyBtn = styled.button`
    width: 8rem;
    height: 3rem;
    margin: ${props => props.theme.MarTb16Lr0};
    border: none;
    background-color: ${props => props.theme.PrimaryBtnColor};
    color: ${props => props.theme.White};
    align-items: center;
    border-radius: ${props => props.theme.BrdrRdsSm};
    color: ${props => props.theme.White};

    @media (max-width: 1240px) {
        width: 100%;
        margin: auto 1rem;
    }

    :hover {
        filter: brightness(1.3) saturate(0.3);      
        outline: none;
        cursor: pointer;
    }

    :focus {
        background-color: ${props => props.theme.PrimaryBgColor};
    }

    :active {
        background-color: ${props => props.theme.PrimaryBgColor};
    }
`

export const Input = styled.input.attrs(props => ({
    type: "url",
    size: props.size || '1rem',
  }))`
    border: 1px solid transparent;
    height: 3rem;
    width: 300px;
    padding-left: ${props => props.size};
    margin: ${props => props.theme.MarTb0Lr16};
    border-radius: ${props => props.theme.BrdrRdsSm};
    color: ${props => props.theme.PrimaryBtnColor};
    background-color: transparent;

    :focus {
      border: 1px solid ${props => props.theme.SecondaryRed};
      outline-style: none;
    }

    ::placeholder {
    color: ${props => props.theme.SecondaryRed};   
    };

    @media (max-width: 1240px) {
        text-align: center;
        width: 100%;
        padding: 0;
        margin: 0;
    }
  `

