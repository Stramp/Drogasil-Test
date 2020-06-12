
import React from 'react';
import styled from 'styled-components'

const StyledH3 = styled.p`
    color: ${({ theme }) => theme.titleCardsColor};
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: -0.0625rem;
    text-shadow: none;
    text-align: center;
    line-height:3rem;
    margin: 15px 0 15px 0; 
    @media(max-width:1025px){
        font-size: 2.2rem;
        line-height:2.5rem;
        font-weight: 400;
    }
`;


const SH3 = ({ children }) => (

    <StyledH3>
        {children}
    </StyledH3>

)

export default SH3;