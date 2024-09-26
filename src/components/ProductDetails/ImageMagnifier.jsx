import React, { useState } from "react";
import styled from "styled-components";



const Maindiv=styled.div`

/* &div.img-magnifier-container{
    position: relative;
}
&img.magnifier-img{
   width: auto;
  height: 80vh;
}
&div.magnifier-image{
   width: auto;
  height: 80vh;
} */


  .img-magnifier-container {
    position: relative;
  }

  .magnifier-img {
     width: auto;
  /* height: 80vh; */
  }

  .magnifier-image {
     width: 200px;
  height: 200px;
  border: 2px solid #fff;
    
  }

  
    

`

function ImageMagnifier({ imgUrl }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseHover = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });

    setCursorPosition({ x: e.pageX - left, y: e.pageY - top });
  };

  return (
    <Maindiv>
    <div
      className="img-magnifier-container"
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseHover}
    >
      <img className="magnifier-img" src={imgUrl} alt="" />

      {showMagnifier && (
        <div
          style={{
            position: "absolute",
            left: `${cursorPosition.x - 100}px`,
            top: `${cursorPosition.y - 100}px`,
            pointerEvents: "none",
          }}
        >
          <div
            className="magnifier-image"
            style={{
              backgroundImage: `url(${imgUrl})`,
              backgroundPosition: `${position.x}% ${position.y}%`,
            }}
          />
        </div>
      )}
    </div>
    </Maindiv>
  );
}

export default ImageMagnifier;
