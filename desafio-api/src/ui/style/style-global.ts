import { createGlobalStyle } from 'styled-components';

export const CreateGlobalStyle = createGlobalStyle`

 *{
     box-sizing:border-box;
     padding: 0;
     margin: 0;
 }

 body{
    background: #EDEDED;
    min-width: 960px;
    min-height: 980px;
 }

 body, input, button{
     font:16px Roboto, sans-serif;
 }

 input, button{
     border: none;
 }
 
 button{
     cursor: pointer;
 }
 `;

{/* yarn add @types/react-router-dom -D */ }