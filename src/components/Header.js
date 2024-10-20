import { useContext, useEffect, useState } from "react"
import Model from "./Model";
import UserContext from "../utils.js/UserContext";


const Header=()=>{
  const [showmodel,setShowModel]=useState(false)
  const {Name}=   useContext(UserContext)
  const [count,setCount]=useState(0);
    useEffect(()=>{
       return setShowModel(true)
    },[])
   
    const showM=()=>{
        console.log("hii")
        return setShowModel(false);
    }

    return(
        <div className="parentHeader">
           {showmodel&&<Model showM={showM}/>}
           <div>
             <h1 className="headername">ReactMeals</h1>
           </div>
           <div cla className="cartParent" onClick={()=>{
            console.log(showmodel)
            setShowModel(true)
           }}>
              <h3 className="cartname">👜Your Cart</h3>
              <button className="cartbtn">{Name.length}</button>
              {/* <h3>{Name}</h3> */}
           </div>
        </div>
    )
}

export default Header;