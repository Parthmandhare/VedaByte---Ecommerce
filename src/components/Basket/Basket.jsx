import { useEffect, useRef , useState } from 'react';
import styled, { keyframes } from 'styled-components';
import CartItem from './Cartitem';
import { FiTrash2 } from "react-icons/fi";
import { IoMdArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resetCart } from "../../redux/orebiSlice";
import { auth } from '../../Auth/Firebase';
import { LogoDevRounded } from '@mui/icons-material';













const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;
const slideOut = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
`;


const StyledCartContent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 30%;
  background-color: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 20;
  display: ${props => props.isOpen ? 'block' : 'none'};
  animation: ${props => props.isOpen ? slideIn : slideOut} 0.3s ease-in-out forwards;
`;
const Heading = styled.div`
font-weight: 900;
margin-left:1%;




`


const CartHeader = styled.div`
display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
  justify-content: space-between;
  align-items: center;
  /* background-color: antiquewhite; */
  h2{
    font-weight: 700;

  }
  
`;

const Items = styled.div`
height: 80%;
overflow: hidden;
/* overflow-y: scroll; */

`
const Clearb =styled.div`
  
  display: flex;
  justify-content: flex-end;
  width: 95%;
  height: 3%;
  margin-bottom: 1%;
  /* background-color: aquamarine; */
`



const Buttondiv = styled.div`
display: flex;
/* background-color: bisque; */
height: 5vh;
width: 12%;
align-items: center;
justify-content: space-between;
cursor: pointer;


  


`

const CartFooter = styled.div`
  padding: 10px;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

const Subtotal = styled.div`
  font-weight: bold;
`;

const Closebutton = styled.button`
background-color: #007bff;
  color: #ffffff;
  /* padding: 10px 20px; */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 2%;
  width: 50%;
    


`

const Clearbutton = styled.button`
background-color: #007bff;
  color: #ffffff;
  /* padding: 10px 20px; */

  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 50%;
  


`
const CheckoutButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;





const BasketToggle = ({ isOpen, onClose, subTotal }) => {

  const navigate = useNavigate();

  const [ user, setUser] = useState(null);

  const basketRef = useRef(null);

  const handleClickOutside = (event) => {
    if (basketRef.current && !basketRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const isUserOnline = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        
        navigate("/signup")
        // ...
        
      } else {
        navigate("/signin")
      }
    });

    // console.log("Get clicked");
    
  }

  return (
    <StyledCartContent isOpen={isOpen} ref={basketRef}>



    <CartHeader>
      <Heading>
        Your Cart</Heading>
      <Buttondiv className="cart-buttons">
      
      {/* <Clearbutton onClick={onClose}>Clear</Clearbutton> */}
        {/* <Closebutton onClick={onClose}>Close</Closebutton> */}
        <IoMdArrowForward onClick={onClose} className="text-2xl text-black hover:text-red-500 transition" />
        
        
      </Buttondiv>
    </CartHeader>


    <Items>
    <CartItem/>
    

    </Items>
    <Clearb>
    <FiTrash2 className='text-2xl text-black hover:text-red-500 transition'/></Clearb>
    
    <CartFooter>
      <Subtotal>
        Subtotal: <span>{subTotal}</span>
      </Subtotal>

      <CheckoutButton><button onClick={isUserOnline}>Checkout</button></CheckoutButton>
    </CartFooter>




  
      
     

  </StyledCartContent>
);
};
 

export default BasketToggle;
