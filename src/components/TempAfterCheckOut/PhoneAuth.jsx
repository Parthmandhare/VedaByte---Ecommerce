import {
  RecaptchaVerifier,
  onAuthStateChanged,
  signInWithPhoneNumber,
 } from "firebase/auth";
 import React, { useEffect, useState } from "react";
 import PhoneInput from "react-phone-input-2";
 import "react-phone-input-2/lib/style.css";
 import { auth, db } from "../../Auth/Firebase";
 import { useNavigate } from "react-router-dom";
 import { doc, updateDoc } from "firebase/firestore";
 
 export const PhoneAuth = () => {
  const navigate = useNavigate();
 
  const [inputNo, setInputNo] = useState("");
  const [user, setUser] = useState("");
  const [inputOTP, setInputOTP] = useState("");
  const [userId, setUserId] = useState(null);
  const [confirmation, setConfirmation] = useState(null); // New state for confirmation
 
  useEffect(() => {
     onAuthStateChanged(auth, (user) => {
       if (user) {
         setUserId(user.uid);
         setUser(user); // Keep the original user state
       }
     });
  }, [userId]);
 
  const sendOTP = async (e) => {
     e.preventDefault();
 
     try {
       const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
 
       const confirmationResult = await signInWithPhoneNumber(
         auth,
         inputNo,
         recaptcha
       );
 
       setConfirmation(confirmationResult); // Set the confirmation object
     } catch (error) {
       console.log(error);
     }
  };

  const verifyOTP = async () => {
    try {
       if (!confirmation) {
         console.log("No confirmation object available");
         return;
       }
   
       const data = await confirmation.confirm(inputOTP);
       console.log(data.user.phoneNumber);
   
       // Update the user's document in Firestore to include the phone number
       const userDocRef = doc(db, "users", userId); // Assuming 'userId' is the user's ID in Firestore
       const userDocUpdate = {
         phoneNumber: data.user.phoneNumber, // Update the phoneNumber field in the user's document
       };
   
       await updateDoc(userDocRef, userDocUpdate)
         .then(() => {
           console.log("Phone number is added to the user's document in Firestore.");
           navigate("/AfterCheckOut/Payment");
         })
         .catch((error) => {
           console.log("Error updating the user's document:", error);
         });
    } catch (error) {
       console.log("Error verifying OTP:", error);
    }
   };
   
 
  // const verifyOTP = async () => {
  //    try {
  //      if (!confirmation) {
  //        console.log("No confirmation object available");
  //        return;
  //      }
 
  //      const data = await confirmation.confirm(inputOTP);
  //      console.log(data.user.phoneNumber);
 
  //      // Add phoneNumber in firebase
  //      const dataRef = doc(db, "users", userId);
 
  //      const dataInput = {
  //        PhoneNumber: data.user.phoneNumber,
  //      };
 
  //      await updateDoc(dataRef, dataInput)
  //        .then((docRef) => {
  //          console.log("Phone number is added to doc!");
  //          navigate("/AfterCheckOut/Payment");
  //        })
  //        .catch((error) => {
  //          console.log(error);
  //        });
  //    } catch (error) {
  //      console.log(error);
  //    }
  // };
 
  return (
     <>
       <h1>Hello Bhai!</h1>
       
       <PhoneInput
         country={"in"}
         value={inputNo}
         onChange={(inputNo) => setInputNo("+" + inputNo)}
       />
 
       <button onClick={sendOTP}>Send OTP</button>
 
       <div id="recaptcha"></div>
 
       <input
         type="number"
         name=""
         id=""
         placeholder="Enter OTP"
         value={inputOTP}
         onChange={(e) => setInputOTP(e.target.value)}
       />
 
       <button onClick={verifyOTP}>Verify OTP</button>
     </>
  );
 };
 