import styled from 'styled-components';

export const LinksListContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.White};
    border-radius: ${props => props.theme.BrdrRdsSm};
`
export const OriginalLink = styled.div`
    padding: ${props => props.theme.PadTb8Lr32};
`
export const ClipboardForm = styled.form`
    padding: ${props => props.theme.PadTb8Lr32};
    width: 40%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
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

    :hover {
        filter: brightness(1.3) saturate(0.3);      
        outline: none;
        cursor: pointer;
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
  `