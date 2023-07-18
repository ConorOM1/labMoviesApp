import React, { useContext } from "react";
import PageTemplate from "../components/templateTVShowListPage";
import { TVShowsContext } from "../contexts/tvshowsContext";
import { useQueries } from "react-query";
import { getTVShows } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";



const FavouriteTVShowsPage = (props) => {
  const { favourites: tvshowsIds } = useContext(TVShowsContext);

  // Create an array of queries and run them in parallel.
  const favouriteTVShowQueries = useQueries(
    tvshowIds.map((tvshowId) => {
      return {
        queryKey: ["tvshow", { id: tvshowId }],
        queryFn: getTVShows,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteTVShowQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = favouriteTVShowQueries.map((q) => q.data);


  return (
    <PageTemplate
    title="Favourite TV Shows"
    tvshows={tvshows}
    action={(tvshow) => {
      return (
        <>
          <RemoveFromFavourites tvshow={tvshow} />
          <WriteReview tvshow={tvshow} />
        </>
      );
    }}
  />

  );
};

export default FavouriteTVShowsPage;
