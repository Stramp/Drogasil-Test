import React from 'react';
import styled from 'styled-components';


const StyledContainer = styled.main`
width:100vw;
height:100vh;
display: flex;
justify-content:center;
align-items:center;
flex-direction:column;
background:${({ theme }) => theme.bgContColor};
`

const Container = ({ children }) => (
    <StyledContainer>{children}</StyledContainer>
)

export default Container;