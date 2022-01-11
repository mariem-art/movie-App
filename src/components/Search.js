import React from 'react'
import StarRating from './StarRating'
import {Link} from "react-router-dom";
const Search = ({text,handleChange,rating,handleRating}) => {
    return (
        <div className='header-container' >
            <Link style={{textDecoration:"none",textDecorationColor:"none"}} to='/'>

            <h1>Our Movie App</h1>
            </Link>
            <div className="search-container">
                <form>
                    <input type="text" value={text} onChange={handleChange} placeholder="enter a movie"  />

                </form>
                <StarRating  rating={rating} handleRating={handleRating} />
            </div>
        </div>
    )
}

export default Search