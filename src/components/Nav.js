import React, { useState } from 'react';
import styled from 'styled-components';


const SNav = styled.nav`
    @media(max-width:945px){
        display:${props => props.booToggle};
    }
`;
const SUl = styled.ul`
    display:flex;
    letter-spacing: -0.2rem;
    font-size: 2.6rem;
    color: ${({ theme }) => theme.navColor};
    text-transform: uppercase;
    transition: all 250ms linear 0s;
    @media(max-width:945px){
       flex-direction:column;
       text-align:right; 
       position:fixed;
       right:0;
       top:110px;
       color: ${({ theme }) => theme.navColorMob};
       background:${({ theme }) => theme.navColor};
       width:30vw; 
       min-width: 220px;
       height:30vh;
       min-height: 200px;
       padding-right:25px;
       justify-content:space-evenly;
    }
    @media(max-width:532px){
        width:45vw;
        height:40vh; 
    }
`;
const SLi = styled.li`
    list-style: none;
`;
const SA = styled.a`
    padding: 10px;
    &:hover {
        color:${({ theme }) => theme.navHoverColor};
        cursor: pointer;
    }
`;

const SMenuSection = styled.div`
   
`;

const SMenuToggle = styled.div`
display: none;
&:hover{
    cursor: pointer;
}
@media(max-width: 945px) {
    display: block;
    width: 40px;
    height: 40px;
}
`;

const SDash1 = styled.div`
background:${({ theme }) => theme.navColor};
height: 5px;
width: 100%;
margin: 6px auto;
${props => {
        if (props.xToggle) return { "transform": "rotate(-45deg) translate(-12px,6px)" };
        return { "transform": "rotate(0)" };

    }};
`;

const SDash2 = styled.div`
    background:${({ theme }) => theme.navColor};
    height: 5px;
    width: 100%;
    margin: 6px auto;
    display:${props => props.xToggle};
 
`;
const SDash3 = styled.div`
background:${({ theme }) => theme.navColor};
height: 5px;
width: 100%;
margin: 6px auto;
${props => {
        if (props.xToggle) return { "transform": "rotate(45deg) translate(1px,5px)" };
        return { "transform": "rotate(0)" };

    }};
`;



const Nav = ({ items }) => {
    const [booToggle, setBooToggle] = useState("");
    function handToggle() {

        return setBooToggle(!booToggle);
    }
    return (
        <SMenuSection>
            <SMenuToggle onClick={handToggle}>
                <SDash1 xToggle={booToggle ? true : false} />
                <SDash2 xToggle={booToggle ? "none" : "block"} />
                <SDash3 xToggle={booToggle ? true : false} />
            </SMenuToggle>
            <SNav booToggle={booToggle ? "block" : "none"}>

                <SUl>
                    {items.map((item, i) => {
                        return <SLi key={i}><SA>{item}</SA></SLi>
                    })}
                </SUl>

            </SNav>
        </SMenuSection >
    )
}
export default Nav;