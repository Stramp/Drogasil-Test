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
        btnName: 'scrolldown'
    },
    {
        img: imgCard2,
        color: '#FCDA92',
        title: 'Site Responsivo TABLET',
        subTitle: <p>Quando pressionado o "<strong>botão Leia</strong>" mais... informação deverá aparecer completa em um popup na tela.</p>,
        btn: 'Leia Mais...',
        btnName: 'modal'
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
    const [expand, setExpand] = useState(true);

    function handCardsFn(e) {
        console.log(e.target.id, '00022222000')
        if (e.target.id === 'modal') return setPopModal(!popModal);
        else if (e.target.id === 'tema') return handleThemeChange();
        else if (e.target.id === 'scrolldown') {
            console.log(e.target.value, '11111111')
            // if (e.target.value) e.target.value ? e.target.value = "none" : e.target.value = "block";
            //e.target.value === "none" ? e.target.value = "none" : e.target.value = "block";
            if (e.target.value === "red") {
                e.target.value = "black";
                setExpand("")
            } else {
                e.target.value = "red";
                setExpand("red")
            }
            console.log(e.target.value, '22222222')
        }
    }
    return (
        <SHome>
            {popModal ? <Modal
                name="modal"
                onClick={handCardsFn}
                ds={expand} /> : <></>}
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
                                ds={item.btnName === 'scrolldown' ? expand : undefined}>

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