import React from 'react'
import {IconNav} from '../../../../components/icon/IconNav';
import {Menu} from "../menu/Menu";
import {S} from "./../HeaderMenu_Styles"


export const MobileMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={false}>
                <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopup>

            <IconNav/>
        </S.MobileMenu>
    );
};




