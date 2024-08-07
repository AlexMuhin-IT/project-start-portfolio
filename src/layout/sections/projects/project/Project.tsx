import React from 'react';
import iconSrc1 from '../../../../assets/images/link-chain.svg'
import iconSrc2 from '../../../../assets/images/link-github.svg'
import { S } from '../Project_Styles';


type ProjectPropsType = {
    title?: string
    text?: string
    src?: string
    subtitle?: string

}

export const Project = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.Image src={props.src} alt="#"/>
            <S.TextWrap>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <S.SubTitle>{props.subtitle}</S.SubTitle>
                <S.LinkWrap>
                    <S.Link iconSrc={iconSrc1}>Live Preview</S.Link>
                    <S.Link iconSrc={iconSrc2}>View Code</S.Link>
                </S.LinkWrap>
            </S.TextWrap>
        </S.Project>
    );
};
