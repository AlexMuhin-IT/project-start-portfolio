import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Header = styled.header`
  padding: 40px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
 
  @media ${theme.media.mobile}{
    padding: 20px 0 100px;
  }
`

export const S = {
    Header
}