import React from "react";
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "./headerMenu/Menu";

import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {theme} from "../../styles/Theme";
import {S} from "./Header_Styles"

const items = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact']

export const Header: React.FC = () => {
    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <MobileMenu menuItems={items}/>
                    <Menu menuItems={items}/>

                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

