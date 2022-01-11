import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
    return (
        <div className="movie-list" >
            {
                movies.map((el,i)=>
                    <MovieCard  film={el} key={i} />
                    )
            }
        </div>
    )
}

export default MovieList