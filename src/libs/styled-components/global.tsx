import { createGlobalStyle } from 'styled-components'
import { GIANTS_BOLD, GIANTS_REGULAR } from './css-utils'
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
    ${GIANTS_REGULAR}
    font-size: 62.5%; 
    @media screen and (max-width: ${BREAK_POINT.mobile.maxWidth + 'px'}) {
      font-size: 50%;
    }
    height: 100%;
  }
  body{
    height: 100%;
  }
  h1 {
    ${GIANTS_BOLD}
    font-size: ${FONT_SIZE.xl};
  }
  h2 {
    ${GIANTS_BOLD}
    font-size: ${FONT_SIZE.lg};
  }
  h3 {
    ${GIANTS_BOLD}
    font-size: ${FONT_SIZE.bg};
  }
  h4{
    ${GIANTS_BOLD}
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
