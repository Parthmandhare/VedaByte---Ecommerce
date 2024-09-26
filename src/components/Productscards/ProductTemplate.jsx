// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
// import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
// import React, { useState } from "react";
// import styled from "styled-components";
// import Mac from "./macbook.jpg";

// const Wrapper = styled.div`
//   width: 300px;
//   height: 500px;
//   background: white;
//   margin: auto;
//   position: relative;
//   overflow: hidden;
//   border-radius: 10px 10px 10px 10px;
//   box-shadow: 0;
//   transform: scale(0.95);
//   transition: box-shadow 0.5s, transform 0.5s;

//   &:hover {
//     transform: scale(1);
//     box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
//   }
// `;

// const Container = styled.div`
//   width: 100%;
//   height: 100%;

//   .top {
//     height: 80%;
//     width: 100%;
//     background: url("../../assets/product/macbook.jpg") no-repeat center center;
//     -webkit-background-size: 100%;
//     -moz-background-size: 100%;
//     -o-background-size: 100%;
//     background-size: 100%;
//   }

//   .bottom {
//     width: 200%;
//     height: 20%;
//     transition: transform 0.5s;

//     &.clicked {
//       transform: translateX(-50%);
//     }

//     h1 {
//       margin: 0;
//       padding: 0;
//     }

//     p {
//       margin: 0;
//       padding: 0;
//     }

//     .left {
//       height: 100%;
//       width: 50%;
//       background: #f4f4f4;
//       position: relative;
//       float: left;

//       .details {
//         padding: 20px;
//         float: left;
//         width: calc(70% - 40px);
//       }

//       .buy {
//         float: right;
//         width: calc(30% - 2px);
//         height: 100%;
//         background: #f1f1f1;
//         transition: background 0.5s;
//         border-left: solid thin rgba(0, 0, 0, 0.1);

//         i {
//           font-size: 30px;
//           padding: 30px;
//           color: #254053;
//           transition: transform 0.5s;
//         }

//         &:hover {
//           background: #a6cdde;
//         }

//         &:hover i {
//           transform: translateY(5px);
//           color: #00394b;
//         }
//       }
//     }

//     .right {
//       width: 50%;
//       background: #a6cdde;
//       color: white;
//       float: right;
//       height: 200%;
//       overflow: hidden;

//       .details {
//         padding: 20px;
//         float: right;
//         width: calc(70% - 40px);
//       }

//       .done {
//         width: calc(30% - 2px);
//         float: left;
//         transition: transform 0.5s;
//         border-right: solid thin rgba(255, 255, 255, 0.3);
//         height: 50%;

//         i {
//           font-size: 30px;
//           padding: 30px;
//           color: white;
//         }
//       }

//       .remove {
//         width: calc(30% - 1px);
//         clear: both;
//         border-right: solid thin rgba(255, 255, 255, 0.3);
//         height: 50%;
//         background: #bc3b59;
//         transition: transform 0.5s, background 0.5s;

//         &:hover {
//           background: #9b2847;
//         }

//         &:hover i {
//           transform: translateY(5px);
//         }

//         i {
//           transition: transform 0.5s;
//           font-size: 30px;
//           padding: 30px;
//           color: white;
//         }
//       }

//       &:hover {
//         .remove,
//         .done {
//           transform: translateY(-100%);
//         }
//       }
//     }
//   }
// `;

// const Inside = styled.div`
//   z-index: 9;
//   background: #92879b;
//   width: 140px;
//   height: 140px;
//   position: absolute;
//   top: -70px;
//   right: -70px;
//   border-radius: 0px 0px 200px 200px;
//   transition: all 0.5s, border-radius 2s, top 1s;

//   &:hover {
//     width: 100%;
//     right: 0;
//     top: 0;
//     border-radius: 0;
//     height: 80%;

//     .icon {
//       opacity: 0;
//       right: 15px;
//       top: 15px;
//     }

//     .contents {
//       opacity: 1;
//       transform: scale(1);
//       transform: translateY(0);
//     }
//   }
// `;

// const Icon = styled.div`
//   position: absolute;
//   right: 85px;
//   top: 85px;
//   color: white;
//   opacity: 1;
// `;

// const Contents = styled.div`
//   display: flex;
//   padding: 5%;
//   opacity: 0;
//   transform: translateY(-200%);
//   transition: opacity 0.2s, transform 0.8s;

//   table {
//     text-align: left;
//     width: 100%;
//     display: flex;
//     flex-direction: column;

//     color: white;
//     font-size: 13px;

//     th,
//     td {
//       padding: 8px;
//       width: 100%;
//       text-align: left;
//     }
//   }

//   &:hover {
//     opacity: 1;
//     transform: translateY(0);

//     table {
//       display: table;
//     }
//   }
// `;
// const ProductTemplate = () => {
//   const [isBuyClicked, setIsBuyClicked] = useState(false);
//   //   const [isRemoveClicked, setIsRemoveClicked] = useState(false);

//   const handleBuyClick = () => {
//     setIsBuyClicked(true);
//   };

//   const handleRemoveClick = () => {
//     setIsBuyClicked(false);
//   };
//   return (
//     <Wrapper>
//       <Container>
//         <div className="top">
//           <img src={Mac} />
//         </div>
//         <div className={`bottom ${isBuyClicked ? "clicked" : ""}`}>
//           <div className="left">
//             <div className="details">
//               <h1>Macbook Air</h1>
//               <p>Rs. 100000</p>
//             </div>
//             <div className="buy" onClick={handleBuyClick}>
//               <i className="material-icons">
//                 <AddShoppingCartOutlinedIcon
//                   className="material-icons"
//                   style={{ height: "95px" }}
//                 />
//               </i>
//             </div>
//           </div>
//           <div className="right">
//             <div className="done">
//               <i className="material-icons"></i>
//             </div>
//             <div className="details">
//               {isBuyClicked ? (
//                 <>
//                   <h1></h1>
//                   <p>Added to your cart</p>
//                 </>
//               ) : (
//                 <>
//                   <h1></h1>
//                   <p>Removed from Cart</p>
//                 </>
//               )}
//             </div>
//             <div className="remove" onClick={handleRemoveClick}>
//               <i className="material-icons">
//                 <DeleteOutlineOutlinedIcon
//                   className="material-icons"
//                   style={{ height: "95px" }}
//                 />
//               </i>
//             </div>
//           </div>
//         </div>
//       </Container>
//       <Inside>
//         <Icon>
//           <i className="icon">
//             <InfoOutlinedIcon />
//           </i>
//         </Icon>
//         <Contents className="contents">
//           <table>
//             <tr>
//               <th>Width</th>
//               <th>Height</th>
//             </tr>
//             <tr>
//               <td>3000mm</td>
//               <td>4000mm</td>
//             </tr>
//             <tr>
//               <th>Something</th>
//               <th>Something</th>
//             </tr>
//             <tr>
//               <td>200mm</td>
//               <td>200mm</td>
//             </tr>
//             <tr>
//               <th>Something</th>
//               <th>Something</th>
//             </tr>
//             <tr>
//               <td>200mm</td>
//               <td>200mm</td>
//             </tr>
//             <tr>
//               <th>Something</th>
//               <th>Something</th>
//             </tr>
//             <tr>
//               <td>200mm</td>
//               <td>200mm</td>
//             </tr>
//           </table>
//         </Contents>
//       </Inside>
//     </Wrapper>
//   );
// };

// export default ProductTemplate;



















import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import React, { useState } from "react";
import styled from "styled-components";
import Mac from "./macbook.jpg";
import { useDispatch } from "react-redux"; // Import useDispatch hook
import { addToCart, deleteItem } from "../../redux/orebiSlice";

const Wrapper = styled.div`
  /* width: 300px; */
  width: 18vw;
  height: 26vw;
  /* height: 500px; */
  background: white;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0;
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;

  &:hover {
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
  }
`;

const Container = styled.div`
  width: 100%;

  height: 100%;

  .top {
    height: 80%;
    width: 100%;
    background: url("../../assets/product/macbook.jpg") no-repeat center center;
    -webkit-background-size: 100%;
    -moz-background-size: 100%;
    -o-background-size: 100%;
    background-size: 100%;
    position: relative;
    img{
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       min-width: 100%;
       min-height: 100%;
      
    }
  }

  .bottom {
    width: 200%;
    height: 20%;
    transition: transform 0.5s;

    &.clicked {
      transform: translateX(-50%);
    }

    h1 {
      margin: 0;
      padding: 0;
    }

    p {
      margin: 0;
      padding: 0;
    }

    .left {
      height: 100%;
      width: 50%;
      background: #f4f4f4;
      position: relative;
      float: left;

      .details {
        padding: 20px;
        float: left;
        width: calc(70% - 40px);
      }

      .buy {
        float: right;
        width: calc(30% - 2px);
        height: 100%;
        background: #f1f1f1;
        transition: background 0.5s;
        border-left: solid thin rgba(0, 0, 0, 0.1);

        i {
          font-size: 30px;
          padding: 30px;
          color: #254053;
          transition: transform 0.5s;
        }

        &:hover {
          background: #a6cdde;
        }

        &:hover i {
          transform: translateY(5px);
          color: #00394b;
        }
      }
    }

    .right {
      width: 50%;
      background: #a6cdde;
      color: white;
      float: right;
      height: 200%;
      overflow: hidden;

      .details {
        padding: 20px;
        float: right;
        width: calc(70% - 40px);
      }

      .done {
        width: calc(30% - 2px);
        float: left;
        transition: transform 0.5s;
        border-right: solid thin rgba(255, 255, 255, 0.3);
        height: 50%;

        i {
          font-size: 30px;
          padding: 30px;
          color: white;
        }
      }

      .remove {
        width: calc(30% - 1px);
        clear: both;
        border-right: solid thin rgba(255, 255, 255, 0.3);
        height: 50%;
        background: #bc3b59;
        transition: transform 0.5s, background 0.5s;

        &:hover {
          background: #9b2847;
        }

        &:hover i {
          transform: translateY(5px);
        }

        i {
          transition: transform 0.5s;
          font-size: 30px;
          padding: 30px;
          color: white;
        }
      }

      &:hover {
        .remove,
        .done {
          transform: translateY(-100%);
        }
      }
    }
  }
`;

const Inside = styled.div`
  z-index: 9;
  background: #92879b;
  width: 140px;
  height: 140px;
  position: absolute;
  top: -70px;
  right: -70px;
  border-radius: 0px 0px 200px 200px;
  transition: all 0.5s, border-radius 2s, top 1s;

  &:hover {
    width: 100%;
    right: 0;
    top: 0;
    border-radius: 0;
    height: 80%;

    .icon {
      opacity: 0;
      right: 15px;
      top: 15px;
    }

    .contents {
      opacity: 1;
      transform: scale(1);
      transform: translateY(0);
    }
  }
`;

const Icon = styled.div`
  position: absolute;
  right: 85px;
  top: 85px;
  color: white;
  opacity: 1;
`;

const Contents = styled.div`
  display: flex;
  padding: 5%;
  opacity: 0;
  transform: translateY(-200%);
  transition: opacity 0.2s, transform 0.8s;

  table {
    text-align: left;
    width: 100%;
    display: flex;
    flex-direction: column;

    color: white;
    font-size: 13px;

    th,
    td {
      padding: 8px;
      width: 100%;
      text-align: left;
    }
  }

  &:hover {
    opacity: 1;
    transform: translateY(0);

    table {
      display: table;
    }
  }
`;



const ProductTemplate = () => {
  const [isBuyClicked, setIsBuyClicked] = useState(false);
  //   const [isRemoveClicked, setIsRemoveClicked] = useState(false);
  const dispatch = useDispatch();

  const handleBuyClick = () => {
    setIsBuyClicked(true);


    dispatch(addToCart(product));
  };

  const handleRemoveClick = () => {
    setIsBuyClicked(false);
    dispatch(deleteItem(product._id));
  };



  return (
    <Wrapper>
      <Container>
        <div className="top">
          <img src={Mac} />
        </div>
        <div className={`bottom ${isBuyClicked ? "clicked" : ""}`}>
          <div className="left">
            <div className="details">
              <h1>Macbook Air</h1>
              <p>Rs. 100000</p>
            </div>
            <div className="buy" onClick={handleBuyClick}>
              <i className="material-icons">
                <AddShoppingCartOutlinedIcon
                  className="material-icons"
                  style={{ height: "95px" }}
                />
              </i>
            </div>
          </div>
          <div className="right">
            <div className="done">
              <i className="material-icons"></i>
            </div>
            <div className="details">
              {isBuyClicked ? (
                <>
                  <h1></h1>
                  <p>Added to your cart</p>
                </>
              ) : (
                <>
                  <h1></h1>
                  <p>Removed from Cart</p>
                </>
              )}
            </div>
            <div className="remove" onClick={handleRemoveClick}>
              <i className="material-icons">
                <DeleteOutlineOutlinedIcon
                  className="material-icons"
                  style={{ height: "95px" }}
                />
              </i>
            </div>
          </div>
        </div>
      </Container>
      <Inside>
        <Icon>
          <i className="icon">
            <InfoOutlinedIcon />
          </i>
        </Icon>
        <Contents className="contents">
          <table>
            <tr>
              <th>Width</th>
              <th>Height</th>
            </tr>
            <tr>
              <td>3000mm</td>
              <td>4000mm</td>
            </tr>
            <tr>
              <th>Something</th>
              <th>Something</th>
            </tr>
            <tr>
              <td>200mm</td>
              <td>200mm</td>
            </tr>
            <tr>
              <th>Something</th>
              <th>Something</th>
            </tr>
            <tr>
              <td>200mm</td>
              <td>200mm</td>
            </tr>
            <tr>
              <th>Something</th>
              <th>Something</th>
            </tr>
            <tr>
              <td>200mm</td>
              <td>200mm</td>
            </tr>
          </table>
        </Contents>
      </Inside>
    </Wrapper>
  );
};

export default ProductTemplate;

