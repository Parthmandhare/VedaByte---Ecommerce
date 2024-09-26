import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Logol from "./Logol";
import styled from "styled-components";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import BasketToggle from "../Basket/BasketToggle";
import { useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { signOut } from "firebase/auth";
import { auth } from "../../Auth/Firebase";
import { IoMdSearch } from "react-icons/io";
import { Link,} from "react-router-dom";
import Veda from "../../assets/Vedaveda.jpg"
import Contact from "../../assets/Contactme.png"


const Logocontainer = styled.div`
  display: flex;
`;
const Rightside = styled.div`
  display: flex;
`;
const Navcont = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ShiftingDropDown = () => {
  const products = useSelector((state) => state.orebiReducer.products);

  const navigate = useNavigate();

  
  
  const handleMyOrdersClick = () => {
    if (auth) {
      navigate('/userdashboard');
    } else {
      navigate('/SignIn');
    }
  };
  





  const [click, setClick] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);

  const toggleBasket = () => {
    setBasketOpen(!basketOpen);
  };

  const handleLogOut = () => {
    console.log("log out");
    signOut(auth);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navcont>
        <Logocontainer>
          <Logol />
        </Logocontainer>

        <div className="flex   justify-center  p-2 text-neutral-200 md:justify-center ">
          {/* bg-neutral-950 */}

          <Tabs />
        </div>

        <Rightside>
          {/* add searchbar and login icon */}
          {/* <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="search-bar"
              />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div> */}


          <div>
            <button
              className="relative p-3"
              type="button"
              onClick={toggleBasket}
            >
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                {/* You may replace this with the actual count of items in the basket */}
                {/* 0 */}

                {products.length}
              </div>
            </button>

            {/* Render the BasketToggle component */}
            <BasketToggle
              isOpen={basketOpen}
              onClose={() => setBasketOpen(false)}
            />
          </div>

          <div className="relative p-3">
              <AiOutlineUser
                className="cursor-pointer"
                onClick={toggleDropdown}
              />
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                  <div
                    className="py-1 "
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      to={"/SignIn"}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-center"
                      role="menuitem"
                    >
                      Login
                    </Link>
                  </div>

                  <div
                    className="py-1 "
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleLogOut();
                      }}
                      className=" w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Logout
                    </button>
                  </div>
                  
                 
                  <div
                    className="py-1 "
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    {/* <Link
                      to={"/userdashboard"}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-center"
                      role="menuitem"
                    >
                      My Orders
                    </Link> */}
                    <button
                      onClick={handleMyOrdersClick}
                      className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-center"
                      role="menuitem"
                    >
                      My Orders
                    </button>
                  </div> 


                  

                </div>
              )}
          </div>
        </Rightside>
        
      </Navcont>
    </>
  );
};
export default ShiftingDropDown;

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);
  const navigate = useNavigate();

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab
          ? " bg-neutral-800 text-neutral-100"
          : "text-neutral-400"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-[#202020] p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};

const Products = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div>
          <h3 className="mb-2 text-sm font-medium">Startup</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Bookkeeping
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            Invoicing
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">Scaleup</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Live Coaching
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Reviews
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            Tax/VAT
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">Enterprise</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            White glove
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            SOX Compliance
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            Staffing
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            More
          </a>
        </div>
      </div>

      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

const Pricing = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiHome className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Laptops</span>
      </a>

      <div onClick={()=> {navigate(`/productlist/Desktops`)}}>
      <a
        // href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiBarChart2 className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Desktops</span>
      </a>
      </div>



      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiPieChart className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Printers</span>
      </a>
    </div>
  );
};

const Shop = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-3 gap-3 divide-x divide-neutral-700">
      <div onClick={()=> {navigate(`/productlist/Laptop`)}}>

      <a
        // href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiHome className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Laptops</span>
      </a>
      </div>


      <div onClick={()=> {navigate(`/productlist/Desktops`)}}>
      <a
        // href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiBarChart2 className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Desktops</span>
      </a>
      </div>

      <div onClick={()=> {navigate(`/productlist/Printer`)}}>


      <a
        // href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiPieChart className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Printers</span>
      </a>
      </div>
      {/* <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiPieChart className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Accesories</span>
      </a> */}
    </div>
  );
};

const Blog = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <a href="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="/imgs/blog/4.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
        <a href="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="/imgs/blog/5.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
      </div>
      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};
const Aboutus = () => {
  return (
    <div>
      <div>
        <a href="#">
          <img
            className="mb-2 h-50 w-full rounded object-cover"
            src={Veda}
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium">Vedabyte</h4>
          <p className="text-xs text-neutral-400">
          At Vedabyte, we are committed to providing our customers with the best deals electronic devices, including second-hand laptops and refurbished laptops.
          </p>
        </a>
      </div>
      {/* <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <FiArrowRight />
      </button> */}
    </div>
  );
};

const Contactus = () => {
  return (
    <div>
      <div>
        <a href="#">
          <img
            className="mb-2  w-full rounded object-cover"
            src={Contact}
            alt="Placeholder image"
          />
          {/* <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p> */}
        </a>
      </div>
      {/* <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <FiArrowRight />
      </button> */}
    </div>
  );
};

const TABS = [
  // {
  //   title: "Bestsellers",
  //   // Component: Products,
  //   Component: Pricing,
  // },
  {
    title: "Shop",
    Component: Shop,
  },
  // {
  //   title: "Blog",
  //   Component: Blog,
  // },
  {
    title: "About Us",
    Component: Aboutus,
  },
  {
    title: "Contact Us",
    Component: Contactus,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
