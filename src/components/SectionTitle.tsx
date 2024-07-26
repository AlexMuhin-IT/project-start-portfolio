import styled from 'styled-components';
import {theme} from "../styles/Theme";



export const SectionTitle = styled.h2`
text-align: center;
  color: #42446E;
  font-weight: 700;
  //font-size: 48px;
  //font-size: calc( (100vw - 480px)/(1200 - 480) * (48 - 16) + 16px);
  padding-bottom: 50px;
  
  span {
    background-clip: text;
    color: transparent;
    background-image: ${theme.colors.gradient};
  }
`



