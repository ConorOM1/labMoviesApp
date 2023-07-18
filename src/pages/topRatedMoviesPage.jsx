import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getTopRatedMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import PlaylistAddIcon from "../components/cardIcons/addToMustWatch";

const TopRatedMoviesPage = () => {
    const { data, error, isLoading, isError } = useQuery("toprated", getTopRatedMovies);
  
    if (isLoading) {
      return <Spinner />;
    }
    if (isError) {
      return <h1>{error.message}</h1>;
    }
  
    const movies = data ? data.results : [];
  
    return (
      <PageTemplate
        title="Top Rated Movies"
        movies={movies}
        action={(movie) => {
          return <PlaylistAddIcon movie={movie} />
        }}
      />
    );
  };
export default TopRatedMoviesPage;