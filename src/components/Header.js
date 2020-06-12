import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';



const StyledHeader = styled.header`
    border-top: 1px solid ${({ theme }) => theme.borderColor};
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    max-width:1200px;
    align-self: center;
    margin: 10px 0 10px 0;
    padding: 10px 0 10px 0;
`;

const SImg = styled.img`
    max-width: 100%;
`;


const Header = ({ children }) => (
    <StyledHeader>
        <Link to='/'>
            <SImg src={logo} />
        </Link>
        {children}

    </StyledHeader>
)

export default Header;