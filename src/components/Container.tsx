import styled from "styled-components";
import {theme} from "../styles/Theme";


export const Container = styled.div`
  max-width: 1194px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  
  
  @media ${theme.media.mobile}{
    padding: 0 5px;
    
  }
`