import React from "react";
import photo from "../../../assets/images/myPhoto.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles"
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
    return (
        <S.Main id={'main'}>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap-reverse'}>
                    <S.TextWrap>
                        <S.SmallText>Hi 👋,</S.SmallText>
                        <S.Name>My name is <span>Alex Muhin</span></S.Name>
                        <S.MainTitle>
                            <p>A Web Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </S.MainTitle>
                    </S.TextWrap>
                    <S.ImgWrap>
                        <S.Photo src={photo} alt="my photo"/>
                    </S.ImgWrap>

                </FlexWrapper>
            </Container>
        </S.Main>
    );
};


