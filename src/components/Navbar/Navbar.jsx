import React, { useState } from "react";
import styled from "styled-components";
import Logol from "./Logol";
import Button from "./Button";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import BasketToggle from "../Basket/BasketToggle";
import { useSelector } from "react-redux";
import Itemsdropdown from "./ShiftingDropDown.jsx";

const section = styled.section`
  width: 100vw;
  background-color: white;
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 4.5rem;
  margin: 0 auto;

  .mobile {
    display: none;
  }
  @media (max-width: 64em) {
    height: 5rem;
    .desktop {
      display: none;
    }
    .mobile {
      display: inline-block;
    }
  }
`;
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 64em) {
    //1024px

    position: fixed;
    top: 5rem;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: calc(100vh - 5rem);
    z-index: 50;
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(2px);

    transform: ${(props) =>
      props.click ? "translateY(0)" : "translateY(1000%)"};
    transition: 0.3s ease;

    flex-direction: column;
    justify-content: center;
  }
`;
const Logocontainer = styled.ul`
  @media (max-width: 64em) {
    width: 40%;
    display: flex;
    /* background-color: azure; */
  }
`;
const MenuItems = styled.li`
  margin: 0 1rem;
  color: black;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: black;
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 64em) {
    margin: 1rem 0;
    &::after {
      display: none;
    }
  }
`;
const Navrightrespon = styled.div`
  display: none;

  @media (max-width: 64em) {
    display: block;
    display: flex;
    align-items: center;
  }
`;

const HamburgerMenu = styled.span`
  width: ${(props) => (props.click ? "2rem" : "1.5rem")};
  height: 2px;
  background: black;

  position: absolute;
  top: 2.5rem;
  left: 52%;
  transform: ${(props) =>
    props.click
      ? "translateX(-50%) rotate(90deg)"
      : "translateX(-50%) rotate(0)"};

  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  @media (max-width: 64em) {
    //1024px

    display: flex;
  }

  &::after,
  &::before {
    content: "";
    width: ${(props) => (props.click ? "1rem" : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.click ? "-2px" : "0rem")};
    background: black;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(-40deg)" : "rotate(0)")};
  }
  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(40deg)" : "rotate(0)")};
  }
`;

const Navigation = () => {
  const products = useSelector((state) => state.orebiReducer.products);

  const [click, setClick] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);

  const toggleBasket = () => {
    setBasketOpen(!basketOpen);
  };

  const scrollTo = (id) => {
    console.log("Scrolling to:", id);
    const element = document.getElementById(id);
    console.log("Element:", element);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    setClick(!click);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleLogOut = () => {
    console.log("log out");
    signOut(auth);
    setIsOpen(false);
  };

  return (
    <section id="navigation">
      <NavBar>
        <Logocontainer>
          <Logol />
        </Logocontainer>
        <HamburgerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgerMenu>

        <Navrightrespon>
          <button className="relative p-3" type="button">
            <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />

            <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
              0
            </div>
          </button>
          <div>
            <AiOutlineUser />
          </div>
        </Navrightrespon>
        <Menu click={click}>
          {/* <MenuItems onClick={() => scrollTo("Home")}>Best Sellers</MenuItems>
          <MenuItems onClick={() => scrollTo("About")}>Laptops</MenuItems>
          <MenuItems onClick={() => scrollTo("Roadmap")}>Printers</MenuItems>
          <MenuItems onClick={() => scrollTo("Roadmap")}>Desktops</MenuItems>
          <MenuItems onClick={() => scrollTo("Roadmap")}>Accesories</MenuItems> */}

          {/* <MenuItems onClick={() => scrollTo("Home")}>Best Sellers</MenuItems>
          <MenuItems onClick={() => scrollTo("About")}>About Us</MenuItems>

          <MenuItems onClick={() => scrollTo("About")}>Shop</MenuItems> */}

          {/* <MenuItems onClick={() => scrollTo("About")}>Laptops</MenuItems>
          <MenuItems onClick={() => scrollTo("Roadmap")}>Printers</MenuItems>
          <MenuItems onClick={() => scrollTo("Roadmap")}>Desktops</MenuItems>
          <MenuItems onClick={() => scrollTo("Roadmap")}>Accesories</MenuItems> */}
          <Itemsdropdown />

          {/* <MenuItems onClick={() => scrollTo("About")}>Blogs</MenuItems>
          <MenuItems onClick={() => scrollTo("About")}>Contact</MenuItems> */}

          <MenuItems>
            <div className="mobile">
              {/* <Link to="/auth/Login"> */}

              {/* <Button text ="Login / SignUP" /> */}
              {/* </Link> */}

              {/* Navbar Right section */}
              <div className="flex justify-between items-center gap-4 ">
                {/* Search Bar section */}
                <div className="relative group hidden sm:block">
                  <input
                    type="text"
                    placeholder="Search"
                    className="
              search-bar
              "
                  />
                  <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
                </div>

                {/* Order-button section */}

                {/* <button
                className="relative p-3"
                
                
                type="button"
              >

                  
                  <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
                  
                  
                  <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                    0
                    
                    
                  </div>
                  
                

              </button> */}

                {/* Profile section */}

                {/* <div>
                  <AiOutlineUser />
                </div> */}
              </div>
            </div>
          </MenuItems>
        </Menu>

        <div className="desktop">
          {/* <Link to="/auth/Login"> */}

          {/* <Button text ="Login / SignUP" /> */}
          {/* </Link> */}

          {/* Navbar Right section */}
          <div className="flex justify-between items-center gap-4 ">
            {/* Search Bar section */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="
              search-bar
              "
              />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>

            {/* Order-button section */}
            {/* <button className="relative p-3">
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                0
              </div>
            </button> */}

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

            {/* Profile section */}

            <div className="relative">
              <AiOutlineUser
                className="cursor-pointer"
                onClick={toggleDropdown}
              />
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      to={"/SignIn"}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Login
                    </Link>
                  </div>

                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleLogOut();
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </NavBar>
    </section>
  );
};

export default Navigation;
