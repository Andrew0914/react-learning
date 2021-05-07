import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/films");
    const moviesData = await response.json();
    const films = moviesData.results.map((movieData) => ({
      id: movieData.episode_id,
      title: movieData.title,
      openingText: movieData.opening_crawl,
      release: movieData.release_date,
    }));
    setMovies(films);
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {!isLoading && movies.length <= 0 && <p>No movies found</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
