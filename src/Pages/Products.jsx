import React from "react";
import products from "../Data/Redux_data.json"
import Cards from  "../Components/Cards"
import { useSelector } from "react-redux";

const Product = (props) => {
  const items = useSelector(state=>state)
  console.log("items...",items);
  
  return (
    <div className="grid grid-cols-4 gap-4">
     
    {products.map((el) => <Cards price={el.price} name={el.product_name} img={el.image}/>) }
      
    </div>
  );
};

export default Product;
