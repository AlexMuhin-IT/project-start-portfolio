import React from "react";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import imgGroup from "../../../assets/images/groupImg.webp";
import {SectionTitle} from "../../../components/SectionTitle";
import {Mastery} from "./Mastery";
import {S} from "./Services_Styles"


const servicesData = [
    {
        title: 'Web design',
        subtitle: 'Provide our customers with optimized user-friendly experience to increase the efficiency of digital products.',
        linkUrl: 'See Works',
    },
    {
        title: 'Branding',
        subtitle: 'Understanding the business and their target customers, I’m the bridges to bring the brand closer to their clients.',
        linkUrl: 'See Works',
    },
    {
        title: 'Photography',
        subtitle: 'While stock photography is a great option for sourcing high-quality photos, it’s important that you choose your photos thoughtfully.',
        linkUrl: 'See Works',
    },
    {
        title: 'Mobile design',
        subtitle: 'Mobile application development is a highlight that businesses are interested in at the moment and in the future.',
        linkUrl: 'See Works',
    },
    {
        title: '3D Modeling',
        subtitle: 'Help you translate your existing design or concept into CAD or to work with you to develop the ideal design. 3D Models great for modern digital art',
        linkUrl: 'See Works',
    },
    {
        title: 'Video creating',
        subtitle: 'Create high-impact social videos with our easy video maker. Use custom video templates to find the right story for your business.',
        linkUrl: 'See Works',
    },

]

export const Services: React.FC  = () => {
    return (
        <S.Service id={'services'}>
            <Container>
                <S.ServiceBg>
                    <SectionTitle>Services</SectionTitle>
                    <S.ServiceSubTitle>From beginning ideas to individual
                        integrity,<span> line on the paper to final projects</span>
                    </S.ServiceSubTitle>
                    <FlexWrapper justify={'space-between'}>
                        <S.ServiceImg src={imgGroup} alt=""/>
                        <FlexWrapper justify={'space-evenly'} align={'end'} wrap={'wrap'}>
                            {servicesData.map((m, index)=>{
                                return <Mastery title={m.title}
                                                key={index}
                                                subtitle={m.subtitle}
                                                linkUrl={m.linkUrl}/>
                            })}
                        </FlexWrapper>
                    </FlexWrapper>
                </S.ServiceBg>
            </Container>
        </S.Service>
    );
}




