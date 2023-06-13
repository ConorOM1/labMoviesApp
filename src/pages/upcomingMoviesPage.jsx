import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMoviesPage = (props) => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    getUpcomingMovies().then(movies => {
      const updatedMovies = movies.map(movie => {
        if (favourites.find(fav => fav.id === movie.id)) {
          return { ...movie, favourite: true }
        }
        return movie;
      });
      setMovies(updatedMovies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToFavourites = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favourite: true } : m
    );
    setMovies(updatedMovies);
    localStorage.setItem('favourites', JSON.stringify(updatedMovies.filter(m => m.favourite)));
  };

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      selectFavourite={addToFavourites}
    />
  );
};

export default UpcomingMoviesPage;
