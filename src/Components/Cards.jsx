import React from "react";
import {useDispatch} from "react-redux" 
import {addItems} from  "../Redux/Slice/Slice"

const Card = (props) => {
  const distpatch = useDispatch();
  return (
    <div className="p-3">
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="p-8 rounded-t-lg" src={props.img} alt="product image" />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {props.name}
            </h5>
          </a>

          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">
              ${props.price}
            </span>

            <button onClick={(e) => distpatch(addItems({price:props.price,name:props.name,img:props.img}))} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
