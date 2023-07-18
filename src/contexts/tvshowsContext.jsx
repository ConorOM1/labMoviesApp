import React, { useState } from "react";

export const TVShowsContext = React.createContext(null);

const TVShowsContextProvider = (props) => {
    const [favourites, setFavourites] = useState([]);
    const [mustWatch, setMustWatch] = useState([]);
    const [myReviews, setMyReviews] = useState( {} )

  const addToFavouritesTV = (id) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(tvshow.id)) {
      updatedFavourites.push(tvshow.id);
    }
    setFavourites(updatedFavourites);
  };

  const removeFromFavouritesTV = (tvshow) => {
    setFavourites(favourites.filter((mId) => mId !== tvshow.id));
  };

  const addReview = (tvshow, review) => {
    setMyReviews({ ...myReviews, [tvshow.id]: review });
  }; 


  return (
    <TVShowsContext.Provider
      value={{
        favourites,
        addToFavouritesTV,
        removeFromFavouritesTV,
        addReview,
      }}
    >
      {props.children}
    </TVShowsContext.Provider>
  );
};

export default TVShowsContextProvider;