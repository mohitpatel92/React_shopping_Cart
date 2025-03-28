import React from "react";
import { useSelector } from "react-redux";
import { getItemSelector } from "../Redux/Slice/Slice";

const Nav = () => {
  const items = useSelector(getItemSelector);
  // const items = useSelector(state => state)
  //console.log("item...", items);

  const total = items.cartInit.reduce((a, b) => a + b.price, 0);


  return (
    <div className="navbar bg-neutral text-neutral-content rounded-2xl mb-5">
      <div className="flex-1 p-4">
        <ul className="flex flex-col  p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md: dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a
              href="/"
              className="block py-2 text-white px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="block py-2 text-white px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/product"
              className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="/cart"
              className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Cart
            </a>
          </li>
        </ul>
      </div>
      <div className="flex  w-28 justify-between">
        <div className="dropdown dropdown-end">
          <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>

              <span className="badge badge-sm indicator-item">
                {items.cartInit.length}
              </span>
            </div>
          </div>
          <div
            tabIndex="0"
            className="card card-compact bg-neutral !h-[200px] text-neutral-content  dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body ">
              <span className="text-lg font-bold">
                {items.cartInit.length} Items
              </span>
              {/* <span className="text-info">Subtotal: $500</span> */}
              <span className="text-info">Subtotal: ${total.toFixed(2)}</span>
              <div className="  w-full">
                <a href="/cart">
                  {" "}
                  <button className="">View Cart</button>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex="0"
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://i.pinimg.com/736x/35/11/87/351187cd779b1f8891cbef9ee89957e0.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-neutral text-neutral-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;



