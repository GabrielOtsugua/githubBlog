import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.slate300};
    -webkit-font-smoothing: antialiased;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.slate700}; 
      border-radius: 1rem;
    }
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
  }
`;
