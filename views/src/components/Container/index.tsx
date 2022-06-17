import React from 'react';
import * as S from "./styled"

const Container = ({children}:{children: React.ReactNode}) => (
    <S.Container color="yellow">
        {children}
    </S.Container>
)

export default Container;