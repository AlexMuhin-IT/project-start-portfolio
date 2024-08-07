import React from "react";
import photo from "../../../assets/images/myPhoto.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles"


export const Main: React.FC = () => {
    return (
        <S.Main id="Home">
            <Container>
                <FlexWrapper align={'center'} justify={'space-evenly'} wrap={'wrap-reverse'}>
                    <S.TextWrap>
                        <S.SmallText>Hi 👋,</S.SmallText>
                        <S.Name>My name is <span>Alex Muhin</span></S.Name>
                        <S.MainTitle>A Web Developer</S.MainTitle>
                    </S.TextWrap>
                    <S.ImgWrap>
                        <S.Photo src={photo} alt="my photo"/>
                    </S.ImgWrap>

                </FlexWrapper>
            </Container>
        </S.Main>
    );
};


