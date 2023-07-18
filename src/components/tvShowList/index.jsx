import React from "react";
import TVShowCard from "../tvShowCard";
import Grid from "@mui/material/Grid";

const TVShowList = ( {tvshows, action }) => {
  let tvshowCards = tvshows.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TVShowCard key={m.id} tvshow={m} action={action} />
    </Grid>
  ));
  return tvshowCards;
};

export default TVShowList;