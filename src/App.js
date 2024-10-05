// src/App.js
import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import MovieDetail from "./components/MovieDetail";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const API_URL = 'http://www.omdbapi.com/';
  const API_KEY = 'a0340c0d';

  const searchMovies = async (query, year) => {
    if (query) {
      try {
        const response = await axios.get(`${API_URL}`, {
          params: {
            apikey: API_KEY,
            s: query,
            y: year,
          },
        });

        if (response.data.Response === "True") {
          setMovies(response.data.Search);
        } else {
          setMovies([]);
        }

        setSelectedMovie(null);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
  };

  const handleMovieClick = async (movie) => {
    try {
      const response = await axios.get(`${API_URL}`, {
        params: {
          apikey: API_KEY,
          i: movie.imdbID,
        },
      });

      if (response.data.Response === "True") {
        setSelectedMovie(response.data);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        setSelectedMovie(null);
      }
    } catch (error) {
      console.error("Error fetching movie details: ", error);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <h1 className="my-4 text-center">Movie/TV Show Search</h1>
      <button className="btn btn-secondary mb-4" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <SearchBar onSearch={searchMovies} />

      <div className="row">
        <div className="col-md-8">
          <div className="row">
            {movies.length > 0 &&
              movies.map((movie) => (
                <div key={movie.imdbID} className="col-md-4" onClick={() => handleMovieClick(movie)}>
                  <MovieCard movie={movie} darkMode={darkMode} />
                </div>
              ))}
          </div>
        </div>
        <div className="col-md-4">
          <MovieDetail movie={selectedMovie} darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default App;
