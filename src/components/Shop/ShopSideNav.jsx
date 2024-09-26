import React from "react";
import Brand from "./Brand";
// import Category from "./shopBy/Category";
import Color from "./Color";
import Price from "./Price";

const ShopSideNav = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* <Category icons={false} /> */}
      <Brand />
      <Color />
      <Price />
      
    </div>
  );
};

export default ShopSideNav;