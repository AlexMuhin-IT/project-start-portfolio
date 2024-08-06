/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Icon } from './Icon';
import styled from 'styled-components';
import {theme} from "../../styles/Theme";

type IconNavPropsType = {
  iconId?: string
  width?: string
  height?: string
  viewBox?: string
}

export const IconNav = (props: IconNavPropsType) => {

  return (
    <SocialNav>
      <ul>
        <li>
          <a href="#">
            <Icon iconId={'gitNav'} width={props.width || "31"} height={props.height || "31"} viewBox={props.height || "0 0 121 121"} />
          </a>
        </li>
        <li>
          <a href="#">
            <Icon iconId={'twitterNav'} width={props.width || "31"} height={props.height || "31"} viewBox={props.height || "0 0 121 121"} /> {/*30 не работает 31 работает*/}
          </a>

        </li>
        <li>
          <a href="#">
            <Icon iconId={'linkedinNav'} width={props.width || "31"} height={props.height || "31"} viewBox={props.height || "0 0 121 121"} />
          </a>
        </li>
      </ul>
    </SocialNav>
  );
};

const SocialNav = styled.div`
  
  ul{
    display: flex;
    gap: 20px;
  }
  
  @media ${theme.media.tablet}{
    display: none;
  }
`