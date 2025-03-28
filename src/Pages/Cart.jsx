import React from "react";
import { useSelector } from "react-redux";
//import {getItemSelector} from "../Redux/Slice/Slice"

const Cart =() =>{
    const items = useSelector(state => state)
    //const items = useSelector(getItemSelector)
    //console.log("items...",items);
    
    return(
        <div>
            <h3>Item :</h3>
            <h3>Total Bill : </h3>
        </div>
    )

}

export default Cart