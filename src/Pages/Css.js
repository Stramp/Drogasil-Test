import React from 'react';
import styled from 'styled-components';

import Main from '../components/Main';

import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';





const SHome = styled.div`
    background            : url(${({ theme }) => theme.bgImg});
    height:100vh;
    text-shadow: 1px 1px 0px ${({ theme }) => theme.txtShadowColor};
    color: ${({ theme }) => theme.txtColor};
    font-family: "Open Sans", Helvetica, sans-serif, arial;
    font-weight:300;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 748px){
        height:auto;
    }
    @media (max-height: 863px){
        height:auto;
    }
`;


const SImg = styled.img`
    width: 17%;
`;





const Css = () => {


    // essa
    return (
        <SHome>


            <Header>
                <Nav items={['HTML5', 'CSS3', 'JAVASCRIPT', 'REACT', 'REDUX']} />
            </Header>
            <Main >
                <SImg src='https://cdn.worldvectorlogo.com/logos/css-5.svg' />
            </Main>
            <Footer>Footer</Footer>
        </SHome >
    );
}

export default Css;