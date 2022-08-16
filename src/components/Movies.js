import React from "react";
import { movies } from "../data";



function Movies() {
  
  function handleMovies() {
    return (
      movies.map(movie => {
        return (
          <div key={movie.title}>
            <h1>{movie.title}</h1>
            <p>{movie.time} min.</p>
            <ul>
              {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
            </ul>
          </div>
        )
      })
    )
  }
  
  
  return (
    <div>
      <h1>Movies Page</h1>
      {handleMovies()}
    </div>
  )
}

export default Movies;
