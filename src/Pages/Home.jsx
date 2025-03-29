import React from "react";
import {useFirebase} from  "../Context/FitebaseAuth"

const Home =() =>{
    const {user} = useFirebase()
    return (
        <div>
            <h2 className="text-7xl">Welcome to {user?.displayName}</h2>
            
        </div>
    )
}

export default Home