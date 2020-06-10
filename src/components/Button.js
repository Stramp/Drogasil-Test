import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
    background:${({ theme }) => theme.bgColor};
    
    color:${({ theme }) => theme.txtColor};
    border: 1px solid ${({ theme }) => theme.borderColor};
    padding: 10px;
    border-radius:15px;
    margin-bottom:10px;
    
    &:hover{
        cursor: pointer;
        background:${({ theme }) => theme.bgHoverColor};
        color:${({ theme }) => theme.txtHoverColor};
    }
    &:focus{
        outline:none;
    }
`

const Button = ({ children, onClick }) => (
    <StyledButton onClick={onClick}>{children}</StyledButton>
)

export default Button;