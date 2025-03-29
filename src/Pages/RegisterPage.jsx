import React, { useState,useEffect } from "react";
import { useFirebase } from "../Context/FitebaseAuth";
import {useNavigate} from "react-router-dom"

const RegisterPage = () => {
  const firebase = useFirebase();
  console.log("firebase...", firebase);
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() =>{
      if(firebase.isLoggedIn){
          navigate("/")
      }
    },[firebase,navigate])

  const handlerSubmit = async (e) => {
    e.preventDefault();
    console.log("goin to sign up");
    const result = await firebase.createUser(email, password);
    console.log("done sign up...",result);
  };

  return (
    <div>
   <h1 className="text-5xl text-center mb-4">Register Page</h1>
        <div className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 ">
          <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
              <h5>Register with</h5>
            </div>
           
            <div className="flex-auto p-6">
              <form role="form text-left " onSubmit={handlerSubmit}>
                {/* <div className="mb-4">
          <input aria-describedby="email-addon"  aria-label="Name" placeholder="Name" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="text"/>
        </div> */}
                <div className="mb-4">
                  <input
                    aria-describedby="email-addon"
                    aria-label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                    className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                    type="email"
                  />
                </div>
                <div className="mb-4">
                  <input
                    aria-describedby="password-addon"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    aria-label="Password"
                    placeholder="Password"
                    className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                    type="password"
                  />
                </div>

                <div className="text-center">
                  <button
                    className="inline-block w-full px-6 py-1  mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
                    type="submit"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default RegisterPage;


