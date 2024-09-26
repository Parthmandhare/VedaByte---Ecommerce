/* eslint-disable react/prop-types */
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router"
import { auth, db } from "../Auth/Firebase";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";

export const ProtectedRouteForAdmin = ({children}) => {

    const [role, setrole] = useState("")

    onAuthStateChanged(auth, (user) => {
        if(user) {
          console.log("user is logged in");
          console.log(user); // user object
        //   setid(user.uid)
          getData(user.uid)
        } else {
          alert("user is not logged in");
        }
    }); 

    const getData = async (id) => {
        if (!id) {
          console.log("User ID is not set.");
          return;
        }
    
        const docRef = doc(db, "Products", id);
        const docData = await getDoc(docRef);
        console.log(docData);

        setrole(docData.data().role);

      };
    

    if (role === "admin" || role === "Admin") {
      return children
    }
    else {
      return <Navigate to={'/SignIn'}/>
    }
}