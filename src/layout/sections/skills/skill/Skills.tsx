import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../../components/SectionTitle';
import {FlexWrapper} from '../../../../components/FlexWrapper';
import {Skill} from './Skill';
import {Container} from '../../../../components/Container';
import {theme} from "../../../../styles/Theme";
import {font} from "../../../../styles/Common";
import {GridWrapper} from "../../../../components/GridWrapper";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <GridWrapper>


                    <SectionTitle>My Tech Stack</SectionTitle>
                    <SectionSubtitle> Technologies I’ve been working with recently</SectionSubtitle>
                    {/*<FlexWrapper wrap={'wrap'} justify='space-evenly'>*/}
                    <Skill
                        description={'Lorem ipsum dolor sit amet.'}
                        title={'HTML5'}
                        iconId={'htmlStack'}/>
                    <Skill
                        description={'Lorem ipsum dolor sit amet.'}
                        title={'CSS3'}
                        iconId={'cssStack'}/>
                    <Skill
                        description={'Lorem ipsum dolor sit amet.'}
                        title={'JS'}
                        iconId={'jsStack'}/>
                    <Skill
                        description={'Lorem ipsum dolor sit amet.'}
                        title={'React'}
                        iconId={'reactStack'}/>
                    <Skill
                        description={'Lorem ipsum dolor sit amet.'}
                        title={'Vector'}
                        iconId={'vectorStack'}/>
                    <Skill
                        description={'Lorem ipsum dolor sit amet.'}
                        title={'Boot Strap'}
                        iconId={'bootStrapStack'}/>
                    <Skill
                        description={'Lorem ipsum dolor sit amet.'}
                        title={'SASS'}
                        iconId={'sassStack'}/>
                    <Skill
                        description={'Lorem ipsum dolor sit amet.'}
                        title={'Git Branch'} iconId={'gitStack'}/>
                    <Skill
                        description={'Lorem ipsum dolor sit amet.'}
                        title={'Tailwind'}
                        iconId={'tailwindStack'}/>
                    <Skill
                        description={'Lorem ipsum dolor sit amet.'}
                        title={'Greensock'}
                        iconId={'greensockStack'}/>
                    <Skill
                        description={'Lorem ipsum dolor sit amet.'}
                        title={'VScode'}
                        iconId={'vscodeStack'}/>
                    <Skill
                        description={'Lorem ipsum dolor sit amet.'}
                        title={'Git fill'}
                        iconId={'gitIconStack'}/>
                    {/*</FlexWrapper>*/}
                </GridWrapper>
            </Container>
        </StyledSkills>
    );
};


const StyledSkills = styled.section`
  /* min-height: 50vh; */


  @media ${theme.media.tablet} {

    Skill {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

  }
`

export const SectionSubtitle = styled.p`
  //display: block;
  text-align: center;
  padding-bottom: 125px;
  ${font({weight: 700, Fmax: 32, Fmin: 26})}
  padding-bottom: 50px;
  grid-column-start: 1;
  grid-column-end: 7;

  @media ${theme.media.tabletMax} {
    grid-column-start: 1;
    grid-column-end: 6;
    padding-bottom: 20px;
  };
  
  @media ${theme.media.tablet} {
    grid-column-start: 1;
    grid-column-end: 5;
    padding-bottom: 20px;
  };
  
  @media ${theme.media.mobile} {
    grid-column-start: 1;
    grid-column-end: 3;
  };
`



/*
сделать гридами скилс и проджект


*/