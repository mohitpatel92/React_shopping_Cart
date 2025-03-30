import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import { getItemSelector } from "../Redux/Slice/Slice";
import Cards from "../Components/RemoveCards";

const Cart = () => {
  
  const items = useSelector(getItemSelector);
  //console.log("cart...", items);
  const total = items.cartInit.reduce((a, b) => a + b.price * b.quantity, 0);
  
  return (
    <div>
      <h3>Item :{items.cartInit.length}</h3>
      <h3>Total Bill : ${total.toFixed(2)}</h3>
      <div className="grid grid-cols-4 gap-4 mt-4">

      {items.cartInit.map((el,i) => <Cards price={el.price} name={el.name} img={el.img} id={el.id}  key={`${el.id}-${i}`}   />)}
    </div>

    </div>
  );
};

export default Cart;

//if quantity is increse so cart item and total bill also increse
