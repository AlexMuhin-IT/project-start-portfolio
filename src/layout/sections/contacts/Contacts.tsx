import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import { S } from './Contacts_Styles';

export const Contact: React.FC = () => {
    return (
        <S.Contacts id={"contact"}>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <S.ContactTitle>For any questions please mail me:</S.ContactTitle>
                    <S.ContactButton as='a'>
                        <S.ContactLink href="mailto:hi@pavanmg.in">hi@pavanmg.in</S.ContactLink>
                    </S.ContactButton>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};
