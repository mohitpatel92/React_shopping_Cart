import React from "react";
import { useDispatch } from "react-redux";
import {
  removeItem,
  incrementQuntiry,
  decrementQuntity,
} from "../Redux/Slice/Slice";
import { useSelector } from "react-redux";
import { getItemSelector } from "../Redux/Slice/Slice";

const Card = (props) => {
  const distpatch = useDispatch();
  const items = useSelector(getItemSelector);
  console.log("Cart Items...", items.cartInit);

  const item = items.cartInit.find((el) => el.id === props.id);
  const quantity = item ? item.quantity : 0;
  //const plus = item ? item.quantity += 1 : item.quantity

  return (
    /* From Uiverse.io by Go3P */
    <div className="card w-80 h-[400px] bg-[#07182E] rounded-2xl overflow-hidden relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,183,255,0.5)]">
      <div className="card-content  relative z-10">
        <div className="p-3">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="p-8 rounded-t-lg"
                src={props.img}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {props.name}
                </h5>
              </a>

              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${props.price}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly items-center space-x-2">
          <div className="flex justify-evenly items-center gap-2">
            <button
              className="!w-[30px]"
              onClick={() => distpatch(incrementQuntiry({ id: props.id }))}
            >
              +
            </button>
            <button className="!w-[60px]">Items</button>
            <button
              className="!w-[30px]"
              onClick={() => distpatch(decrementQuntity({ id: props.id }))}
            >
              -
            </button>
          </div>

          <button
            onClick={(e) =>
              distpatch(
                removeItem({ id: props.id }),                
              )
            }
          >
            Delete
          </button>
        </div>

        <div className="flex justify-evenly items-center mt-2">
          <label> Qunatity : {quantity} </label>
        </div>
      </div>
    </div>
  );
};

export default Card;


