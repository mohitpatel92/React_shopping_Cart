import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import { getItemSelector } from "../Redux/Slice/Slice";

const Cart = () => {
  
  const items = useSelector(getItemSelector);
  console.log("cart...", items);
  const total = items.cartInit.reduce((a, b) => a + b.price, 0);

  return (
    <div>
      <h3>Item :{items.cartInit.length}</h3>
      <h3>Total Bill : ${total}</h3>
    </div>
  );
};

export default Cart;
