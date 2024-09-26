// import React from "react";
// import Button from "../Shared/Button";

// const ProductCard = ({ data }) => {
//   return (
//     <div className="mb-10">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
//         {/* card section */}
//         {data.map((data) => (
//           <div
//             data-aos="fade-up"
//             data-aos-delay={data.aosDelay}
//             className="group"
//             key={data.id}
//           >
//             <div className="relative">
//               <img
//                 src={data.img}
//                 alt=""
//                 className="h-[180px] w-[260px] object-cover rounded-md"
//               />
//               {/* hover button */}
//               <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
//                 <Button
//                   text={"Add to cart"}
//                   bgColor={"bg-primary"}
//                   textColor={"text-white"}
//                 />
//               </div>
//             </div>
//             <div className="leading-7">
//               <h2 className="font-semibold">{data.title}</h2>
//               <h2 className="font-bold">${data.price}</h2>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
import { Link } from 'react-router-dom';
import ProductTemplate from './ProductTemplate';

// import styled from 'styled-components';

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
//     background: url(https://s-media-cache-ak0.pinimg.com/736x/49/80/6f/49806f3f1c7483093855ebca1b8ae2c4.jpg) no-repeat center center;
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
// display: flex;
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

//     th, td {
//       padding: 8px;
//        width: 100%;  
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
// `




const ProductCard = () => {


  return (
    <div className="mb-10 mx-28">
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 place-items-center">
     
      <ProductTemplate/>
      
      {/* <ProductTemplate/> */}
      
      {/* <ProductTemplate/> */}
      
      {/* <ProductTemplate/> */}
      
      {/* <ProductTemplate/>
      <ProductTemplate/>
      <ProductTemplate/> */}



    </div></div>
  );
};

export default ProductCard;

