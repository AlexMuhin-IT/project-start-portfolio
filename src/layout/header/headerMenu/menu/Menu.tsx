import React from "react";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";


export const Menu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <ul>
            {props.menuItems.map((item: string, index: number) => {
                return (
                    <ListItem key={index}>
                        <Link href='src/layout/header/headerMenu/mobileMenu/MobileMenu#'>{item}</Link>
                    </ListItem>
                )
            })}
        </ul>
    )
}
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