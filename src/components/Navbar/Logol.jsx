import React from 'react'
import styled from 'styled-components'
import logo from "../../assets/logol.png";
const LogoText =styled.h1`


  font-family: 'Akaya Telivigala', cursive;
  font-size: 2rem;
  transition: all 0.2s ease;
  color: black;
  
   &:hover{
    transform: scale(1.1);
   }  
   @media (max-width: 64em){
  font-size: 2rem;


   }


`

const Logo = () => {
  return (
    <LogoText>

        <img src={logo} alt="" />
    </LogoText>
  )
}

export default Logo