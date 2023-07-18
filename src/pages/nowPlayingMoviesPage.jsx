import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getNowPlayingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from '../components/cardIcons/addToFavourites';
import WriteReview from "../components/cardIcons/writeReview";

const NowPlayingMoviesPage = (props) => {
    const [page, setPage] = useState(1);
    const {  data, error, isLoading, isError }  = useQuery(
        ["popular", { page: page }],
        getNowPlayingMovies
    );
    
    if (isLoading) {
        return <Spinner />;
    }
    
    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const movies = data.results;
    
    return (
        <PageTemplate
        title="Now Playing Movies"
        movies={movies}
        action={(movie) => {
            return (
            <>
                <AddToFavoritesIcon movie={movie} />
                <WriteReview movie={movie} />
            </>
            );
        }}
        page={page}
        setPage={setPage}
        />
    );
    };
    export default NowPlayingMoviesPage;