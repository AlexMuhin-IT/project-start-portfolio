import React from 'react'
import styled, {css} from 'styled-components';
import {IconNav} from '../../../../components/icon/IconNav';
import {theme} from '../../../../styles/Theme';
import {Menu} from "../menu/Menu";


export const MobileMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={false}>
                <Menu menuItems={props.menuItems}/>
            </MobileMenuPopup>

            <IconNav/>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`

  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(167, 181, 210, 0.6);
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  ul {
    display: flex;
    gap: 30px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -80px;
  right: -90px;
  width: 200px;
  height: 200px;
  z-index: 99999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background: ${theme.colors.gradient};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background: ${theme.colors.gradient};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background: ${theme.colors.gradient};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }
  }

}

@media ${theme.media.mobile} {
  top: -98px;
  right: -98px;
`


