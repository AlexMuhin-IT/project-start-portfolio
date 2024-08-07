import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Project } from './project/Project';
import projectImg1 from './../../../../src/assets/images/projectImg1.webp'
import projectImg2 from './../../../../src/assets/images/projectImg2.webp'
import projectImg3 from './../../../../src/assets/images/projectImg3.webp'
import projectImg4 from './../../../../src/assets/images/projectImg4.webp'
import projectImg5 from './../../../../src/assets/images/projectImg5.webp'
import projectImg6 from './../../../../src/assets/images/projectImg6.webp'
import { Container } from '../../../components/Container';
import { S } from './Project_Styles';


const projectData = [
  {
    title: 'Project Tile goes here',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    subtitle: 'Tech stack : HTML , JavaScript, SASS, React',
    src: projectImg1
  },
  {
    title: 'Project Tile goes here',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    subtitle: 'Tech stack : HTML , JavaScript, SASS, React',
    src: projectImg2
  },
  {
    title: 'Project Tile goes here',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    subtitle: 'Tech stack : HTML , JavaScript, SASS, React',
    src: projectImg3
  },
  {
    title: 'Project Tile goes here',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    subtitle: 'Tech stack : HTML , JavaScript, SASS, React',
    src: projectImg4
  },
  {
    title: 'Project Tile goes here',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    subtitle: 'Tech stack : HTML , JavaScript, SASS, React',
    src: projectImg5
  },
  {
    title: 'Project Tile goes here',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    subtitle: 'Tech stack : HTML , JavaScript, SASS, React',
    src: projectImg6
  },
]

export const Projects: React.FC = () => {
  return (
    <S.Projects>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <FlexWrapper wrap={'wrap'} justify={'space-around'}>
          {projectData.map((p, index)=>{
            return <Project
                key={index}
                title={p.title}
                text={p.text}
                subtitle={p.subtitle}
                src={p.src} />
          })}

        </FlexWrapper>
      </Container>
    </S.Projects>
  );
};
