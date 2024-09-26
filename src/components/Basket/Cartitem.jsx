import React, { useContext } from "react";
import { Link } from "react-router-dom";
import one from "../ProductDetails/image.png"

import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

// import { CartContext } from "../contexts/CartContext";





import { useDispatch } from "react-redux";
import {
  deleteItem,
  drecreaseQuantity,
  increaseQuantity,
} from "../../redux/orebiSlice";




const CartItem = ({ item }) => {
  // const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  // destructure item
  // const { id, title, image, price, amount } = item;

  const dispatch = useDispatch();

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}

        {/* <Link to={`/product/${id}`}> */}
        
          <img className="max-w-[80px]" 
          // src={one}
          src={item.image}
          alt="image" />
        {/* </Link> */}
        <div className="w-full flex flex-col">
          {/* title and remove icon */}
          <div className="flex justify-between mb-2">
            {/* title */}


            {/* <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            > */}


              {/* {title} */}

              {/* Laptop Name */}

              {item.name}


            {/* </Link> */}

            {/* remove icon */}
            <div
              // onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >




              <IoMdClose 
              onClick={() => dispatch(deleteItem(item._id))}
              className="text-gray-500 hover:text-red-500 transition" />




            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">

            {/* quantity */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div 
              // onClick={()=>decreaseAmount(id)} 
              className="h-full flex-1 flex justify-center items-center cursor-pointer">



                <IoMdRemove 
                onClick={() => dispatch(drecreaseQuantity({ _id: item._id }))}
                className="text-gray-500 hover:text-red-500 transition"/>
              </div>
              <div className="h-full flex justify-center items-center px-2 text-black">
                {/* {amount} */}
                {/* 1 */}
                {item.quantity}
              </div>
              <div 
              // onClick={()=>increaseAmount(id)} 
              className="h-full flex flex-1 justify-center items-center cursor-pointer">


                <IoMdAdd  
                onClick={() => dispatch(increaseQuantity({ _id: item._id }))}
                className="text-gray-500 hover:text-red-500 transition"/>

              </div>
            </div>

            {/* item price */}

            <div className="flex flex-1 justify-around items-center">
              {/* $ {price} */}

              {/* Rs.35000 */}

              Rs.{item.price}



            </div>

            {/* final price */}

            <div className="flex flex-1 justify-end items-center text-black font-medium">
              {/* {`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`} */}


            {/* Rs.35000 */}

            Rs. {item.quantity * item.price}


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
