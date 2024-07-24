import React from "react";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const FooterMenu = (props: { menuItems: Array<string> }) => {
    return (
        <div>
            <StyledMenu>
                <ul>
                    {props.menuItems.map((item: string, index: number) => {
                        return (
                            <ListItem key={index}>
                                <Link href="#">{item}</Link>
                            </ListItem>
                        )
                    })}
                </ul>
            </StyledMenu>
        </div>
    );
};
const StyledMenu = styled.nav`
  display: flex;
  gap: 50px;


  ul {
    display: flex;
    gap: 50px;
  }
;
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