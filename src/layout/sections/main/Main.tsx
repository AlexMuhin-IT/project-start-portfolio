import React from 'react';
import styled from 'styled-components';
import photo from "../../../assets/images/myPhoto.webp"
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Container} from '../../../components/Container';
import {theme} from '../../../styles/Theme';
import {font} from "../../../styles/Common";


export const Main = () => {
    return (
        <StyledMain id="Home">
            <Container>
                <FlexWrapper align={'center'} justify={'space-evenly'} wrap={'wrap-reverse'}>
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

`
const TextWrap = styled.article`
  margin-right: 100px;
  
  @media ${theme.media.tablet}{
    margin-right: 0;
  }
`
const SmallText = styled.span`
  ${font({family: "'Poppins','sans-serif'", weight: 700, Fmax: 48, Fmin: 26, })}
`
const Name = styled.h2`

  span {
    -webkit-background-clip: text;
    color: transparent;
    background-image: ${theme.colors.gradient};
  }
`
const MainTitle = styled.h1`
  ${font({weight: 700, Fmax: 58, Fmin: 20, })}
`

const Photo = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  border: 3px solid transparent;
  border-radius: 230px;
  background: ${theme.colors.gradient};
  
  
  @media ${theme.media.tablet}{
    margin-bottom: 40px;
  }
`


