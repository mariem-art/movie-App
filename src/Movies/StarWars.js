import React from 'react'
import react,{usestate,useEffect } from 'react';
import { Link } from 'react-router-dom';


 const StarWars = () => {
    return (
        <div >
            <h1 style={{color:"white"}}  >Our Movie App</h1>
            <Link to="/" >
                <button>Go Home</button>
            </Link>
            
        </div>
    )
}


export default StarWars