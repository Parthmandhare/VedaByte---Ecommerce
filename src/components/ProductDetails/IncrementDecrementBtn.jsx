import React, { useState } from "react";
import styled from "styled-components";

const Maindiv = styled.div`
  .btn-group {
    width: 12%;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #9acafb;
    transition: border 0.3s ease;
  }

  .btn-group:hover {
    border: 1px solid #4097fe;
  }

  button {
    /* margin: 1%; */
    font-weight: 900;
    width: 50px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4097fe;
    background-color: #fff;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover {
    background-color: #cde4fb;
   
  }

  p {
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #f5f8fb;
    border-right: 1px solid #f5f8fb;
  }
`;

const IncrementDecrementBtn = ({ minValue = 0, maxValue = 100 }) => {
  const [count, setCount] = useState(minValue);

  const handleIncrementCounter = () => {
    if (count < maxValue) {
      setCount((prevState) => prevState + 1);
    }
  };

  const handleDecrementCounter = () => {
    if (count > minValue) {
      setCount((prevState) => prevState - 1);
    }
  };

  return (
    <Maindiv>
      <div className="btn-group">
        <button className="increment-btn" onClick={handleDecrementCounter}>
          <span className="material-symbols-outlined">-</span>
        </button>
        <p>{count}</p>
        <button className="decrement-btn" onClick={handleIncrementCounter}>
          <span className="material-symbols-outlined">+</span>
        </button>
      </div>
    </Maindiv>
  );
};

export default IncrementDecrementBtn;
