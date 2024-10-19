import { useEffect } from "react";
import { createPortal } from "react-dom";


const Model=({showM})=>{
    useEffect(()=>{
        document.body.style.overflowY="hidden";
        document.body.style.overflowX="hidden";
        return ()=>{
            document.body.style.overflowY="scroll";
            document.body.style.overflowX="scroll"; 
        }
    })
    return createPortal(
        <div>
        <div className="modelWrapper"></div>
        <div className="modelparent">
            <div className="cuisinelist"><h3>Sushi</h3></div>
            <div className="amount">
                <h1 className="amounttext">Total Amount</h1>
                <h1 className="amountvalue">35.62</h1>
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