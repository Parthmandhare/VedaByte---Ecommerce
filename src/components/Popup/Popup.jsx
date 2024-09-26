import React from "react";
import styled from "styled-components";
import popup from "../../assets/popup.png"

const PopupContainer = styled.div`
  width: 50%; /* Set width to 100% */
  height: 75%; /* Set height to 100% */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background-color: white; */
  padding: 100px;
  border-radius: 8px;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); */
  z-index: 9999;
  background-image: url(${popup}); /* Use url() to specify the image path */
  background-size: cover; /* Cover the full width and height */
  background-position: center center;
  
`;


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
`;
const Content = styled.div`
align-items: center;
justify-content: center;
color: #005555;
display: flex;
margin-top: 3%;
margin-right: 2%;
margin-bottom: 6%;


  


`

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 50px;
  cursor: pointer;
`;

const Popup = ({ orderPopup, handleOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <>
          <Overlay onClick={handleOrderPopup} />
          <PopupContainer>
            <CloseButton onClick={handleOrderPopup}>&times;</CloseButton>
            <Content>
              WIN BIG
            </Content>
            <Content>
              Participate i a Lucky Draw and stand a Chance to win A brand new Asus Laptop
            </Content>
          </PopupContainer>
        </>
      )}
    </>
  );
};

export default Popup;
