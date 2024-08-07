import React from "react";
import {S} from "./../HeaderMenu_Styles"

const items = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact']

export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item: string, index: number) => {
                return (
                    <S.MenuItem key={index}>
                        <S.Link href=''>{item}</S.Link>
                    </S.MenuItem>
                )
            })}
        </ul>
    )
}
