import React from 'react';
import styled from 'styled-components';


const StyledModal = styled.div`
  background: #000000f2;
  position:fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;

`

const Modal = ({ children, onClick, ds, name }) => (
    <StyledModal
        onClick={onClick}
        value={ds}
        id={name}>


        {children}

    </StyledModal>
)

export default Modal;