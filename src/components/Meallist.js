import { useContext, useState } from "react";
import UserContext from "../utils.js/UserContext";



const Meallist=(props)=>{
    // console.log(props)
      const {Name,list,amount,setUpdateUser}=  useContext(UserContext);
    //  const data={};
    //  const [orderMenu,setOrderMenu]=useState({
    //   Name:Name,
    //   list:list,
    //   amount:amount
    //  });
    // console.log(orderMenu)
    let count =0;
    for(let i=0;i<Name.length;i++){
      if(Name[i]===props.mealsData.name){
        count++;
      }
    }
    console.log(Name)
    return(
       <div className="mealsP">
         <div className="meallistparent">
          <h2 className="mlist">{props.mealsData.name}</h2>
          <p className="mlist">{props.mealsData.cuisine}</p>
          <h2 className="mlist">{"$"}{props.mealsData.price}</h2>
          
        </div>
        <div>
            <div className="amountcounter">
            <h2 className="amounttag">Amount</h2>
            <button className="counterBtn">{count}</button>
            </div>
            <button className="addBtn" onClick={()=>{
              {Name.push(props.mealsData.name),list.push(props.mealsData.cuisine),amount.push(props.mealsData.price)}
              // setUpdateUser(props.mealsData.name,props.mealsData.cuisine,props.mealsData.price)
              setUpdateUser(Math.random())
            }}>+Add</button>
        </div>
       </div>
    )
}

export default Meallist;