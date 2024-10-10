import Meallist from "./Meallist";
import { mealsData } from "../utils.js/mealsData";


const Body=()=>{
    return(
        <div >
            <div className="res-summary">
                <h1 className="res-summary-heading">Delicious Food , Delivered To You</h1>
                <h3 className="res-summary-heading">Choose your favrite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</h3>
                <h3 className="res-summary-heading">All our meals are cooked with high-quaility ingrediants , just-in-time and of course by experience chefs! </h3>
            </div>
            <div className="meallist">
            {mealsData.map((item)=>{
               return <Meallist mealsData={item}/>
            })}
            </div>
        </div>
    )
}

export default Body;