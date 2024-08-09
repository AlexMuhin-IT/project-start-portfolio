import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import groupBg from "../../../assets/images/drawing-bg.svg";
import {theme} from "../../../styles/Theme";
import {SectionSubtitle} from "../skills/Skills_Styles";
import imgGroup from "../../../assets/images/groupImg.webp";
import {font} from "../../../styles/Common";
import linkArrow from "../../../assets/images/link-arrow-right.svg";

const Service = styled.section`
  position: relative;

  ${FlexWrapper} {
    min-height: 70vh;
  }
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
// Mastery

const MasteryCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 315px;
  margin-bottom: 70px;

  h3 {
    ${font({weight: 600, Fmax: 18, Fmin: 10,})}
    margin-bottom: 20px;
  }

  p {
    ${font({weight: 400, Fmax: 12, Fmin: 8,})}
    color: #6b7280;
    margin-bottom: 20px;
  }

  a {
    ${font({weight: 500, Fmax: 12, Fmin: 8,})}
    color: #3730a3;
    position: relative;

    &::before {
      display: inline-block;
      height: 20px;
      width: 20px;
      content: '';
      background-image: url(${linkArrow});
      position: absolute;
      left: 65px;
      top: -3px;
    }
  }

  @media ${theme.media.tablet} {
    margin-bottom: 35px;
    max-width: 210px;
    max-height: 120px;
  }
`


export const S = {
    Service,
    ServiceBg,
    ServiceSubTitle,
    ServiceImg,
    MasteryCard,
}