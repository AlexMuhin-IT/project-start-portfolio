import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {Button} from '../../../components/Button';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContacts>
            <FlexWrapper direction={'column'} align={'center'}>
                <ContactTitle>For any questions please mail me:</ContactTitle>
                <ContactButton as='a'>
                    <ContactLink href="mailto:hi@pavanmg.in">hi@pavanmg.in</ContactLink>
                </ContactButton>

            </FlexWrapper>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
`

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  padding-bottom: 200px;
`
const ContactTitle = styled.h2`
  font-family: "DM Sans", sans-serif;
  font-weight: 700;
  font-size: 58px;
  color: #1E0E62;
`

const ContactButton = styled.button`
  margin-top: 10px;
  width: 715px;
  height: 76px;
  text-align: center;
`
const ContactLink = styled.a`
  margin-top: 10px;
  font-family: "DM Sans", sans-serif;
  font-weight: 700;
  font-size: 58px;

  box-sizing: content-box;
  color: transparent;
  background-image: ${theme.colors.gradient};
  -webkit-background-clip: text;
  
`