import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   *{ 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']}
    }

    body {
        background: ${(props) => props.theme['gray-900']};
        color: ${(props) => props.theme['gray-300']};
        -webkit-font-smoothing: antialiased;
    }

    body,input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight:400;
        font-size:1rem;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
     transition: background-color 5000s ease-in-out 0s;
     -webkit-text-fill-color: #fff !important;
    }

    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
      input[type="number"] {
        -moz-appearance: textfield;
        appearance: textfield;
      }
    
`
