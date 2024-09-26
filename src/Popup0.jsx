import React from "react";
import styled from "styled-components";

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 9999;
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

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
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
            <h2>This is a Popup</h2>
            <p>You can put any content here.</p>
          </PopupContainer>
        </>
      )}
    </>
  );
};

export default Popup;
