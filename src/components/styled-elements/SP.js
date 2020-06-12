
import React from 'react';
import styled from 'styled-components'

const StyledP = styled.p`
    overflow:${({ value }) => value ? 'auto' : 'unset'};
    padding-bottom:${({ value }) => value ? '25px' : '0'};
    padding-right:${({ value }) => value ? '5px' : '0'};
`;


const SP = ({ children, value }) => (

    <StyledP value={value}>
        {children}
    </StyledP>

)

export default SP;