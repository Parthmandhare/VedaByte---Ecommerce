import { addDoc, collection, doc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../Auth/Firebase";
import { toast } from "react-toastify";
import { MuiChipsInput } from 'mui-chips-input'
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";

export const AddProductPage = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("");

  const [product, setProduct] = useState({
    Product_Name: "",
    Brand: "",
    category: "",
    Description: "",
    Price: "",
    keywords: "",
    thumbnail_img: "",
    img_collection: [],
    specifications: {},
  });

  const [productImgThumbnail, setProductImgThumbnail] = useState(null);

  const [imgCollection, setImgCollection] = useState([]);

  // Function to handle category selection
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setProduct({
      ...product,
      category: event.target.value,
    });
  };

  const handleSpecificationChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      specifications: {
        ...product.specifications,
        [name]: value, // Dynamically update the specifications object
      },
    });
  };

  // Function to render the input field based on the selected category
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
                  name={"Storage"}
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
                  name={"Processor"}
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
                  name={"Screen_Size"}
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
                  name={"RAM_Memory"}
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
                  name={"Display"}
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
                  name={"Grapics"}
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
                  name={"Colour"}
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
                  name={"Operating_System"}
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
                  name={"Special_Features"}
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
                  name={"Storage"}
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
                  name={"Processor"}
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
                  name={"Display"}
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
                  name={"Operating_System"}
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
                  name={"Storage"}
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
                  name={"Model_Name"}
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
                  name={"Grapics"}
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
                  name={"Colour"}
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
                  name={"Special_Features"}
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
                  placeholder="USB"
                  name={"Connectivity_Type"}
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
                  placeholder="Colour"
                  name={"Colour"}
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
                  placeholder="5 KG"
                  name={"Weight"}
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
                  placeholder=""
                  name={"Printing_Technology"}
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
                  placeholder=""
                  name={"Model_Number"}
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
                  placeholder=""
                  name={"Max_Print_Speed"}
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
                  placeholder=""
                  name={"Special_Features"}
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
        return <></>;
    }
  };

  const [uploadImages, setUploadImages] = useState();

  const SubmitHandler = async (e) => {
    e.preventDefault();

    console.log("Hello Bhau");

    if (productImgThumbnail === null) {
      alert("Please select an image");
      return;
    }

    const imageRef = ref(
      storage,
      `products_images/${productImgThumbnail.name}`
    );

    try {
  
      // Upload the single image and get the download URL
      const singleImageRef = ref(
        storage,
        `products_images/${productImgThumbnail.name}`
      );
      const singleSnapshot = await uploadBytes(
        singleImageRef,
        productImgThumbnail
      );
      const singleUrl = await getDownloadURL(singleImageRef);
      console.log("Single image URL:", singleUrl);

      // Upload multiple images and get their download URLs
      const multipleImageLinks = await uploadMultipleImages();
      console.log("Multiple image URLs:", multipleImageLinks);

      // Update the product state with the image URLs
      const updatedInputName = {
        ...product,
        thumbnail_img: singleUrl,
        img_collection: multipleImageLinks,
      };
      setProduct(updatedInputName);

      // Now store the updated state to firestore db
      const productRef = collection(db, "Products_info");
      const docRef = await addDoc(productRef, updatedInputName);
      console.log("Document has been added successfully");
      console.log(docRef.id);

      // Reset the form
      setProduct({
        Product_Name: "",
        Brand: "",
        category: "",
        Description: "",
        Price: "",
        keywords: [],
        thumbnail_img: "",
        img_collection: [],
        specifications: {},
      });

      navigate("/admindashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const submitMultipleImage = async () => {
    const uploadPromises = imgCollection.map(async (imgFile) => {
      const uniqueId = Math.random().toString(36).substring(2);
      const imgRef = ref(storage, `products/${uniqueId}`);
      const uploadTask = uploadBytesResumable(imgRef, imgFile);

      await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // You can use this section to display upload progress
          },
          (error) => {
            console.error(error);
            alert("Failed to upload image. Please try again.");
            reject(error);
          },
          () => {
            console.log("Upload completed successfully");
            resolve();
          }
        );
      });

      return getDownloadURL(imgRef);
    });

    const imgUrls = await Promise.all(uploadPromises);

    // Update the product state with the image collection URLs
    setProduct({ ...product, img_collection: imgUrls });
  };

  const uploadMultipleImages = async () => {
    const uploadPromises = uploadImages.map(async (imgFile) => {
      console.log("Uploading file:", imgFile.name); // Debugging line
      const imgRef = ref(storage, `products_images/${imgFile.name}`);
      await uploadBytes(imgRef, imgFile);
      const imgUrl = await getDownloadURL(imgRef);
      console.log("Uploaded file URL:", imgUrl); // Debugging line
      return imgUrl;
    });

    const imgUrls = await Promise.all(uploadPromises);
    return imgUrls;
  };

  const [chips, setChips] = useState([])

  const handleChange = (newChips) => {
    setChips(newChips)
    setProduct({...product, keywords: newChips})
  }


  return (
    <div className="flex justify-center items-center h-screen">
      <form class="w-full max-w-lg m-10 bg-slate-100 px-10 pb-10">
        <h2 className=" text-2xl font-bold my-14 text-center">
          Add New Product
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
              placeholder="ASUS VIVOBOOK"
              value={product.Product_Name}
              onChange={(e) => {
                setProduct({
                  ...product,
                  Product_Name: e.target.value,
                });
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
              placeholder="ASUS"
              value={product.Brand}
              onChange={(e) => {
                setProduct({
                  ...product,
                  Brand: e.target.value,
                });
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
              placeholder="45000"
              value={product.Price}
              onChange={(e) => {
                setProduct({
                  ...product,
                  Price: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full px-3 mb-6 md:mb-0">
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
              placeholder="ASUS vivobook 15 with 256 HDD"
              value={product.Description}
              onChange={(e) => {
                setProduct({
                  ...product,
                  Description: e.target.value,
                });
              }}
            />
          </div>

        </div>

        <div>
        <div class="w-full  px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Keywords
            </label>
            {/* <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="90210"
            /> */}
            <MuiChipsInput value={chips} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-2 mt-5">
          <div class="w-full md:w-1/1 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Thumbnail
            </label>

            {/* <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="ASUS vivobook 15 with 256 HDD"
              value={product.Description}
              onChange={(e) => {
                setProduct({
                  ...product,
                  Description: e.target.value,
                });
              }}
            /> */}

            <div class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-46 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-200 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  name=""
                  accept="image/png,image/jpeg"
                  type="file"
                  class=" hidden"
                  onChange={(e) => {
                    setProductImgThumbnail(e.target.files[0]);
                  }}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-5">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            for="file_input"
          >
            Image Collection
          </label>
          <div>
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
              multiple
              onChange={(e) => {
                setUploadImages(Array.from(e.target.files));
              }}
            />
            <p
              class="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="file_input_help"
            >
              SVG, PNG, JPG or GIF.
            </p>
          </div>
        </div>

        {selectedCategory !== "" && (
          <h3 className="text-xl font-bold my-10">Specifications</h3>
        )}

        {renderInputField()}

        <div className="flex justify-center items-end flex-grow mt-10">
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-auto"
            onClick={SubmitHandler}
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
};
