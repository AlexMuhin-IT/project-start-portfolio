import React from "react";
import {S} from "./../HeaderMenu_Styles"

// const items = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact']
const items = [
    {
        title: 'Main',
        href: 'main',
    },
    {
        title: 'Services',
        href: 'services',
    },
    {
        title: 'Skills',
        href: 'skills',
    },
    {
        title: 'Projects',
        href: 'projects',
    },
    {
        title: 'Contact',
        href: 'contact',
    },
]

export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, index) => {
                return (
                    <S.MenuItem key={index}>
                        <S.Link href={`#${item.href}`}>{item.title}</S.Link>
                    </S.MenuItem>
                )
            })}
        </ul>
    )
}
