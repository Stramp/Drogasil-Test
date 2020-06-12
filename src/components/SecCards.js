import React from 'react';
import styled from 'styled-components';


const StyledSecCards = styled.section`
  width: 90%;
  max-width: 1100px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-gap: 20px;
  @media(max-width:945px){
        font-size: 4.5rem;
        line-height:4.6rem;
    }
`

const SecCards = ({ children }) => (
    <StyledSecCards>
        {children}
    </StyledSecCards>
)

export default SecCards;