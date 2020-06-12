import React from 'react';
import styled from 'styled-components';


const StyledModal = styled.div`
  background: #000000f2;
  position:fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  display:flex;
  justify-content: center;
  align-items: center;
`
const SBox = styled.div`
    background: #fff;
    border: 1px solid;
    border-radius:5px;
    width: 75vw;
    min-width: 400px;
    max-width: 900px;
    height: 60vh;
    box-shadow:fff;

`;

const Modal = ({ onClick, name }) => (
    <StyledModal
        onClick={onClick}

        id={name}>

        <SBox>
            teste
        </SBox>


    </StyledModal>
)

export default Modal;