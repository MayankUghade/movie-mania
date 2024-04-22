import React, { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./movieCard";

const API_KEY = "e8f1ac26";
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchterm, setSearchterm] = useState("");

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      const data = await response.json();
      setMovies(data.Search);
      console.log(data.search);
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  };

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  return (
    <div>
      <div>
        <h1>Movie-Mania</h1>
      </div>
      <div className="Main-search">
        <div className="search">
          <input
            value={searchterm}
            onChange={(e) => setSearchterm(e.target.value)}
            placeholder="Search for movies"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchterm)}
          />
        </div>
        {/* The main container in that displays movies*/}
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h1>No movies found</h1>
        </div>
      )}
    </div>
  );
};

export default App;
