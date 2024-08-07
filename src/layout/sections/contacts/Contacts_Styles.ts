import styled from "styled-components";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";

const Contacts = styled.section`
`

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

export const S = {
    Contacts,
    ContactTitle,
    ContactButton,
    ContactLink,
}