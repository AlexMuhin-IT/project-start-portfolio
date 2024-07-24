import React from "react";
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import imgGroup from "../../../assets/images/groupImg.jpg";
import {SectionTitle} from "../../../components/SectionTitle";
import {Mastery} from "./Mastery";
import groupBg from "../../../assets/images/drawing-bg.svg";

export function Group() {
    return (
        <StyledMGroup id={'About'}>
            <Container>
                <FlexWrapper direction={'column'}>
                    <SectionTitle>From beginning ideas to individual integrity, rich identity from the line <span>on the paper to final
                        projects</span></SectionTitle>
                    <SectionContent>
                        <FlexWrapper justify={'space-between'}>
                            <GroupImg src={imgGroup} alt=""/>
                            <GroupWrapper>
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
                            </GroupWrapper>
                        </FlexWrapper>
                    </SectionContent>
                </FlexWrapper>
            </Container>
        </StyledMGroup>
    );
}

const StyledMGroup = styled.section`
  position: relative;

  &::before {
    position: absolute;
    display: inline-block;
    height: 834px;
    width: 834px;
    content: '';
    background-image: url(${groupBg});
    background-repeat: no-repeat;
    top: -180px;
    right: 190px;
    overflow: hidden;
  }

`
const GroupImg = styled.img`
  max-width: 453px;
  max-height: 643px;
`
const SectionContent = styled.div`

`
const GroupWrapper = styled.div`
  max-width: 645px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

`

