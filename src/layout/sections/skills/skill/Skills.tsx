import React from 'react';
import {SectionTitle} from '../../../../components/SectionTitle';
import {Skill} from './Skill';
import {Container} from '../../../../components/Container';
import {GridWrapper} from "../../../../components/GridWrapper";
import {S} from "./Skills_Styles"

const skillData = [
    {
        title: 'HTML5',
        description: 'Lorem ipsum dolor sit amet.',
        iconId: 'htmlStack',
    },
    {
        title: 'CSS3',
        description: 'Lorem ipsum dolor sit amet.',
        iconId: 'cssStack',
    },
    {
        title: 'JS',
        description: 'Lorem ipsum dolor sit amet.',
        iconId: 'jsStack',
    },
    {
        title: 'React',
        description: 'Lorem ipsum dolor sit amet.',
        iconId: 'reactStack',
    },
    {
        title: 'Vector',
        description: 'Lorem ipsum dolor sit amet.',
        iconId: 'vectorStack',
    },
    {
        title: 'Boot Strap',
        description: 'Lorem ipsum dolor sit amet.',
        iconId: 'bootStrapStack',
    },
    {
        title: 'SASS',
        description: 'Lorem ipsum dolor sit amet.',
        iconId: 'sassStack',
    },
    {
        title: 'Git Branch',
        description: 'Lorem ipsum dolor sit amet.',
        iconId: 'gitStack',
    },
    {
        title: 'Tailwind',
        description: 'Lorem ipsum dolor sit amet.',
        iconId: 'tailwindStack',
    },
    {
        title: 'Greensock',
        description: 'Lorem ipsum dolor sit amet.',
        iconId: 'greensockStack',
    },
    {
        title: 'VScode',
        description: 'Lorem ipsum dolor sit amet.',
        iconId: 'vscodeStack',
    },
    {
        title: 'Git fill',
        description: 'Lorem ipsum dolor sit amet.',
        iconId: 'gitIconStack',
    },
]

export const Skills: React.FC = () => {
    return (
        <S.Skills id={'skills'}>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <S.SectionSubtitle> Technologies I’ve been working with recently</S.SectionSubtitle>
                <GridWrapper>
                    {skillData.map((s, index)=>{
                        return <Skill
                            key={index}
                            description={s.description}
                            title={s.title}
                            iconId={s.iconId}/>
                    })}
                </GridWrapper>
            </Container>
        </S.Skills>
    );
};

