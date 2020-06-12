import React from 'react';
import styled from 'styled-components';


const StyledSecTitle = styled.section`
    
    width: 100%;
    max-width:1200px;
    margin: 1% 0 2% 0;
`

const SecTitle = ({ children }) => (
    <StyledSecTitle>{children}</StyledSecTitle>
)

export default SecTitle;