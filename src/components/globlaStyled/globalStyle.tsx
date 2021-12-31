import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    /** Reset Css by:  Josh Comeau **/
    
    :root {
        --color-bg: #020e1b;
        --color-primary: #3F72AF;
        --color-bone: #b0b9c4;
        --color-title: #F9F7F7;
    }
        
    *, *::before, *::after {
        box-sizing: border-box;
    }
  
    * {
        margin: 0;
    }
    
    html, body {
        height: 100%;
        font-family: 'Roboto', sans-serif;
        overflow-x: hidden;
        background: rgb(0,7,14);
        scroll-behavior: smooth;
    }
  
    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }
 
    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }
    
    input, button, textarea, select {
        font: inherit;
    }
   
    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    h1, h2, h3, h4, h5, h6 {
        color: var(--color-title);
    }
    
    p { 
        color: var(--color-bone);
    }

    /** SCROLL BAR **/
    *::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    *::-webkit-scrollbar-button:increment,
    *::-webkit-scrollbar-button {
        display: none;
    }
    
    *::-webkit-scrollbar-track {
        background: #444444;
    }
    
    *::-webkit-scrollbar-thumb {
        background: rgb(182, 182, 182);
        border-radius: 4px;
    }
    
    *::-webkit-scrollbar-thumb:hover {
        background: #999999;
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    }
    
    *::-webkit-scrollbar-thumb:active {
        background-color: #858585;
    }
`;

export default GlobalStyle