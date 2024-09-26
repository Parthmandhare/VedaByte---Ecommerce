import React, {useState} from "react";
import NavTitle from "./NavTitle";
import { motion } from "framer-motion";


const Price = () => {
  const [showPrice, setShowPrice] = useState(true);
  const priceList = [
    {
      _id: 950,
      priceOne: 0.0,
      priceTwo: 0,
    },
    {
      _id: 951,
      priceOne: 0,
      priceTwo: 0,
    },
    {
      _id: 952,
      priceOne: 0,
      priceTwo: 0,
    },
    {
      _id: 953,
      priceOne: 0,
      priceTwo: 0,
    },
    {
      _id: 954,
      priceOne: 0,
      priceTwo: 0,
    },
    {
      _id: 955,
      priceOne: 0,
      priceTwo: 0,
    },
  ];
  return (
    <div className="cursor-pointer">
      <div
        onClick={() => setShowPrice(!showPrice)}
        className="cursor-pointer"
      >
      <NavTitle title="Shop by Price" icons={true} />

      </div>
      {/* <NavTitle title="Shop by Price" icons={true} /> */}

      {showPrice && (
        <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
      <div className="font-titleFont">
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {priceList.map((item) => (
            <li
              key={item._id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
              Rs. {item.priceOne.toFixed(2)} - Rs. {item.priceTwo.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      </motion.div>
      )}
      
    </div>
  );
};

export default Price;