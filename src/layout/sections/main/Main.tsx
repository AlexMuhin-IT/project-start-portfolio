import React from 'react';
import styled from 'styled-components';
import photo from "../../../assets/images/myPhoto.webp"
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Container} from '../../../components/Container';
import {theme} from '../../../styles/Theme';


export const Main = () => {
    return (
        <StyledMain id="Home">
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <TextWrap>
                        <SmallText>Hi 👋,</SmallText>
                        <Name>My name is <span>Alex Muhin</span></Name>
                        <MainTitle>A Web Developer</MainTitle>
                    </TextWrap>
                    <Photo src={photo} alt=""/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  display: flex;
  padding-top: 260px;
`
const TextWrap = styled.article`
  font-weight: 700;
  margin-right: 100px;
`
const SmallText = styled.span`
  font-size: calc( (100vw - 480px)/(1200 - 480) * (58 - 16) + 16px);
`
const Name = styled.h2`

  span {
    
    background-clip: text;
    color: transparent;
    background-image: ${theme.colors.gradient};
  }
`
const MainTitle = styled.h1`

`
const Photo = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  border: 3px solid transparent;
  border-radius: 230px;
  background: ${theme.colors.gradient};
  
`

