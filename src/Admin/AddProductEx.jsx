import React, { useState } from "react";
import { db, storage } from "../Auth/Firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuid } from "uuid";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";

export const AddProductEx = () => {
  const [inputImage, setInputImage] = useState(null);
  const [inputName, setInputName] = useState({
    First_Name: "",
    Last_Name: "",
    Link: "",
    img_collection: []
  });

  const [inputMultipleImage, setInputMultipleImage] = useState([]);

  const [multipleImageLinks, setMultipleImageLinks] = useState([]);


  const [uploadImages, setUploadImages] = useState();

  console.log(uploadImages);

  const SubmitHandler = async (e) => {
    e.preventDefault();
    console.log("Hello Bhau");
   
    if (inputImage === null) {
       alert("Please select an image");
       return;
    }
   
    try {
       // Upload the single image and get the download URL
       const singleImageRef = ref(storage, `products_images/${inputImage.name}`);
       const singleSnapshot = await uploadBytes(singleImageRef, inputImage);
       const singleUrl = await getDownloadURL(singleImageRef);
       console.log("Single image URL:", singleUrl);
   
       // Upload multiple images and get their download URLs
       const multipleImageLinks = await uploadMultipleImages();
       console.log("Multiple image URLs:", multipleImageLinks);
   
       // Update the product state with the image URLs
       const updatedInputName = { ...inputName, Link: singleUrl, img_collection: multipleImageLinks };
       setInputName(updatedInputName);
   
       // Now store the updated state to firestore db
       const productRef = collection(db, "Products_info");
       const docRef = await addDoc(productRef, updatedInputName);
       console.log("Document has been added successfully");
       console.log(docRef.id);
   
    } catch (error) {
       alert(error.message);
       console.error("Error uploading images:", error);
    }
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
   
   
   

  // const SubmitHandler = async (e) => {
  //   e.preventDefault();
  //   console.log("Hello Bhau");
   
  //   if (inputImage === null) {
  //      alert("Please select an image");
  //      return;
  //   }
   
  //   const imageRef = ref(storage, `products_images/${inputImage.name}`);
   
  //   try {
  //      // Upload the image and get the download URL
  //      const snapshot = await uploadBytes(imageRef, inputImage);
  //      const url = await getDownloadURL(snapshot.ref);
   
  //      // Create a local copy of the state with the updated Link
  //      const updatedInputName = { ...inputName, Link: url };
   
  //      // Update the state with the image URL
  //      setInputName(updatedInputName);

  //     //  Uploading Multiple Images

  //     const uploadPromises = inputMultipleImage.map(async (imgFile) => {
  //       const imgRef = ref(storage, `products_images/${imgFile.name}`);
  //       const uploadTask = uploadBytes(imgRef, imgFile);
  
  //       const snapshot = await uploadTask;
  //       const imgUrl = await getDownloadURL(imgRef);
  //       console.log("Multiple image URL:", imgUrl); // Debugging line
  //       return imgUrl;
  //     });
  
  //     const imgUrls = await Promise.all(uploadPromises);
  
  //     // Update the product state with the image collection URLs
  //     setInputName({ ...inputName, img_collection: imgUrls });
  
   
  //      // Now store the updated state to firestore db
  //      const productRef = collection(db, "Products_info");
  //      const docRef = await addDoc(productRef, updatedInputName);
  //      console.log("Document has been added successfully");
  //      console.log(docRef.id);
  //   } catch (error) {
  //      alert(error.message);
  //   }
  //  };

   const handleMultipleImage = (e) => {
    console.log(e.target.files);
    setInputMultipleImage(oldArray => [...oldArray, e.target.files]);
    const filesArray = Array.from(e.target.files);
    console.log(filesArray);    
   }
   
   
  return (
    <>
      {/* image input */}

      <input
        type="file"
        name=""
        id=""
        accept="image/png,image/jpeg"
        onChange={(e) => {
          setInputImage(e.target.files[0]);
        }}
      />

      {/* multiple images input */}

      <input type="file" name="" accept="image/png,image/jpeg" id="" multiple onChange={(e) => {
 setUploadImages(Array.from(e.target.files))}}/>

      {/* input text */}

      <input
        type="text"
        placeholder="Your First Name"
        value={inputName.First_Name}
        onChange={(e) => {
          setInputName({ ...inputName, First_Name: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Your Last Name"
        value={inputName.Last_Name}
        onChange={(e) => {
          setInputName({ ...inputName, Last_Name: e.target.value });
        }}
      />

      <button onClick={SubmitHandler}>Add Info</button>
    </>
  );
};
