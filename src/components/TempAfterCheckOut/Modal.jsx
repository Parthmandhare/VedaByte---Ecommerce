import React, { useEffect, useState } from "react";
import { auth, db } from "../../Auth/Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Modal = () => {

  const navigate = useNavigate();

  const [address, setAddress] = useState({
    Full_Name: "",
    Area_Building_Name: "",
    HouseNo: "",
    PinCode: "",
    City: "",
    phoneNo: ""
  });


  const [userId, setUserId] = useState(null);

  useEffect(() => {   
    onAuthStateChanged(auth, (user) => {
       if (user) {
         setUserId(user.uid);
       }
    });
   }, [userId]);
   
   
   const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(address);
   
    const docRef = doc(db, "users", userId);

    const data = {
       addresses: address,
    };
   
    await updateDoc(docRef, data)
       .then(() => {
         console.log("A New Document Field has been added to an existing document");
         // Optionally, clear the form or show a success message
        //  setAddress({
        //    Full_Name: "",
        //    Area_Building_Name: "",
        //    HouseNo: "",
        //    PinCode: "",
        //    City: "",
        //  });
         navigate("/AfterCheckOut/Payment");
       })
       .catch((error) => {
         console.log(error);
       });
   };
   

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <div className="m-auto">
          <div>
            <button
              type="button"
              className="relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-900 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#FFFFFF"
              >
                <g>
                  <rect fill="none" height="24" width="24"></rect>
                </g>
                <g>
                  <g>
                    <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"></path>
                  </g>
                </g>
              </svg>
              <span className="pl-2 mx-1">Add New Address</span>
            </button>
            <div className="mt-5 bg-white rounded-lg shadow">
              {/* Form content */}
              <form>
                {/* Sender section */}
                <div className="px-5 pb-5">
                  <input
                    placeholder="Enter Phone Number"
                    className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    value={address.phoneNo}
                    onChange={(e) => {
                      setAddress({ ...address, phoneNo: e.target.value });
                    }}
                  />

                  <input
                    placeholder="Enter Full Name"
                    className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    value={address.Full_Name}
                    onChange={(e) => {
                      setAddress({ ...address, Full_Name: e.target.value });
                    }}
                  />

                  <input
                    placeholder="Your Area or Building Name"
                    className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    value={address.Area_Building_Name}
                    onChange={(e) => {
                      setAddress({
                        ...address,
                        Area_Building_Name: e.target.value,
                      });
                    }}
                  />

                  <input
                    placeholder="House/Flat/Block Number ex: House no. 12"
                    className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    value={address.HouseNo}
                    onChange={(e) => {
                      setAddress({ ...address, HouseNo: e.target.value });
                    }}
                  />

                  <input
                    placeholder="Pincode ex: 440032"
                    className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    value={address.PinCode}
                    onChange={(e) => {
                      setAddress({ ...address, PinCode: e.target.value });
                    }}
                  />

                  <input
                    placeholder="City ex: Nagpur"
                    className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    value={address.City}
                    onChange={(e) => {
                      setAddress({ ...address, City: e.target.value });
                    }}
                  />

                  {/* Add more inputs as needed */}
                </div>
                {/* Receiver section */}
                <div className="px-5 pb-5">
                  {/* Similar structure as Sender section */}
                </div>
                {/* Buttons */}
                <div className="flex flex-row-reverse p-3">
                  <div className="flex-initial pl-3">
                    <button
                      type="submit"
                      className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900 transition duration-300 transform active:scale-95 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#FFFFFF"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path
                          d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                          opacity=".3"
                        ></path>
                        <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                      </svg>
                      <span className="pl-2 mx-1">
                        <button onClick={handleSubmit}>Continue</button>
                      </span>
                    </button>
                  </div>
                  <div className="flex-initial">
                    <button
                      type="button"
                      className="flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md hover:bg-red-200 hover:fill-current hover:text-red-600 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M8 9h8v10H8z" opacity=".3"></path>
                        <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path>
                      </svg>
                      <span className="pl-2 mx-1">Delete</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* {prevAddress.map((address, index) => {
            return(
                <>
                    <div key={index}>
                        {address.Full_Name}
                    </div>
                </>
            )
          })} */}
        </div>
      </div>
    </>
  );
};
