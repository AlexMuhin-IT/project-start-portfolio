import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { S } from '../Skills_Styles';



type SkillPropsType = {
  iconId: string
  title: string
  description: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <S.Skill>
      <Icon iconId={props.iconId} />
      <S.SkillTitle>{props.title}</S.SkillTitle>
      <S.SkillText>{props.description}</S.SkillText>
    </S.Skill>
  );
};

