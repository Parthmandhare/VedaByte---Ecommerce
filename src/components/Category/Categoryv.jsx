import React from "react";
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";
import Button from "../Shared/Button";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left side */}
          <div className="col-span-1 lg:col-span-1">
            <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[660px] flex items-end">
              <div>
                <div className="mb-4">
                  <p className="mb-[2px] text-gray-400">Enjoy</p>
                  <p className="text-2xl font-semibold mb-[2px]">With</p>
                  <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                    Desktops
                  </p>
                  <Button
                    text="Browse"
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                  />
                </div>
              </div>
              {/* <img src={Image1} alt="" className="w-[320px] absolute bottom-0" /> */}
            </div>
          </div>

          {/* Right side */}
          <div className="col-span-1 lg:col-span-1 grid grid-cols-1 gap-4">
            {/* Second card */}
            <div className="col-span-1 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end">
              <div>
                <div className="mb-4">
                  <p className="mb-[2px] text-white">Enjoy</p>
                  <p className="text-2xl font-semibold mb-[2px]">With</p>
                  <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                    Printers
                  </p>
                  <Button
                    text="Browse"
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                  />
                </div>
              </div>
              <img
                // src={Image1}
                alt=""
                className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"
              />
            </div>

            {/* Third card */}
            <div className="col-span-1 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end">
              <div>
                <div className="mb-4">
                  <p className="mb-[2px] text-white">Enjoy</p>
                  <p className="text-2xl font-semibold mb-[2px]">With</p>
                  <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                    Laptop
                  </p>
                  <Button
                    text="Browse"
                    bgColor={"bg-white"}
                    textColor={"text-primary"}
                  />
                </div>
              </div>
              <img
                src={Image3}
                alt=""
                className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
