import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Main = styled.section`

`
const TextWrap = styled.article`
  margin-right: 100px;

  @media ${theme.media.tablet} {
    margin-right: 0;
  }
`
const SmallText = styled.span`
  ${font({family: "'Poppins','sans-serif'", weight: 700, Fmax: 48, Fmin: 26,})}
`
const Name = styled.h2`

  span {
    -webkit-background-clip: text;
    color: transparent;
    background-image: ${theme.colors.gradient};
  }
`
const MainTitle = styled.h1`
  ${font({weight: 700, Fmax: 58, Fmin: 20,})}
`
const ImgWrap = styled.div`
  max-width: 350px;
  overflow: hidden;
  border: 9px solid transparent;
  border-radius: 230px;
  background: linear-gradient(to top, #13B0F5, #E70FAA);

  @media ${theme.media.tablet} {
    margin-bottom: 40px;
  }
  @media ${theme.media.mobile} {
    max-width: 250px
  }
`
const Photo = styled.img`
  width: 100%;
  
`
export const S = {
    Main,
    TextWrap,
    SmallText,
    Name,
    MainTitle,
    ImgWrap,
    Photo,
}