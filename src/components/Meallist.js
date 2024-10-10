


const Meallist=(props)=>{
    console.log(props)
    return(
       <div className="mealsP">
         <div className="meallistparent">
          <h2 className="mlist">{props.mealsData.name}</h2>
          <p className="mlist">{props.mealsData.cuisine}</p>
          <h2 className="mlist">{props.mealsData.price}</h2>
          
        </div>
        <div>
            <div className="amountcounter">
            <h2 className="amounttag">Amount</h2>
            <button className="counterBtn">1</button>
            </div>
            <button className="addBtn">+Add</button>
        </div>
       </div>
    )
}

export default Meallist;