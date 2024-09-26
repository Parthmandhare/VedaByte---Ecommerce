/* eslint-disable react/prop-types */
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Auth/Firebase";
import MyContext from "./MyContext";
// import MyContext from './myContext';
// import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
// import { fireDB } from "../firebase/FirebaseConfig";

function myState({ children }) {
  // Loading State
  const [loading, setLoading] = useState(false);

  // User State
  const [getAllProduct, setGetAllProduct] = useState([]);
  const [getAllUser, setGetAllUser] = useState([]);

  const[userID, setUserID] = useState(null);

  /**========================================================================
   *========================================================================**/

  const getAllProductFunction = async () => {
    const querySnapshot = await getDocs(collection(db, "Products_info"));

    let productArray = [];
    
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());

      productArray.push({ ...doc.data(), id: doc.id });

    });
    setGetAllProduct(productArray);
  };

  const getAllUserFunction = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));

    let UserArray = [];
    
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());

      UserArray.push({ ...doc.data(), id: doc.id });

    });
    setGetAllUser(UserArray);
  };

  useEffect(() => {
    getAllProductFunction();
    getAllUserFunction();
  }, []);
  return (
    <MyContext.Provider
      value={{
        getAllProduct,
        getAllUser,
        userID,
        setUserID
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default myState;
