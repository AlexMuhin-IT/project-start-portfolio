import React from 'react';
import {Logo} from '../../components/logo/Logo';
import {Icon} from '../../components/icon/Icon';
import {FooterMenu} from "./FooterMenu";
import {Container} from "../../components/Container";
import { S } from './Footer_Styles';

const items = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact']

const socialItemData = [
    {
        iconId: 'gitNav',
    },
    {
        iconId: 'twitterNav',},
    {
        iconId: 'linkedinNav',},
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <S.FooterTop>
                    <Logo/>
                    <a href='tel:1234567890'>+91 12345 09876</a>
                    <a href='mailto:info@example.com'>info@example.com</a>
                    <S.SocialList>
                        {socialItemData.map((s, index)=>{
                            return (
                                <S.SocialItem key={index}>
                                    <S.SocialLink>
                                        <Icon width={'30px'} height={'30px'} viewBox={'0 0 30px 30px'} iconId={s.iconId}/>
                                    </S.SocialLink>
                                </S.SocialItem>
                            )
                        })}
                    </S.SocialList>
                </S.FooterTop>
                <S.FooterBottom>
                    <FooterMenu menuItems={items}/>
                    <p>Designed by <span>Muhin A</span> with <span>Love</span> in <span>Coffee</span></p>
                    {/*Designed  by Muhin A with Love in Coffee*/}
                </S.FooterBottom>
            </Container>
        </S.Footer>
    );
};







