import React, { useContext } from "react";
import MyContext from "../../Context/MyContext";
import { deleteDoc, doc } from "@firebase/firestore";
import { db } from "../../Auth/Firebase";

export const UserDetail = () => {
  const context = useContext(MyContext);

  const{getAllUser} = context;

  console.log(getAllUser);

  const HandleDelete = (id) => {
    
    const deleteRef  = doc(db, "users", id);

    deleteDoc(deleteRef).then(() => {
      console.log("Entire Document has been deleted successfully.")
      alert("User is Deleted!")
  })
  .catch(error => {
      console.log(error);
  })
  }

  return (
    <div>
      <div>
        <div className="py-5 flex justify-between items-center">
          {/* text  */}
          <h1 className=" text-xl text-pink-300 font-bold">All User</h1>
        </div>
        {/* table  */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
            <tbody>
              <tr>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  S.No.
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
                >
                  Role
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
                >
                  Action
                </th>
              </tr>

              {
                getAllUser.map((item, index) => {
                  const{id, Full_Name, email, role} = item   

                  return (
                    <tr className="text-pink-300">
                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 "> {index+1} </td>
                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                  {Full_Name}
                </td>
                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer ">{role}</td>
                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer ">{email}</td>
                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-red-500 cursor-pointer "><button onClick={(e) => {
                  e.preventDefault();
                  HandleDelete(id);
                }}>Delete</button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
