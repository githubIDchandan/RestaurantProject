import React, { useContext, useEffect, useState } from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import UserContext from "./utils.js/UserContext";

const AppLayout=()=>{


const {Name,list,amount}=useContext(UserContext)
const [updateUser,setUpdateUser]=useState( {
    Name:Name
});

console.log("hii",updateUser)

    return(
      <UserContext.Provider value={{Name:Name,list:list,amount:amount,setUpdateUser}}>
        <div>
            <Header/>
            <Body/>
        </div>
        </UserContext.Provider>
    
   
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);