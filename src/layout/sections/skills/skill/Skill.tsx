import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';
import {theme} from "../../../../styles/Theme";


type SkillPropsType = {
  iconId: string
  title: string
  description: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} />
      <SkillTitle>{props.title}</SkillTitle>
      <SkillText>{props.description}</SkillText>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  
  @media ${theme.media.tablet}{
    margin-bottom: 30px;
  }

  //border: 1px solid #caa916; //бордер для редактирования
`
const SkillTitle = styled.h3`
margin-bottom: 15px;
`
const SkillText = styled.p`

`