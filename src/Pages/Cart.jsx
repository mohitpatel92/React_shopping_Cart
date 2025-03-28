import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import { getItemSelector } from "../Redux/Slice/Slice";
import Cards from "../Components/RemoveCards";

const Cart = () => {
  
  const items = useSelector(getItemSelector);
  console.log("cart...", items);
  const total = items.cartInit.reduce((a, b) => a + b.price, 0);

  return (
    <div>
      <h3>Item :{items.cartInit.length}</h3>
      <h3>Total Bill : ${total.toFixed(2)}</h3>
      <div className="grid grid-cols-4 gap-4">

      {items.cartInit.map((el) => <Cards price={el.price} name={el.name} img={el.img} id={el.id}  key={el.id}  />)}
    </div>

    </div>
  );
};

export default Cart;

