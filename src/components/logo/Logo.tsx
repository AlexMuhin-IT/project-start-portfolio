import React from 'react'
import imgSrcLogo from "../../assets/images/logo.svg";
import styled, {css} from 'styled-components';
import {animateScroll as scroll} from "react-scroll";

export const Logo = () => {
    return (
        <Link onClick={()=>{scroll.scrollToTop()}}/>
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
