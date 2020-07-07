import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: Helvetica, Arial, serif;
    box-sizing: border-box;
    }
    body {
        background-color: #F8F8F8;
    } 
        
    ul, li {
    list-style: none;
    display: inline-block;
    }
    
    a {
    text-decoration: none;
    }
`;

export const theme = {
    LunaOrange: '#E47D31'
};