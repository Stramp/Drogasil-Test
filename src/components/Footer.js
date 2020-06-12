import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import logo_small from '../assets/logo_small.png'
import logo_drogaraia from '../assets/logo_drogaraia.png'
import logo_drogasil from '../assets/logo_drogasil.png'
import logo_farmasil from '../assets/logo_farmasil.png'
import logo_univers from '../assets/logo_univers.png'
import logo_4bio from '../assets/logo_4bio.png'


const StyledFooter = styled.footer`
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
    @media(max-width:743px){
        flex-direction:column-reverse;
        text-align: center;
    }
    
`;
const SImg = styled.img`
    max-width: 100%;
    padding: 0 5px;
    margin-bottom: 10px;
`;
const SP = styled.p`
    font-size:1.2rem;
    font-weight:400;    
`;

const Logos = styled.div`
`;

const SA = styled.a`

`;

const Footer = () => (
    <StyledFooter>
        <SP>RD 2017 Todos direitos reservados</SP>
        <Logos>
            <SA href="https://www.drogaraia.com.br/" target="_blank">
                <SImg src={logo_drogaraia} />
            </SA>
            <SA href="https://www.drogasil.com.br/" target="_blank">
                <SImg src={logo_drogasil} />
            </SA>
            <SA href="http://www.farmasil.com.br/" target="_blank">
                <SImg src={logo_farmasil} />
            </SA>
            <SA href="https://univers-pbm.com.br/beneficioMedicamentos/" target="_blank">
                <SImg src={logo_univers} />
            </SA>
            <SA href="https://www.4bio.com.br/" target="_blank">
                <SImg src={logo_4bio} />
            </SA>
        </Logos>
        <Link to="/">
            <SImg src={logo_small} />
        </Link>


    </StyledFooter>
)

export default Footer;