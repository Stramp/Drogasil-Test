import React from 'react';
import styled from 'styled-components';


const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    background:${props => props.color};
    margin: 20px 0 0 0;
    justify-content: space-between;
    transition: all 0.3s ease 0s;
`;


const SImage = styled.figure`
    overflow: hidden;
    margin: 15px auto 0px auto;
    height:auto;
    max-height: ${({ value }) => value === 'none' ? '100px' : '150px'};
    transition: all 0.3s ease 0s;
`;
const SImg = styled.img`
    width: 100%;
    padding: 5px;
`;
const SBox = styled.div`
    width: 100%;
    background-color:${({ theme }) => theme.cardsBgTxtColor};
    padding: ${({ value }) => value === 'none' ? '6rem' : '1rem'}
    ${({ value }) => value === 'none' ? '3rem' : '1.5rem'}
     1rem 1.5rem ;
    text-align: justify;
    min-height:150px;
    font-weight:300;
    font-size:1.6rem;
    line-height:1.7rem;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    overflow: ${({ value }) => value === 'none' ? 'scroll' : 'unset'};
    overflow-x:hidden;
    height:auto;
    max-height: ${({ value }) => value === 'none' ? '185px' : '0'};
    transition: all 0.3s ease 0s;
    -ms-overflow-style: none;
    @media(max-width:945px){
        font-size: 1.3rem;
        line-height:1.4rem;
        font-weight: 400;
    }
    &:-webkit-scrollbar{
        display:none;
    }
`;
const SBtn = styled.button`
    background-color: ${({ cor }) => cor};
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: -0.05rem;
    padding: 5px 10px 5px 10px;
    text-align: center;
    text-shadow: none;
    width: 40%;
    min-width:130px;
    margin-top:5px;
    border:0;
    align-self: flex-end;
    color: ${({ theme }) => theme.btnCardsTxtColor};
    
    &:hover{
        cursor:pointer;
        text-decoration-line:underline;
    }
    @media(max-width:945px){
        align-self: center;
    }
    
`;



const SH3 = styled.h3`
    color: ${({ theme }) => theme.titleCardsColor};
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: -0.0625rem;
    text-shadow: none;
    text-align: center;
    line-height:3rem;
    margin: 15px 0 15px 0; 
    @media(max-width:1025px){
        font-size: 2.2rem;
        line-height:2.5rem;
        font-weight: 400;
    }
`;


const Card = ({ src, color, description, title, subTitle, name, onClick, btnTxt, expand }) => {
    console.log('card>>>>', expand, name, description)
    return (
        <StyledCard color={color}>
            <SImage value={expand}>
                <SImg src={src} />
            </SImage>
            <SH3> {title}</SH3>
            <SBox value={expand}>

                {expand !== 'none' ? subTitle : description}
                <SBtn
                    onClick={e => onClick(e)}
                    cor={color}
                    id={name}
                    value={expand}>{expand === 'none' ? 'Voltar' : btnTxt}</SBtn>
            </SBox>
        </StyledCard>
    )
}

export default Card;