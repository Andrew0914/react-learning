import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error("Something went wrong 🐥");
      }
      const moviesData = await response.json();
      const films = moviesData.results.map((movieData) => ({
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        release: movieData.release_date,
      }));
      setMovies(films);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  let content = <p>No movies found</p>;
  if (error) content = <p>{error}</p>;
  else if (isLoading) content = <p>Loading...☕️</p>;
  else if (movies.length > 0) content = <MoviesList movies={movies} />;

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
