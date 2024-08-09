import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Contacts_Styles';
import Typewriter from "typewriter-effect";

export const Contact: React.FC = () => {
    return (
        <S.Contacts id={"contact"}>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    {/*<S.ContactTitle>For any questions please mail me:</S.ContactTitle>*/}
                    <S.ContactTitle>
                        <Typewriter
                            options={{
                                strings: ['For any questions please mail me:'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </S.ContactTitle>

                    <S.ContactButton as='a'>
                        <S.ContactLinkClick href="mailto:hi@pavanmg.in"></S.ContactLinkClick>
                        {/*<S.ContactLink href="mailto:hi@pavanmg.in">hi@pavanmg.in</S.ContactLink>*/}
                        <S.ContactLink >
                            {/*href="mailto:hi@pavanmg.in">*/}
                            {/*hi@pavanmg.in*/}
                            <Typewriter
                                options={{
                                    strings: ['hi@pavanmg.in'],
                                    autoStart: true,
                                    loop: true,

                                }}
                            />
                        </S.ContactLink>

                    </S.ContactButton>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};
