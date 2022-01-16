import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root{
    --background: #FFFFFF;
    --surface: #222222;
    --primary: #43BA88;
    --secondary: #2B2B2B;
    --onBackground: #222222;
    --onSurface: #FFFFFF;
    --onPrimary:#FFFFFF;
    --onSecondary:#FFFFFF ;

    }   
    
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 60%;
        }
    }


`

export default GlobalStyle
