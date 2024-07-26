import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../../components/SectionTitle';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Skill } from './Skill';
import { Container } from '../../../../components/Container';

export const Skills = () => {
  return (
      <StyledSkills>
        <Container>
          <SectionTitle>My Tech Stack</SectionTitle>
          <SectionSubtitle> Technologies I’ve been working with recently</SectionSubtitle>
          <FlexWrapper wrap={'wrap'} justify='space-between'>
            <Skill
              description={'Lorem ipsum dolor sit amet.'}
              title={'HTML5'}
              iconId={'htmlStack'} />
            <Skill
              description={'Lorem ipsum dolor sit amet.'}
              title={'CSS3'}
              iconId={'cssStack'} />
            <Skill
              description={'Lorem ipsum dolor sit amet.'}
              title={'JS'}
              iconId={'jsStack'} />
            <Skill
              description={'Lorem ipsum dolor sit amet.'}
              title={'React'}
              iconId={'reactStack'} />
            <Skill
              description={'Lorem ipsum dolor sit amet.'}
              title={'Vector'}
              iconId={'vectorStack'} />
            <Skill
              description={'Lorem ipsum dolor sit amet.'}
              title={'Boot Strap'}
              iconId={'bootStrapStack'} />
            <Skill
              description={'Lorem ipsum dolor sit amet.'}
              title={'SASS'}
              iconId={'sassStack'} />
            <Skill
              description={'Lorem ipsum dolor sit amet.'}
              title={'Git Branch'} iconId={'gitStack'} />
            <Skill
              description={'Lorem ipsum dolor sit amet.'}
              title={'Tailwind'}
              iconId={'tailwindStack'} />
            <Skill
              description={'Lorem ipsum dolor sit amet.'}
              title={'Greensock'}
              iconId={'greensockStack'} />
            <Skill
              description={'Lorem ipsum dolor sit amet.'}
              title={'VScode'}
              iconId={'vscodeStack'} />
            <Skill
              description={'Lorem ipsum dolor sit amet.'}
              title={'Git fill'}
              iconId={'gitIconStack'} />
          </FlexWrapper>
        </Container>
      </StyledSkills>
  );
};


const StyledSkills = styled.section`
  /* min-height: 50vh; */
`
export const SectionSubtitle = styled.p`
display: block;
text-align: center;
padding-bottom: 125px;
font-size: 32px;
`