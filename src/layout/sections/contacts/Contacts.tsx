import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import {Container} from "../../../components/Container";

export const Contact = () => {
    return (
        <StyledContacts>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <ContactTitle>For any questions please mail me:</ContactTitle>
                    <ContactButton as='a'>
                        <ContactLink href="mailto:hi@pavanmg.in">hi@pavanmg.in</ContactLink>
                    </ContactButton>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
`

// const StyledForm = styled.form`
//   max-width: 500px;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   margin: 0 auto;
//   padding-bottom: 200px;
// `
const ContactTitle = styled.h2`
  color: #1E0E62;
  ${font({family: 'DM sans', weight: 700, Fmax: 58, Fmin: 38})} @media ${theme.media.mobile} {
    text-align: center;
  }
`

const ContactButton = styled.button`
  margin-top: 10px;
  max-width: 715px;
  height: 76px;
  text-align: center;
`
const ContactLink = styled.a`
  margin-top: 10px;
  box-sizing: content-box;
  color: transparent;
  background-image: ${theme.colors.gradient};
  -webkit-background-clip: text;
  ${font({family: 'DM sans', weight: 700, Fmax: 58, Fmin: 38, color: `${theme.colors.gradient}`})}
`