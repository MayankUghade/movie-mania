import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div>
        <div className="movie">
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movie.Title}
          />
          <div className="cardWrapper">
          <p id='year'>{movie.Year} </p>
            <div className="smallCard">
              <p id='type'>{movie.Type}</p>
              <p id='title'>{movie.Title}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MovieCard;