import styled from "styled-components";
import React from "react";
import linkArrow from "../../../assets/images/link-arrow-right.svg";

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
  width: 315px;
  margin: 45px 0;

  h3 {
    font-weight: 600;
    font-size: 18px;

    margin-bottom: 20px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    color: #6b7280;

    margin-bottom: 20px;
  }

  a {
    font-weight: 500;
    font-size: 12px;
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
}
`

