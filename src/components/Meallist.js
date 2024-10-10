


const Meallist=(props)=>{
    console.log(props)
    return(
        <div className="meallistparent">
          <h2 className="mlist">{props.mealsData.name}</h2>
          <p className="mlist">{props.mealsData.cuisine}</p>
          <h2 className="mlist">{props.mealsData.price}</h2>
          
        </div>
    )
}

export default Meallist;