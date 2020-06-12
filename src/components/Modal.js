import React from 'react';
import styled from 'styled-components';


const StyledModal = styled.div`
  background: ${({ theme }) => theme.bgModalColor};
  position:fixed;
  top: 0px;
  bottom: 0px;
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  z-index: 999;
`
const SBox = styled.div`
    background: ${({ theme }) => theme.cardsBgTxtColor};
    border: 2px solid ${({ theme }) => theme.borderColor};
    border-radius:5px;
    width: 75vw;
    min-width: 400px;
    max-width: 900px;
    height: 60vh;
    display:flex;
    @media(max-width: 438px){
        min-width: 80%;
    }

`;
const SBoxImg = styled.div`
    width:50%;
    background:${props => props.cor};
    height:100%;
    align-items : center;   
    display:flex;
    flex-direction:column;
    justify-content: center;
`;
const SBoxTxt = styled.div`
    width:50%; 
    padding: 30px;
    



    color: ${({ theme }) => theme.txtColor};
    text-shadow:0 0 0;
    align-items : center; 
    display:flex;
    flex-direction:column;
    font-size: 1.5rem;
    justify-content: center ;
    overflow-x:hidden;
    overflow:${({ value }) => !value ? 'scroll' : 'unset'};
`;
const SImg = styled.img`
    width:100%;
    padding:15px;
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
    margin-top:30px;
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
color:${({ theme }) => theme.btnCardsTxtColor};
text-shadow:0 0 0;
font-size: 3rem;
font-weight: 300;
text-align:center;
@media(max-width: 492px){
    font-size: 1.5rem;
    }
`;

const Modal = ({ onClick, name, img, description, title, cor, value }) => (
    <StyledModal
        onClick={onClick}

        id={name}>

        <SBox>
            <SBoxImg cor={cor}>
                <SImg src={img} />
                <SH3>{title}</SH3>
            </SBoxImg>
            <SBoxTxt>
                {description}
                <SBtn
                    onClick={onClick}
                    cor={cor}
                    id={name}
                    value={value}
                >voltar</SBtn>
            </SBoxTxt>
        </SBox>


    </StyledModal>
)

export default Modal;