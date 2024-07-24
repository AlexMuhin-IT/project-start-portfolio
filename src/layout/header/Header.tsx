import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";


const items = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact']

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Logo />
          <Menu menuItems={items} />
        </FlexWrapper>
      </Container >
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 40px 0 220px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;

`