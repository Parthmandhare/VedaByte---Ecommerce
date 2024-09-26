import React, { useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Partners from "./components/Partners/Partners.jsx";

import Laptop from "./assets/hero/5.png";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import ProductCard from "./components/Products/ProductCard.jsx";
// import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

import Test from "./components/Test.jsx"
import styled from "styled-components";
// import MyContext from "./Context/MyContext.js";



import Lappy from "./components/Bestsellers/Lappy.jsx"
import Print from "./components/Bestsellers/Print.jsx";
import Desktops from "./components/Bestsellers/Desktops.jsx";
import Itemdrop from "./components/Navbar/ShiftingDropDown.jsx"



const Navcont=styled.div`
z-index: 11;
margin: 15px 0;



  

  position: sticky;
  top: 0;
  background-color: white;
  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); */
  
  
`
const Productdiv=styled.div`
/* background-color: aqua; */
max-height: 450px;
overflow: hidden;
`

const BannerData = {
    discount: "Bestsellers",
    title: "Refurbished Laptops",
    date: "This Month",
    image: Laptop,
    title2: "Bestselling laptops for this month , grab this opportunity fast",
    title3: "Summer Sale",
    title4:
      "Click the Button below to see all the products",
    bgColor: "#f42c37",
    key: "Laptop"
  };
  
  const BannerData2 = {
    discount: "Bestsellers",
    title: "Printers",
    date: "This Month",
    
    title2: "Bestselling Printers for this month , grab this opportunity fast",
    title3: "Summer Sale",
    title4:
      "Click the Button below to see all the products",
    bgColor: "#2dcc6f",
    key: "Printer"
  };
  const BannerData3 = {
    discount: "Bestsellers",
    title: "Refurbished Desktops",
    date: "This Month",
    image: Laptop,
    title2: "Bestselling Desktops for this month , grab this opportunity fast",
    title3: "Summer Sale",
    title4:
      "Click the Button below to see all the products",
    bgColor: "#1b1414",
    key: "Desktops"
  };

const Landing = () => {
    // const [orderPopup, setOrderPopup] = React.useState(true);

    // const handleOrderPopup = () => {
    //   setOrderPopup(!orderPopup);
    // };
  
    React.useEffect(() => {
      AOS.init({
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      });
      AOS.refresh();
    }, []);

    // const context = useContext(MyContext);

    // const name = context;

  return (
    <>
    <Navcont>
      {/* <Navbar handleOrderPopup={handleOrderPopup} /> */}
      <Itemdrop/>
    </Navcont>

    {/* <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} /> */}

    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
    
    <Hero  />
    <Category />
    {/* <Category2 /> */}
    <Services />
    <Banner data={BannerData} />
    {/* <Products /> */}
    {/* <ProductCard/> */}

    <Productdiv>



    <Lappy/>
    </Productdiv>

    <Banner data={BannerData2} />
    {/* <Products /> */}
    {/* <ProductCard/> */}



    <Productdiv>
    <Print/>
    </Productdiv>
    

    <Banner data={BannerData3} />
    {/* <Products /> */}
    {/* <ProductCard/> */}
    <Productdiv>

    <Desktops/>
    </Productdiv>
    
    <Partners />
    <Blogs />
    {/* <Test/> */}
    <Footer />
    {/* {name} */}
    {/* <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} /> */}
  </div>
  </>
  )
}

export default Landing