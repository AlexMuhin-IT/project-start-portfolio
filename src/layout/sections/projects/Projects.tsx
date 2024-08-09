import React, {useState} from 'react';
import {SectionTitle} from '../../../components/SectionTitle';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Project} from './project/Project';
import projectImg1 from './../../../../src/assets/images/projectImg1.webp'
import projectImg2 from './../../../../src/assets/images/projectImg2.webp'
import projectImg3 from './../../../../src/assets/images/projectImg3.webp'
import projectImg4 from './../../../../src/assets/images/projectImg4.webp'
import projectImg5 from './../../../../src/assets/images/projectImg5.webp'
import projectImg6 from './../../../../src/assets/images/projectImg6.webp'
import {Container} from '../../../components/Container';
import {S} from './Project_Styles';
import {ProjectNav, ProjectStatusType} from "./ProjectNav";
import {Roll} from "react-awesome-reveal";


const tabsItems: Array<{title: string, status: ProjectStatusType}> = [
    {
        title: "All",
        status: "all",
    },
    {
        title: "Landing page",
        status: "landing",
    },
    {
        title: "React",
        status: "react",
    },
    {
        title: "Spa",
        status: "spa",
    }
]
const projectData = [
    {
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        subtitle: 'Tech stack : HTML , JavaScript, SASS, React',
        src: projectImg1,
        type: "spa"
    },
    {
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        subtitle: 'Tech stack : HTML , JavaScript, SASS, React',
        src: projectImg2,
        type: "react"
    },
    {
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        subtitle: 'Tech stack : HTML , JavaScript, SASS, React',
        src: projectImg3,
        type: "react"
    },
    {
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        subtitle: 'Tech stack : HTML , JavaScript, SASS, React',
        src: projectImg4,
        type: "react"
    },
    {
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        subtitle: 'Tech stack : HTML , JavaScript, SASS, React',
        src: projectImg5,
        type: "landing"
    },
    {
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        subtitle: 'Tech stack : HTML , JavaScript, SASS, React',
        src: projectImg6,
        type: "spa"
    },
]


export const Projects: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = projectData

    if (currentFilterStatus === "landing") {
        filteredWorks = projectData.filter(work => work.type === "landing")
    }
    if (currentFilterStatus === "react") {
        filteredWorks = projectData.filter(work => work.type === "react")
    }
    if (currentFilterStatus === "spa") {
        filteredWorks = projectData.filter(work => work.type === "spa")
    }

    function changeFilterStatus(value: ProjectStatusType) {
        setCurrentFilterStatus(value)
    }
    // debugger
    return (
        <S.Projects id={"projects"}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                    <ProjectNav tabsItems={tabsItems} changeFilterStatus={changeFilterStatus}/>
                <FlexWrapper wrap={'wrap'} justify={'space-around'}>
                    <Roll
                        cascade={true}
                        damping={0.2}
                    >
                    {filteredWorks.map((p, index) => {
                        return <Project
                            key={index}
                            title={p.title}
                            text={p.text}
                            subtitle={p.subtitle}
                            src={p.src}/>
                    })}
                        </Roll>
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};
