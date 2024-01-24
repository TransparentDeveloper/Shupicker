import '@assets/fonts/index.css'
import { createGlobalStyle } from 'styled-components'
import { BREAK_POINT, COLOR, FONT_SIZE } from './reference-tokens'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: ${FONT_SIZE.md};
  }
  html{
    background-color: ${COLOR.grayScale[1500]};
    color: ${COLOR.grayScale[0]};
    font-family: 'Giants-Regular';
    font-size: 62.5%; 
    @media screen and (max-width: ${BREAK_POINT.md}) {
      font-size: 56.25%;
    }
    @media screen and (max-width: ${BREAK_POINT.sm}) {
      font-size: 50%;
    }
  }
  h1 {
    font-family: 'Giants-Bold';
    font-size: ${FONT_SIZE.xl};
  }
  h2 {
    font-family: 'Giants-Bold';
    font-size: ${FONT_SIZE.lg};
  }
  h3 {
    font-family: 'Giants-Bold';
    font-size: ${FONT_SIZE.bg};
  }
  h4{
    font-family: 'Giants-Bold';
  }
  button {
    border: none;
  }
  input {
    outline: none;
  }  
  ul, li {
    list-style: none;
  }
`

export default GlobalStyles
