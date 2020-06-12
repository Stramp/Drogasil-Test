import React from 'react';
import styled from 'styled-components';


const StyledMain = styled.main`
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Main = ({ children }) => (
    <StyledMain>{children}</StyledMain>
)

export default Main;