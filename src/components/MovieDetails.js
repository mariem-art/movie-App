import React from 'react'

const MovieDetails = (props) => {
    console.log(props)
    const movie = props.movies.find(el=>el.id== props.match.params.id  )
    console.log(movie);
    return (
        <div>
            <h3 style={{color:"white"}} >  {movie.desc}  </h3>

              <iframe src= {movie.trailer}   /> 

        </div>
    )
}

export default MovieDetails