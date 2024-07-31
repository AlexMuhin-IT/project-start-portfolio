import React from 'react';
import styled from 'styled-components';
import {theme} from '../../../../styles/Theme';
import {IconNav} from '../../../../components/icon/IconNav';
import {Icon} from '../../../../components/icon/Icon';
import iconSrc1 from '../../../../assets/images/link-chain.svg'
import iconSrc2 from '../../../../assets/images/link-github.svg'
import {font} from "../../../../styles/Common";


type ProjectPropsType = {
    title?: string
    text?: string
    src?: string
    subtitle?: string

}


export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt="#"/>
            <TextWrap>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <SubTitle>{props.subtitle}</SubTitle>
                <LinkWrap>
                    <Link iconSrc={iconSrc1}>Live Preview</Link>
                    <Link iconSrc={iconSrc2}>View Code</Link>
                </LinkWrap>
            </TextWrap>
        </StyledProject>
    );
};

const StyledProject = styled.div`
  max-width: 375px;
  width: 100%;
  margin-bottom: 30px;
  //border: 1px solid red; // рамки удалить
  border-radius: 20px;
  box-shadow: 0 30px 20px  rgba(0, 0, 0, 0.2);

  @media ${theme.media.mobile}{
    width: 275px;
    
  }
`
const Image = styled.img`
  background-image: url(${props => props.src});
  background-size: 375px 260px;
  background-repeat: no-repeat;
  width: 375px;
  height: 260px;
  object-fit: cover;
  
  
  @media ${theme.media.mobile}{
    width: 275px;
    height: auto;
  }
`
const TextWrap = styled.div`
  margin: 25px 30px;
  display: flex;
  flex-direction: column;
`
const Title = styled.h3`
  ${font({Fmax: 28, Fmin: 20, weight: 700})}
  margin-bottom: 15px;
  color: #000;
  
  @media ${theme.media.mobile}{
  }
`
const Text = styled.p`
  ${font({Fmax: 18, Fmin: 14, weight: 300})}
  margin-bottom: 12px;
  color: ${theme.colors.secondaryBg};

  @media ${theme.media.mobile} {
  }
`
const SubTitle = styled.p`
  margin-bottom: 21px;
  ${font({Fmax: 16, Fmin: 14, weight: 400})}
  @media ${theme.media.mobile}{
    
  }
`

const LinkWrap = styled.div`
  display: flex;
  justify-content: space-between;
`

const Link = styled.a<{ iconSrc: string }>`
  padding-left: 25px;
  background-image: url(${props => props.iconSrc});
  ${font({Fmax: 16, Fmin: 10, weight: 400})}
  text-decoration: underline;
  color: #000;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  

  @media ${theme.media.mobile}{

    line-height: 2.1;
  }
  
`
