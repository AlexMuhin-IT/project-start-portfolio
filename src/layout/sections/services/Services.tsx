import React from "react";
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import imgGroup from "../../../assets/images/groupImg.webp";
import {SectionTitle} from "../../../components/SectionTitle";
import {Mastery} from "./Mastery";
import groupBg from "../../../assets/images/drawing-bg.svg";
import {SectionSubtitle} from "../skills/skill/Skills";
import {theme} from "../../../styles/Theme";

export function Services() {
    return (
        <StyledMService id={'Services'}>
            <Container>
                <StyledServiceBg>
                    <SectionTitle>Services</SectionTitle>
                    <ServiceSubTitle>From beginning ideas to individual
                        integrity,<span> line on the paper to final projects</span>
                    </ServiceSubTitle>
                    <FlexWrapper justify={'space-between'}>
                        <ServiceImg src={imgGroup} alt=""/>
                        <FlexWrapper justify={'space-evenly'} align={'end'} wrap={'wrap'}>
                            <Mastery title={'Web design'}
                                     subtitle={'Provide our customers with optimized user-friendly experience to increase the efficiency of digital products.'
                                     } linkUrl={'See Works'}/>
                            <Mastery title={'Branding'}
                                     subtitle={'Understanding the business and their target customers, I’m the bridges to bring the brand closer to their clients.'
                                     } linkUrl={'See Works'}/>
                            <Mastery title={'Photography'}
                                     subtitle={'While stock photography is a great option for sourcing high-quality photos, it’s important that you choose your photos thoughtfully.'
                                     } linkUrl={'See Works'}/>
                            <Mastery title={'Mobile design'}
                                     subtitle={'Mobile application development is a highlight that businesses are interested in at the moment and in the future.'
                                     } linkUrl={'See Works'}/>
                            <Mastery title={'3D Modeling'}
                                     subtitle={'Help you translate your existing design or concept into CAD or to work with you to develop the ideal design. 3D Models great for modern digital art'
                                     } linkUrl={'See Works'}/>
                            <Mastery title={'Video creating'}
                                     subtitle={'Create high-impact social videos with our easy video maker. Use custom video templates to find the right story for your business.'
                                     } linkUrl={'See Works'}/>
                        </FlexWrapper>
                    </FlexWrapper>
                </StyledServiceBg>
            </Container>
        </StyledMService>
    );
}

const StyledMService = styled.section`
`

const StyledServiceBg = styled.div`
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
    background-image: url(${imgGroup});
    z-index: -1;
    position: absolute;
    top: 0;
    opacity: 0.5;
  }

`

//   width: 50%;
//   height: 50%;
//
// }
//
// @media ${theme.media.mobile} {
//   width: 30%;
//   height: 30%;
// }

