import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";

import logo from "../../assets/Logol.png"
import payment from "../../assets/payment_img.png"
import { IoIosMail } from "react-icons/io";
import Faq from "../FAQ/Faq";
import styled from "styled-components";

const Maindiv=styled.div`
padding: 1%;
width: 100%;
display: flex;
align-items: center;
& img#logo{
  width: 9%;
  height: 5vh;
  margin-right: 85%;



}
& img#payment{
  width: 25%;



}
  


`
const Icondiv=styled.div`
display: flex;


`

const Footer = () => {
  return (
    <>
    
      <div className="container">
        
         
          <Maindiv className="bg-white">
            
              <img id="logo" src={logo} alt="not found" />
           
            {/* <img id="payment"  src={payment} alt="not found"  /> */}

            <Icondiv >
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                </Icondiv>
          </Maindiv>

      
            
             
            
                


                
                
              
            
          
        
      </div>

      
      </>
    
  );
};

export default Footer;
