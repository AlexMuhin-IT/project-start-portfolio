import React from 'react'
import {IconNav} from '../../../../components/icon/IconNav';
import {Menu} from "../menu/Menu";
import {S} from "./../HeaderMenu_Styles"

export const DesktopMenu = (props: { menuItems: Array<string> }) => {
    return (
        <S.DesktopMenu>
            <Menu menuItems={props.menuItems}/>
            <IconNav/>
        </S.DesktopMenu>
    );
};
