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
`;
const SImg = styled.img`
    width: 100%;
    padding: 5px;
`;
const SBox = styled.div`
    width: 100%;
    background-color:${({ theme }) => theme.cardsBgTxtColor};
    padding: 1rem 1.5rem 1rem 1.5rem ;
    text-align: justify;
    min-height:150px;
    font-weight:300;
    font-size:1.6rem;
    line-height:1.7rem;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    
    height:auto;
    @media(max-width:945px){
        font-size: 1.3rem;
        line-height:1.4rem;
        font-weight: 400;
    }
`;
const SBtn = styled.button`
    background-color: ${props => props.cor};
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
    display: ${({ expand }) => expand ? 'block' : 'none'};
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


const Card = ({ src, color, title, subTitle, name, onClick, btnTxt, ds }) => {
    console.log('card>>>>', ds, name)
    return (
        <StyledCard color={color}>
            <SImage>
                <SImg src={src} />
            </SImage>
            <SH3> {title}</SH3>
            <SBox>
                {subTitle}
                <SBtn
                    onClick={e => onClick(e)}
                    cor={color}
                    id={name}
                    value={ds}>{btnTxt}</SBtn>
            </SBox>
        </StyledCard>
    )
}

export default Card;