


const Header=()=>{
    return(
        <div className="parentHeader">
           <div>
             <h1 className="headername">ReactMeals</h1>
           </div>
           <div className="cartParent">
              <h3 className="cartname">👜Your Cart</h3>
              <button className="cartbtn">0</button>
           </div>
        </div>
    )
}

export default Header;