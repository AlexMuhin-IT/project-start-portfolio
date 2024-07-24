import React from 'react'
import imgSrcLogo from "../../assets/images/logo.svg";

import styled, {css} from 'styled-components';


export const Logo = () => {
    return (
        <Link href='#'/>
    );
};

const Link = styled.a`
  display: inline-block;
  background-image: url(${imgSrcLogo});
  background-size: 100px 59px;
  width: 100px;
  height: 59px;
  background-repeat: no-repeat;
`
