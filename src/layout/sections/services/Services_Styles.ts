import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import groupBg from "../../../assets/images/drawing-bg.svg";
import {theme} from "../../../styles/Theme";
import {SectionSubtitle} from "../skills/skill/Skills";
import imgGroup from "../../../assets/images/groupImg.webp";

const Service = styled.section`
    ${FlexWrapper} {
      min-height: 70vh;

`

const ServiceBg = styled.div`
  position: relative;
  overflow: hidden;

  &::before {
    position: absolute;
    display: inline-block;
    height: 100%;
    width: 100%;
    content: '';
    background-image: url(${groupBg});
    background-repeat: no-repeat;
    background-position: center;
    top: -133px;
    right: -372px;
    
    @media ${theme.media.tablet} {
        display: none;
    }
  }
`
const ServiceSubTitle = styled(SectionSubtitle)`
position: relative;
  span {
    -webkit-background-clip: text;
    color: transparent;
    background-image: ${theme.colors.gradient};
  }

`

const ServiceImg = styled.img`
  max-width: 453px;
  max-height: 643px;
  width: 453px;
  height: 643px;
  object-fit: cover;

  @media ${theme.media.tablet} {
    position: absolute;
    background-image: url(${imgGroup});
    z-index: -9999;
    left: 0;
    top: 160px;
    opacity: 0.5;
  }
`

export const S = {
    Service,
    ServiceBg,
    ServiceSubTitle,
    ServiceImg,
}