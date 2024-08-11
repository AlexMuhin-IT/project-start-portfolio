import styled from "styled-components";
import {theme} from "../styles/Theme";

type GridWrapperPropsType = {}


export const GridWrapper = styled.div<GridWrapperPropsType>`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(175px, auto));

  gap: 10px;

`