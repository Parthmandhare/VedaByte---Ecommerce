import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { db } from "../Auth/Firebase";

const UpdateProductPage = () => {

  const navigate = useNavigate();

  const {id} = useParams();

  const [product, setProduct] = useState({
    Product_Name: "",
    Brand: "",
    category: "",
    Description: "",
    Price: "",
    keywords: "",
    thumbnail_img: "",
    img_collection: [],
    specifications: {}
  });

  const [displayProduct, setDisplayProduct] = useState({
    Product_Name: "",
    Brand: "",
    category: "",
    Description: "",
    Price: "",
    keywords: "",
    thumbnail_img: "",
    img_collection: [],
    specifications: {}
  });

  useEffect(()=>{
    getData(id)
  }, [id])

  const getData = async (id) => {
    if (!id) {
      console.log("User ID is not set.");
      return;
    }

    const docRef = doc(db, "Products", id);
    const docData = await getDoc(docRef);

    setDisplayProduct(
      {
        ...displayProduct,
      Product_Name :  docData.data().Product_Name,
      Brand : docData.data().Brand,
      Price : docData.data().Price,
      Description : docData.data().Description,
      category : docData.data().category,
      specifications : docData.data().specifications,
      }
    )

    if (docData.exists()) {
      setProduct({
        ...docData.data(),
        specifications: docData.data().specifications || {} // Ensure specifications is an object
      });
      setSelectedCategory(docData.data().category); // Initialize selectedCategory with fetched category
   } else {
      console.log("No such document!");
   }

  };


  const [selectedCategory, setSelectedCategory] = useState("");


  const SubmitHandler = async(e) => {
    e.preventDefault();

    try {
      // console.log(product);
        const productRef = doc(db, "Products", id);
        await updateDoc(productRef, product);
        setProduct({ // Reset the form
          Product_Name: "",
          Brand: "",
          category: "",
          Description: "",
          Price: "",
          keywords: "",
          thumbnail_img: "",
          img_collection: [],
          specifications: {}
        });
        navigate("/admindashboard");

    } catch (error) {
        console.log(error);
        // toast.error("Add Product Failed");
    }
  }

    // Function to handle category selection
    const handleCategoryChange = (event) => {
      const newCategory = event.target.value;
      setSelectedCategory(newCategory); // Update selectedCategory
      setProduct({
         ...product,
         category: newCategory
      });
     };


     const handleSpecificationChange = (event) => {
      const { name, value } = event.target;
      setProduct({
         ...product,
         specifications: {
           ...product.specifications,
           [name]: value // Dynamically update the specifications object
         }
      });
     };

  const renderInputField = () => {
    switch (selectedCategory) {
      case "Laptop":
        return (
          <>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Storage
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="256 GB"
                  name = {"Storage"}
                  onChange={handleSpecificationChange}
                />
              </div>
              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Processor
                </label>
                
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="intel i5"
                  name = {"Processor"}
                  onChange={handleSpecificationChange}
                />
              </div>
              
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Screen Size
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="14 Inches"
                  name = {"Screen_Size"}
                  onChange={handleSpecificationChange}
                />
              </div>
              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  RAM Memory
                </label>
                
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="8 GB"
                  name = {"RAM_Memory"}
                  onChange={handleSpecificationChange}
                />
              </div>
              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Display
                </label>

                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="HD/OLED"
                  name = {"Display"}
                  onChange={handleSpecificationChange}
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Grapics
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="iRIS"
                  name = {"Grapics"}
                  onChange={handleSpecificationChange}
                />
              </div>
              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Colour
                </label>
                
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Black"
                  name = {"Colour"}
                  onChange={handleSpecificationChange}
                />
              </div>
              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Operating System
                </label>

                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Windows"
                  name = {"Operating_System"}
                  onChange={handleSpecificationChange}
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full  px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Special Features
                </label>

                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Security/RGB"
                  name = {"Special_Features"}
                  onChange={handleSpecificationChange}
                />
              </div>
            </div>
          </>
        );
      case "Desktops":
        return (
            <>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Storage
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="256 GB"
                  name = {"Storage"}
                  onChange={handleSpecificationChange}
                />
              </div>
              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Processor
                </label>
                
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="intel i5"
                  name = {"Processor"}
                  onChange={handleSpecificationChange}
                />
              </div>
              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Display
                </label>

                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="HD/OLED"
                  name = {"Display"}
                  onChange={handleSpecificationChange}
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Operating System
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Windows/Mac"
                  name = {"Operating_System"}
                  onChange={handleSpecificationChange}
                />
              </div>

              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Storage
                </label>
                
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="8 GB"
                  name = {"Storage"}
                  onChange={handleSpecificationChange}
                />
              </div>

              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Model Name
                </label>

                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="HD/OLED"
                  name = {"Model_Name"}
                  onChange={handleSpecificationChange}
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Grapics
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="iRIS"
                  name = {"Grapics"}
                  onChange={handleSpecificationChange}
                />
              </div>

              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Colour
                </label>
                
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Black"
                  name = {"Colour"}
                  onChange={handleSpecificationChange}
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full  px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Special Features
                </label>

                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  name = {"Special_Features"}
                  placeholder="Security/RGB"
                  onChange={handleSpecificationChange}
                />
              </div>
            </div>
            </>
        );
      case "Printer":
        return (
            <>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Connectivity Type
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Eg. USB"
                  name = {"Connectivity_Type"}
                  onChange={handleSpecificationChange}
                />
              </div>
              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Colour
                </label>
                
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Eg. Colour"
                  name = {"Colour"}
                  onChange={handleSpecificationChange}
                />
              </div>
              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Weight
                </label>

                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Eg. 5 KG"
                  name = {"Weight"}
                  onChange={handleSpecificationChange}
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Printing Technology
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Eg. HP"
                  name = {"Printing_Technology"}
                  onChange={handleSpecificationChange}
                />
              </div>

              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Model Number
                </label>
                
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Eg. 123456"
                  name = {"Model_Number"}
                  onChange={handleSpecificationChange}
                />
              </div>

              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Max. Print Speed
                </label>

                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Eg. 5"
                  name = {"Max_Print_Speed"}
                  onChange={handleSpecificationChange}
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full  px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Special Features
                </label>

                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Eg. Color"
                  name = {"Special_Features"}
                  onChange={handleSpecificationChange}
                />
              </div>
            </div>
            </>
        );

      case "Accessories":
        return (
            <>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full  px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Special Features
                </label>

                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  name="Special_Features"
                  type="text"
                  placeholder=""
                  onChange={handleSpecificationChange}
                />
              </div>

            </div>
            </>
        );
      default:
        return (
          <>
          </>
        );
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form class="w-full max-w-lg m-10  bg-slate-100 px-10 pb-10">
        <h2 className=" text-2xl font-bold my-14 text-center">
          Update Product
        </h2>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Product Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder={displayProduct.Product_Name}
              value={product.Product_Name}
              onChange= {(e)=>{
                setProduct(
                    {
                    ...product, 
                    Product_Name: e.target.value
                    }
                )
              }}
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Brand
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder={displayProduct.Brand}
              value={product.Brand}
              onChange= {(e)=>{
                setProduct(
                    {
                    ...product, 
                    Brand: e.target.value
                    }
                )
              }}
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Category
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={handleCategoryChange}
                value={selectedCategory}
              >
                <option value="">Please Select</option>
                <option value="Laptop">Laptop</option>
                <option value="Desktops">Desktops</option>
                <option value="Printer">Printer</option>
                <option value="Accessories">Accessories</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Price
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder={displayProduct.Price}
              value={product.Price}
              onChange= {(e)=>{
                setProduct(
                    {
                    ...product, 
                    Price: e.target.value
                    }
                )
              }}
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Description
            </label>

            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder={displayProduct.Description}
              value={product.Description}
              onChange= {(e)=>{
                setProduct(
                    {
                    ...product, 
                    Description: e.target.value
                    }
                )
              }}
            />
          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Keywords
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="90210"
            />
          </div>
        </div>

        <h3 className="text-xl font-bold my-10">Specifications</h3>

        {renderInputField()}

        <button
          class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={SubmitHandler}
        >
          Save Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProductPage;
