import styled from "styled-components";
import React from "react";
import linkArrow from "../../../assets/images/link-arrow-right.svg";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";

type MasteryPropsType = {
    title?: string
    subtitle?: string
    linkUrl?: string
}

export const Mastery = (props: MasteryPropsType) => {
    return (
        <MasteryCard>
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
            <a href={'#'}>{props.linkUrl}</a>
        </MasteryCard>
    )
}

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
    font-weight: 400;
    font-size: 12px;
    color: #6b7280;

    margin-bottom: 20px;

    @media ${theme.media.tablet} {
      overflow: scroll;
    }
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

