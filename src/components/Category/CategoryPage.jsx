import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import MyContext from "../../Context/MyContext";
import image from "../Products/macbook.jpg";

export const CategoryPage = () => {
  const { categoryname } = useParams();

  const context = useContext(MyContext);

  const { getAllProduct } = context;

  const navigate = useNavigate();

  const filterProduct = getAllProduct.filter((obj) => obj.category.includes(categoryname))

  console.log(filterProduct);

  return (
    <>
      <div>
        <div className="mt-10">
          {/* Heading  */}
          <div className="">
                    <h1 className=" text-center mb-5 text-2xl font-semibold first-letter:uppercase">{categoryname}</h1>
                </div>
          {/* main  */}
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto">
              <div className="flex flex-wrap -m-4">

                {filterProduct.length > 0 ?
                <>
                    {filterProduct.map((item, index) => {
                  const { Product_Name, Price, Description, id } = item;
                  return (
                    <div key={index} className="p-4 w-full md:w-1/4">
                      <div
                        className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(`/productinfo/${id}`);
                        }}
                      >
                        <img
                          className="lg:h-80  h-96 w-full"
                          src={image}
                          alt="blog"
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
                          <h2 className="title-font text-lg font-medium text-gray-900 mb-3">
                            {Product_Name.substring(0, 25)}
                          </h2>
                          <h1 className="title-font text-sm font-medium text-gray-900 mb-3">
                            {Description.substring(0, 25)}
                          </h1>
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            ₹{Price}
                          </h1>
                          <div className="flex justify-center ">
                            <button className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold"></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                </>    

                : 
                <div>
                                        <div className="flex justify-center">
                                            <img className=" mb-2" src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png" alt="" />
                                        </div>
                                        <h1 className=" text-black text-xl">No {categoryname} product found</h1>
                                    </div>
            }
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
