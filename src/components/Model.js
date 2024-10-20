import { useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import UserContext from "../utils.js/UserContext";
import Cuisinelist from "./Cuisinelist";


const Model=({showM})=>{

   const {Name,list,amount}= useContext(UserContext)

    useEffect(()=>{
        document.body.style.overflowY="hidden";
        document.body.style.overflowX="hidden";
        return ()=>{
            document.body.style.overflowY="scroll";
            document.body.style.overflowX="scroll"; 
        }
    })
    let sum=0;
    console.log(amount)
      for(let i=0;i<amount.length;i++){
       sum+= amount[i]
      }
      const filterlist=Name.filter((item,index)=>{
        return Name.indexOf(item)===index;

      })
    return createPortal(
        <div>
        <div className="modelWrapper"></div>
        <div className="modelparent">
                {filterlist.map((item)=>{
                    return <Cuisinelist item={item}/>
                })}
            <div className="amount">
                <h1 className="amounttext">Total Amount To Pay</h1>
                <h1 className="amountvalue">{"$"}{sum}</h1>
            </div>
            <div className="orderBtn">
                <button className="cbtn" onClick={showM}
                >close</button>
                <button className="obtn">order</button>
            </div>
        </div>
        </div>,
        document.getElementById("modelportal")
    )
}

export default Model;