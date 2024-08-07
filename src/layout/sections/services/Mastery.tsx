import React from "react";
import { S } from "./Services_Styles";

type MasteryPropsType = {
    title?: string
    subtitle?: string
    linkUrl?: string
}

export const Mastery: React.FC<MasteryPropsType> = (props: MasteryPropsType) => {
    return (
        <S.MasteryCard>
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
            <a href={'#'}>{props.linkUrl}</a>
        </S.MasteryCard>
    )
}
