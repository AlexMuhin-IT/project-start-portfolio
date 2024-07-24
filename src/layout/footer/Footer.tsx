/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import {Logo} from '../../components/logo/Logo';
import {Icon} from '../../components/icon/Icon';
import {theme} from '../../styles/Theme';
import {FooterMenu} from "./FooterMenu";
import {Container} from "../../components/Container";

const items = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact']

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterTop>
                    <Logo/>
                    <a href='tel:1234567890'>+91 12345 09876</a>
                    <a href='mailto:info@example.com'>info@example.com</a>
                    <SocialList>
                        <SocialItem>
                            <SocialLink>
                                <Icon width={'30px'} height={'30px'} viewBox={'0 0 30px 30px'} iconId={'gitNav'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon width={'30px'} height={'30px'} viewBox={'0 0 30px 30px'} iconId={'twitterNav'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon width={'30px'} height={'30px'} viewBox={'0 0 30px 30px'} iconId={'linkedinNav'}/>
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                </FooterTop>
                <FooterBottom>
                    <FooterMenu menuItems={items}/>
                    <p>Designed and built by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span></p>
                </FooterBottom>
            </Container>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 176px;

  &::after {
    content: '';
    top: 100px;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #666666;
  }
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
  
  a {
    flex-grow: 3;
    
    & + a {
      flex-grow: 1;
    }
  }
`
const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    background-clip: text;
    color: transparent;
    background-image: ${theme.colors.gradient};
  }
`






