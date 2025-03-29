import React from "react";
import { useDispatch } from "react-redux";
import { addItems, removeItem } from "../Redux/Slice/Slice";

const Card = (props) => {
  const distpatch = useDispatch();
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

        <div className="flex justify-between items-center space-x-2">
          <button
            onClick={(e) =>
              distpatch(
                addItems({
                  price: props.price,
                  name: props.name,
                  img: props.img,
                  id: props.id,
                })
              )
            }
            className="flex-1 bg-white/20 text-white rounded-lg px-3 py-2 text-xs font-medium transition duration-300 ease-in-out hover:bg-white/30 flex items-center justify-center"
          >
            Add to cart
          </button>

          <button
            onClick={(e) =>
              distpatch(
                removeItem({ id: props.id }),
                console.log("id...", props.id)
              )
            }
          >
            {" "}
            Delete{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
