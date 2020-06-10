import React from 'react';
import styled from 'styled-components';


const StyledHeader = styled.h1``;

const Header = ({ children }) => (
    <StyledHeader>

        {children}
    </StyledHeader>
)

export default Header;