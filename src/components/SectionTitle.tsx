import styled from 'styled-components';
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";


export const SectionTitle = styled.h2`
  text-align: center;
  color: #42446E;
  ${font({family: "'Poppins','sans-serif'", weight: 700, Fmax: 48, Fmin: 26,})}
  padding-bottom: 50px;

  @media ${theme.media.tablet} {
    padding-bottom: 30px;
  };
  
  span {
    -webkit-background-clip: text;
    color: transparent;
    background-image: ${theme.colors.gradient};
  }
`



