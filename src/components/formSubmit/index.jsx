import React, { useState } from "react";
import MovieForm from "../components/myFantasyMovieForm";
import FantasyMovieList from "../components/myFantasyMovieList";

const FormSubmit = () => {
  const [fantasyMovie, setFantasyMovie] = useState(null);

  const handleSubmit = (data) => {
    setFantasyMovie(data);
  };

  return (
    <div>
      <h1>My Fantasy Movie Page</h1>
      <MovieForm onSubmit={handleSubmit} />
      <FantasyMovieList fantasyMovie={fantasyMovie} />
    </div>
  );
};

export default FormSubmit;
