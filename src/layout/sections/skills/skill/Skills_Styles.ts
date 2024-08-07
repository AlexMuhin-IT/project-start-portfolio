import styled from "styled-components";
import {font} from "../../../../styles/Common";
import {theme} from "../../../../styles/Theme";


const Skills = styled.section`
`

export const SectionSubtitle = styled.p`
  //display: block;
  text-align: center;
  padding-bottom: 125px;
  ${font({weight: 700, Fmax: 32, Fmin: 26})}
  padding-bottom: 50px;

  @media ${theme.media.tabletMax} {
    padding-bottom: 20px;
  };

  @media ${theme.media.tablet} {
    padding-bottom: 20px;
  };
`
// skill
const Skill = styled.div`
  max-width: 190px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  
  @media ${theme.media.tablet}{
    margin-bottom: 30px;
    max-width: 100%;
  }
`
const SkillTitle = styled.h3`
margin-bottom: 15px;
`
const SkillText = styled.p`
`

export const S = {
    Skills,
    SectionSubtitle,
    Skill,
    SkillTitle,
    SkillText,

}