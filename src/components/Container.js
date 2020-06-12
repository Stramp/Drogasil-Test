import React from 'react';
import styled from 'styled-components';


const StyledContainer = styled.div`
    width: 980px;
    margin: auto;
    display: flex;
    flex-direction:column;
    
`

const Container = ({ children }) => (
    <StyledContainer>{children}</StyledContainer>
)

export default Container;