import React from "react";
import TVShowPageTemplate from "../components/templateTVShowListPage";
import { getTVShows } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import PlaylistAddIcon from "../components/cardIcons/addToMustWatch";

const TVShowsPage = () => {
    const { data, error, isLoading, isError } = useQuery("tvshows", getTVShows);

    if (isLoading) {
      return <Spinner />;
    }
    if (isError) {
      return <h1>{error.message}</h1>;
    }

    const tvshows = data ? data.results : [];

    return (
      <TVShowPageTemplate
        title="TV Shows"
        tvshows={tvshows}
        action={(tvshow) => {
          return <PlaylistAddIcon show={tvshow} />
        }}
      />
    );
  };
export default TVShowsPage;