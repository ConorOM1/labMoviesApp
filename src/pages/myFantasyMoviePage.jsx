import React, { useState, useEffect } from "react";
import MovieForm from "../components/myFantasyMovieForm";
import FantasyMovieList from "../components/myFantasyMovieList";

const MyFantasyMoviePage = () => {
  const [fantasyMovieData, setFantasyMovieData] = useState([]);

  const handleSubmit = (data) => {
    setFantasyMovieData((prevData) => {
      return [...prevData, data];
    });
  };

  const handleDelete = () => {
    localStorage.removeItem("fantasyMovieData");
    setFantasyMovieData([]);
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("fantasyMovieData"));
    if (Array.isArray(storedData)) {
      setFantasyMovieData(storedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("fantasyMovieData", JSON.stringify(fantasyMovieData));
  }, [fantasyMovieData]);

  return (
    <>
      <h1>My Fantasy Movie Page</h1>
      <MovieForm onSubmit={handleSubmit} />
      {fantasyMovieData.length > 0 ? (
        <>
          <FantasyMovieList fantasyMovie={fantasyMovieData} />
          <button onClick={handleDelete}>Delete Movies</button>
        </>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

export default MyFantasyMoviePage;
