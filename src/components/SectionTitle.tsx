import styled from 'styled-components';
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";


export const SectionTitle = styled.h2`
  text-align: center;
  color: #42446E;
  ${font({family: "'Poppins','sans-serif'", weight: 700, Fmax: 48, Fmin: 26,})}
  padding-bottom: 50px;
  grid-column-start: 1;
  grid-column-end: 7;

  @media ${theme.media.tabletMax} {
    grid-column-start: 1;
    grid-column-end: 6;
    padding-bottom: 20px;
  };
  
  @media ${theme.media.tablet} {
    grid-column-start: 1;
    grid-column-end: 5;
    padding-bottom: 10px;
  };
  
  @media ${theme.media.mobile} {
    grid-column-start: 1;
    grid-column-end: 3;
  };

  span {
    -webkit-background-clip: text;
    color: transparent;
    background-image: ${theme.colors.gradient};
  }
`



