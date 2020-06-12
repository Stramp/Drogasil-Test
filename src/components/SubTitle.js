import React from 'react';
import styled from 'styled-components';


const StyledSubTitle = styled.h3`
    font-size: 3.2rem;
    font-weight: 300;
    letter-spacing: -0.2rem;
    line-height: 3.3rem;
    text-align: center;
    @media(max-width:945px){
        font-size: 2.7rem;
        line-height:2.8rem;
        padding:0 15px 0 15px;
    }
    @media(max-width:532px){
        font-size: 2.3rem;
        line-height:2.4rem;
    }
    @media(max-width:426px){
        font-size: 1.9rem;
        line-height:2rem;
        letter-spacing: -0.1rem;
    }
    @media(max-width:375px){
        font-size: 1.5rem;
        line-height:1.7rem;
        letter-spacing: -0.1rem;
    }
    @media(max-width:321px){
        font-size: 1.4rem;
        line-height:1.6rem;
        letter-spacing: -0.1rem;
    }
`


const Ball = styled.span`
    width: 24px;
    border-radius: 100%;
    height: 24px;
    display: inline-block;
    background: ${props => {
        if (props.verde) return '#007f56';
        if (props.cinza) return '#868686';
        if (props.laranja) return '#FE9481';
        if (props.amarelo) return '#FCDA92';
        if (props.roxo) return '#9C8CB9';
        return 'black'
    }};
    @media(max-width:900px){
        height: 20px;
        width: 20px;
    }
    @media(max-width:426px){
        height: 15px;
        width: 15px;
    }
    @media(max-width:376px){
        height: 12px;
        width: 12px;
    }
    @media(max-width:321px){
        width: 10px;
        height: 10px;
    }
`

const SubTitle = () => (
    <StyledSubTitle>
        A fonte utilizada é a Open Sans de 300 a 800.<br />
        exemplo: "Open Sans", Helvetica, sans-serif, arial;<br />
        Já as cores são:<br />
        <Ball verde />#007f56, <Ball cinza />#868686, <Ball laranja />#FE9481, <Ball amarelo />#FCDA92 e <Ball roxo />#9C8CB9
    </StyledSubTitle>
)

export default SubTitle;