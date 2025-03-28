import React, { useEffect } from "react";
import products from "../Data/Redux_data.json";
import Cards from "../Components/Cards";

const Product = (props) => {

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((el) => (
        <Cards price={el.price} name={el.product_name} img={el.image} id={el.id} />
      ))}
    </div>
  );
};

export default Product;
