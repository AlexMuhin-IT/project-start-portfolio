/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components';
import {IconNav} from '../../../components/icon/IconNav';
import {theme} from '../../../styles/Theme';


export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <div>
            <StyledMenu>
                <ul>
                    {props.menuItems.map((item: string, index: number) => {
                        return (
                            <ListItem  key={index}>
                                <Link href='src/layout/header/mobileMenu/MobileMenu#'>{item}</Link>
                            </ListItem>
                        )
                    })}
                </ul>
                <IconNav/>
            </StyledMenu>
        </div>
    );
};

const StyledMenu = styled.nav`
  display: flex;
  gap: 50px;

  ul {
    display: flex;
    gap: 30px;
  }
  @media ${theme.media.tablet}{
    display: none;
`
const ListItem = styled.li`
  justify-content: space-between;
  list-style-type: none;
`

const Link = styled.a`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  color: ${theme.colors.secondaryBg}
  
`


