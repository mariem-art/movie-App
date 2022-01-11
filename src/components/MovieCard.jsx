import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'

const MovieCard = ({film}) => {
    return (
        <Link to={`/movie/${film.id}`} >

        <div className="movie-card" >
            <StarRating  rating={film.rating}  />
            <img src={film.image} alt="" />
            <h3> {film.name}  </h3>
            <p>  {film.date} </p>
        </div>
        </Link>
    )
}

export default MovieCard