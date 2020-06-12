import React, { useState } from 'react';
import styled from 'styled-components';

import Main from '../components/Main';
import SecTitle from '../components/SecTitle';
import SecCards from '../components/SecCards';
import Title from '../components/Title';
import Card from '../components/Card';
import SubTitle from '../components/SubTitle';

import useTheme from '../context/ContextTheme'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

import imgCard1 from '../assets/desktop-responsive-design.png'
import imgCard2 from '../assets/tablets-responsive-design.png'
import imgCard3 from '../assets/mobile-responsive-design.png'





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





const InfoCards =
    [{
        img: imgCard1,
        color: '#FE9481',
        title: 'Site Responsivo DESKTOP',
        subTitle: <p>Quando pressionado o botão <b>Leia mais...</b> o restante da informação deverá aparecer em scroll down.</p>,
        btn: 'Leia Mais...',
        btnName: 'scrolldown',
        description: `LoremElit officia officia voluptate aliquip ex  
        
        cupidatat pariatur nisi non ipsum non tempor consectetur. Laboris nulla p
        
        
        ariatur officia quis ea. Nulla sint aliquip id minim mollit elit non ullamco voluptate magna 
        
        
        id. Ea amet tempor veniam aute consequat commodo. Exercitation proident aute consectetur occaecat.
        
        Exercitation anim id tempor do et pariatur do eu ut.`
    },
    {
        img: imgCard2,
        color: '#FCDA92',
        title: 'Site Responsivo TABLET',
        subTitle: <p>Quando pressionado o "<strong>botão Leia</strong>" mais... informação deverá aparecer completa em um popup na tela.</p>,
        btn: 'Leia Mais...',
        btnName: 'modal',
        description: 'Proident mollit irure duis incididunt nostrud do enim. Amet nostrud anim labore laborum ut occaecat. Enim cillum do sit aliquip esse incididunt labore anim sint reprehenderit mollit Lorem labore do.'
    },
    {
        img: imgCard3,
        color: '#9C8CB9',
        title: 'Site Responsivo MOBILE',
        subTitle: <p>Quando pressionado o botão <b>alterar tema</b> modifique o tema do site para blackfriday a seu gosto.</p>,
        btn: 'Alterar tema',
        btnName: 'tema'
    }]


const Home = () => {
    const { handleThemeChange } = useTheme();
    const [popModal, setPopModal] = useState(false);
    const [expand, setExpand] = useState('none');
    const [scrollD, setScrollD] = useState('');


    // essa
    function handCardsFn(e) {
        if (e.target.id === 'modal') return setPopModal(!popModal);
        else if (e.target.id === 'tema') return handleThemeChange();
        else if (e.target.id === 'scrolldown') {
            setScrollD('scrolldown');
            if (e.target.value === 'none') {
                setExpand('block')

            } else {
                setExpand('none');
            }
        }
    }
    return (
        <SHome>


            {popModal ?
                InfoCards.map((item, i) => (
                    item.btnName === 'modal' ?
                        <Modal name="modal"
                            onClick={handCardsFn}
                            img={item.img}
                            description={item.description} />
                        : <></>
                ))

                : <></>

            }

            <Header>
                <Nav items={['HTML5', 'CSS3', 'JAVASCRIPT', 'REACT', 'REDUX']} />
            </Header>
            <Main >
                <SecTitle>
                    <Title />
                    <SubTitle />
                </SecTitle>
                <SecCards>

                    {
                        InfoCards.map((item, i) => (

                            <Card
                                key={i}
                                src={item.img}
                                color={item.color}
                                title={item.title}
                                subTitle={item.subTitle}
                                btnTxt={item.btn}
                                name={item.btnName}
                                onClick={handCardsFn}
                                expand={item.btnName === scrollD ? expand : undefined}
                                description={item.description}>

                            </Card>
                        ))
                    }

                </SecCards>
            </Main>
            <Footer>Footer</Footer>
        </SHome >
    );
}

export default Home;