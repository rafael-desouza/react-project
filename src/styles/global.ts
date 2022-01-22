import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root{
    --background: #F1F1F1;
    --surface: #43BA88;
    --primary: #F80032;
    --secondary: #2B2B2B;
    --onPrimary:#F1F1F1;
    --default-header: 8rem;
    }   
    
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    html{
   
        @media (max-width: 720px){
            font-size: 60%;
        }
    }

`

export default GlobalStyle
