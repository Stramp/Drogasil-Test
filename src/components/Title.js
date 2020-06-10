import React from 'react';
import styled from 'styled-components';


const StyledTitle = styled.h1`
font-family:sans-serif;
color:${({ theme }) => theme.txtColor};
`

const Title = ({ children }) => (
    <StyledTitle>{children}</StyledTitle>
)

export default Title;