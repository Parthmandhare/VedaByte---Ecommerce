import React, { useContext, useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import Pagination from "./Pagination";
import ProductBanner from "./ProductBanner";
import ShopSideNav from "./ShopSideNav";
import Nav from "../Navbar/Navbarsec";
import styled from "@emotion/styled";
import Slidercomp from "./Slidercomp";
import mac from "../Productscards/macbook.jpg";
import Product from "../Bestsellers/Product";
import MyContext from "../../Context/MyContext";
import { useParams } from "react-router-dom";
import Itemdrop from "../Navbar/ShiftingDropDown.jsx"
import Pic from "../../assets/Driver.png"

const Maindiv = styled.div`
  /* background-color: aqua; */
  min-height: fit-content;
  overflow: hidden;
`;
const Navcont=styled.div`
z-index: 11;
margin: 15px 0;

  

  position: sticky;
  top: 0;
  background-color: white;
  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); */
  
  
`

const Shop = () => {

  const {category} = useParams();

  const [itemsPerPage, setItemsPerPage] = useState(20);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  const context = useContext(MyContext);
  const {getAllProduct} = context;

  const filteredProducts = getAllProduct.filter(
    (product) => product.category === category
  );

  return (
    <>
      {/* <Nav /> */}

      <Navcont>
      {/* <Navbar handleOrderPopup={handleOrderPopup} /> */}
      <Itemdrop/>
    </Navcont>
      <div className="w-full h-[50vh]  mt-3 ">
        {/* <Slidercomp/> */}
        <img className="w-full" src= {Pic} alt="no img" />
      </div>

      <Maindiv className="max-w-container mx-auto px-4  ">
        {/* <div className=""><Breadcrumbs title="Products" /></div> */}

        {/* ================= Products Start here =================== */}


        <div className="w-full h-full flex flex-col pb-20 px-7">
          {/* <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full"> */}
          <div className="w-[15%] lgl:w-[25%] mdl:inline-flex h-full">
            <div className="">


              <Breadcrumbs title="Products" />


            </div>

            {/* <ShopSideNav /> */}


          </div>
          <div className="  w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10 mt-10  overflow-hidden">



            {/* <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} /> */}





          <div className=" flex flex-wrap ">
          {filteredProducts.slice(0, 8).map((item, index) => {
          const { id, Brand, Description, Price, Product_Name, thumbnail_img } =
            item;
          return (
            <div className="p-3">
              <Product
                _id={id}
                img={thumbnail_img}
                productName={Product_Name}
                price={Price}
                badge={true}
              />
            </div>
          );
        })}
          </div>

          
          
            {/* <Pagination itemsPerPage={itemsPerPage} /> */}
          </div>
        </div>
        {/* ================= Products End here ===================== */}
      </Maindiv>
    </>
  );
};

export default Shop;
