import React from 'react';
import styled from 'styled-components';


const StyledTitle = styled.h2`
    color: ${({ theme }) => theme.titleColor};
    font-size: 5.5rem;
    font-weight: 800;
    letter-spacing: -0.05rem;
    line-height: 5.6rem;
    margin-bottom: 35px;
    text-align: center;
    @media(max-width:945px){
        font-size: 4.5rem;
        line-height:5rem;
        padding:0 15px 0 15px;
    }
    @media(max-width:532px){
        font-size: 4.1rem;
        line-height:4.2rem;
    }
    @media(max-width:426px){
        font-size: 3.1rem;
        line-height:3.2rem;
    }
    @media(max-width:375px){
        font-size: 2.7rem;
        line-height:2.9rem;
    }
    @media(max-width:321px){
        font-size: 2.4rem;
        line-height:2.5rem;
    }
`;

const SSpan = styled.span`
    font-weight: 300;
`;

const Title = () => (
    <StyledTitle>
        <SSpan>Crie este site</SSpan> responsivo <SSpan>com</SSpan> REACT <SSpan>utilizando</SSpan> styled-components
    </StyledTitle>
)

export default Title;