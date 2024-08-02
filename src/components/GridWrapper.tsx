import styled from "styled-components";
import {theme} from "../styles/Theme";

type GridWrapperPropsType = {}


export const GridWrapper = styled.div<GridWrapperPropsType>`
  display: grid;
  justify-items: center;
  grid-template: repeat(5, auto) / repeat(6, auto);
  grid-auto-flow: dense;
  gap: 10px;
  
  @media ${theme.media.tabletMax} {
    display: grid;
    grid-template: repeat(5, auto) / repeat(5, 175px);
    grid-auto-flow: column dense;
    justify-content: space-around;
  };
  
  @media ${theme.media.tablet} {
    display: grid;
    grid-template: repeat(4, auto) / repeat(4, 175px);
    grid-auto-flow: dense;
    gap: 10px;
  };
  
  @media ${theme.media.mobile} {
    display: grid;
    grid-template: repeat(8, auto) / repeat(2, 175px);
    grid-auto-flow: column dense;
  };
`