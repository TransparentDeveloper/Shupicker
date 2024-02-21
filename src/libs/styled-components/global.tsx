import '@/assets/fonts/index.css'
import { createGlobalStyle } from 'styled-components'
import { BORDER_RADIUS, BREAK_POINT, COLOR, FONT_SIZE } from './reference-tokens'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: ${FONT_SIZE.md};

    ::-webkit-scrollbar {
      width: 0.5rem;
      height: 0.5rem;
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: ${BORDER_RADIUS.lg};
      background-color: ${COLOR.grayScale[200]};
    }
  }
  html{
    background-color: ${COLOR.grayScale[300]};
    color: ${COLOR.grayScale[1500]};
    font-family: 'Giants-Regular';
    font-size: 62.5%; 
    @media screen and (max-width: ${BREAK_POINT.md}) {
      font-size: 50%;
    }
    @media screen and (max-width: ${BREAK_POINT.sm}) {
      font-size: 31.25%;
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
  p{
    font-size: ${FONT_SIZE.sm};
  }
`

export default GlobalStyles
