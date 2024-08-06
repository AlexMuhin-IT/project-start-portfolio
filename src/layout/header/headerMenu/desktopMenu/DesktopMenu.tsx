import React from 'react'
import styled from 'styled-components';
import {IconNav} from '../../../../components/icon/IconNav';
import {theme} from '../../../../styles/Theme';
import {Menu} from "../menu/Menu";


export const DesktopMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledDesktopMenu>
            <Menu menuItems={props.menuItems}/>
            <IconNav/>
        </StyledDesktopMenu>
    );
};

const StyledDesktopMenu = styled.nav`
  display: flex;
  gap: 50px;

  ul {
    display: flex;
    gap: 30px;
  }

  @media ${theme.media.tablet} {
    display: none;
`