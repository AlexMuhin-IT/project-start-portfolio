import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 176px;
  margin-bottom: 40px;
`
const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  list-style-type: none;
  position: relative;

`
const SocialItem = styled.li``
const SocialLink = styled.a``

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  border-bottom: 2px solid #666666;
  padding-bottom: 55px;

  a {
    flex-grow: 3;
    & + a {
      flex-grow: 1;
    }
  }

  @media ${theme.media.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`
const FooterBottom = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  span {
    -webkit-background-clip: text;
    color: transparent;
    background-image: ${theme.colors.gradient};
  };

  @media ${theme.media.mobile} {
    justify-content: space-around;
    
    p {
      display: flex;
      flex-direction: column;
      gap: 20px;
      font-size: 20px;
      line-height: 0.9;
    }
  }

}
`

export const S = {
    Footer,
    SocialList,
    SocialItem,
    SocialLink,
    FooterTop,
    FooterBottom,
}