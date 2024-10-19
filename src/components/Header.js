import { useEffect, useState } from "react"
import Model from "./Model";


const Header=()=>{
  const [showmodel,setShowModel]=useState(false)

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
              <button className="cartbtn">0</button>
           </div>
        </div>
    )
}

export default Header;