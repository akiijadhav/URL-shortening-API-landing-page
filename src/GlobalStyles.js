import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    width: 100%;
    height: 100%;
    min-width: 23.438rem;
    background-color: ${props => props.theme.White};
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.125rem;
    overflow-X: hidden;

    &::-webkit-scrollbar {
      width: .75rem;
      cursor: pointer;
    }

    &::-webkit-scrollbar-track {
      background-color: ${props => props.theme.ScrollBarTrack};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.PrimaryBtnColor};
      border-radius: 9999px;
    }
  }
`;

export default GlobalStyles;