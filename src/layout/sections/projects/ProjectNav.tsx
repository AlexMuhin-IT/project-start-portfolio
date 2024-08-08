import React from 'react';
import { S } from './Project_Styles';

export type ProjectStatusType = "all" | "landing" | "react" | "spa";

type ProjectNavPropsType = {
    tabsItems: Array<{title: string, status: ProjectStatusType}>
    changeFilterStatus: (value: ProjectStatusType)=> void
}

export const ProjectNav = (props: ProjectNavPropsType) => {
    return (
        <S.ProjectMenu>
            {props.tabsItems.map((item, index) => {
                // debugger
                return (

                    <S.TabItem key={index}>
                        <S.TabLink as={"button"} onClick={()=>{props.changeFilterStatus(item.status)}}>{item.title}</S.TabLink>
                    </S.TabItem>
                )
            })}
        </S.ProjectMenu>
    );
};
