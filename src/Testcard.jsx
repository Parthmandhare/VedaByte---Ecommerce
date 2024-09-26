// import React from 'react';
// import styled from 'styled-components';
// import shoe from './assets/shoe.png';

// const ContainerProductCard = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

// const ProductCardContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 376px;
//   width: 241px;
//   border-radius: 15px;
// `;

// const TopCard = styled.div`
//   background-color: #EF3749;
//   height: 45%;
//   position: relative;
//   border-radius: 15px 15px 0 0;
// `;

// const ProductImage = styled.img`
//   position: absolute;
//   top: -2.5rem;
//   left: 50%;
//   width: 220px;
//   height: auto;
//   transform: rotate(-8deg) translateX(-50%);
//   z-index: 2;
// `;

// const ProductPrice = styled.span`
//   color: white;
//   font-size: 1.5rem;
//   font-weight: 700;
//   font-style: italic;
//   position: absolute;
//   bottom: .25rem;
//   right: .75rem;
// `;

// const BottomCard = styled.div`
//   background-color: white;
//   height: 55%;
//   border-radius: 0 0 15px 15px;
//   position: relative;
// `;

// const ProductName = styled.div`
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   gap: .25rem;
//   margin-top: 1.2rem;
// `;

// const ProductDescription = styled.div`
//   max-width: 75%;
//   margin: auto;
//   margin-top: 1rem;
// `;

// const ProductDescriptionText = styled.p`
//   text-align: center;
//   font-size: 9px;
//   color: #7C7C7C;
//   font-weight: 400;
// `;

// const CTAAddToCart = styled.button`
//   position: absolute;
//   bottom: 1.5rem;
//   width: 80%;
//   left: 50%;
//   transform: translateX(-50%);
//   background-color: #EF3749;
//   color: white;
//   border-radius: 200px;
//   outline: none;
//   border: none;
//   padding: .45rem;
//   font-size: 10px;
//   cursor: pointer;
// `;

// const Testcard = () => {
//   return (

//     <ContainerProductCard>
//       <ProductCardContainer>
//         <TopCard>
          
//           <ProductImage src={shoe} className="product_image" />
//           <ProductPrice>Rs. 455</ProductPrice>
//         </TopCard>
//         <BottomCard>
          
//           <ProductName>
//             <h6>Nike</h6>
//             <h4>Air Jordan 1 Retro</h4>
//           </ProductName>
//           <ProductDescription>
//             <ProductDescriptionText>
//               The extremely popular Air Jordan 1 shoes are the best-selling Air Jordans in the history of the brand, not to mention the success that the versions dedicated to Michael Jordan's career have had.
//             </ProductDescriptionText>
//           </ProductDescription>
//           <CTAAddToCart type="button">Add To Cart</CTAAddToCart>
//         </BottomCard>
//       </ProductCardContainer>
//     </ContainerProductCard>
//   );
// };

// export default Testcard;




import React from 'react';
import styled from 'styled-components';
import img from "./components/Productscards/macbook.jpg"


const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width:75%;
  
`;

const Column = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  padding: 0 15px;
`;

const ProductGrid = styled.div`
  font-family: 'Poppins', sans-serif;
  text-align: center;
  border-radius: 15px;
  border: 1px solid #e7e7e7;
  overflow: hidden;
  transition: all 0.4s ease-out;

  &:hover {
    box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.div`
  position: relative;

`;

const Image = styled.img`
  width: 100%;
  height: 30vh;
`;

const ProductDiscountLabel = styled.span`
  color: #fff;
  background: #78a206;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 5px;
  position: absolute;
  top: 12px;
  left: 12px;
`;

const ProductContent = styled.div`
  padding: 12px 12px 15px;
  position: relative;
  height: 15vh;
  ${ProductGrid}:hover & {
    height: fit-content;
    
  }
`;

const Rating = styled.ul`
  padding: 0;
  margin: 0 0 8px;
  list-style: none;
`;


const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 0 15px;

  a {
    color: #2c2c2c;
    transition: all 0.3s ease 0s;

    &:hover {
      color: #78a206;
    }
  }
`;

const Desc = styled.div`
opacity: 0;
${ProductGrid}:hover & {
    opacity: 1;
    transition: all 0.3s ease-in;
  }
  

`

const Price = styled.div`
  color: #78a206;
  font-size: 17px;
  font-weight: 600;
  display: block;
  transition: all 0.4s ease-in-out;

  span {
    color: #999;
    font-weight: 500;
    text-decoration: line-through;
  }

  ${ProductGrid}:hover & {
    opacity: 1;
  }
`;

const AddToCart = styled.a`
  color: #fff;
  background-color: #78a206;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 40px;
  width: 140px;
  height: 40px;
  border-radius: 50px;
  opacity: 0;
  transform: translateX(-50%);
  position: absolute;
  bottom: 50px;
  left: 50%;
  transition: all .4s ease-out;

  &:hover {
    background-color: #2f2f2f;
  }

  ${ProductGrid}:hover & {
    opacity: 1;
    bottom: 8px;
  }
`;


const Product = () => {
  return (
    <Row>
      <Column>
        <ProductGrid>
          <ProductImage>
            <a href="#" className="image">
              <Image className="pic-1" src={img} alt='image'/>
            </a>
            <ProductDiscountLabel>-33%</ProductDiscountLabel>
           
            <AddToCart href="#">add to cart</AddToCart>
          </ProductImage>


          <ProductContent>
            <Rating>
              
              Dell
            </Rating>
            <Title><a href="#">Inspiron</a></Title>
            <Price><span>$90.00</span> $66.00</Price>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dicta labore quisquam </Desc>
            
          </ProductContent>
        </ProductGrid>
      </Column>
      
    </Row>
  );
};

export default Product;

