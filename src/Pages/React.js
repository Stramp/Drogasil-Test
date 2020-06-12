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
    
 
  
 
`;


const SImg = styled.img`
    width: 25%;
    min-width: 400px;
    @media (max-width: 748px){
        width: 55%;
        min-width: unset;
    }
    
`;




const ReactC = () => {


    // essa
    return (
        <SHome>


            <Header>
                <Nav items={['HTML5', 'CSS3', 'JAVASCRIPT', 'REACT', 'REDUX']} />
            </Header>
            <Main >
                <SImg src='https://cdn.worldvectorlogo.com/logos/react.svg' />
            </Main>
            <Footer />
        </SHome >
    );
}

export default ReactC;