import { useContext } from "react";
import UserContext from "../utils.js/UserContext";
import { mealsData } from "../utils.js/mealsData";


const Cuisinelist=({item})=>{
    // console.log("jj",filterlist)
    const {Name,list,amount,setUpdateUser}=useContext(UserContext)
    // console.log(filterlist)
    let count=0;
    for(let i=0;i<Name.length;i++){
        if(Name[i]===item){
            count++;
        }
    }
    let price=0;
    for(let i=0;i<mealsData.length;i++){
        if(mealsData[i].name===item){
            price=mealsData[i].price;
        }
    }

    return(
        <div>
              <div className="cuisinelist">
            <div>
                <h2 className="cuisineItem">{item}</h2>
                <div className="cuisineamount">
                    <h3>{"$"}{price}</h3>
                    <button className="cuisineItrBtn">{"x"}{count}</button>
                </div>
            </div>
            <div className="cartcounterBtn">
                <button className="cartdltBtn" onClick={()=>{
                    {
                       const idx=Name.indexOf(item);
                       if(idx>-1){
                        Name.splice(idx,1);
                        amount.splice(idx,1)
                        setUpdateUser(Math.random())
                       }

                    }
                }}>-</button>
                <button className="cartplusBtn" onClick={()=>{
                    {
                        Name.push(item);

                    
                        setUpdateUser(Math.random())
                    }
                }}>+</button>
            </div>
           </div>
        </div>
    )
}

export default Cuisinelist;