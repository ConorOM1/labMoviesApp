import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'


const styles = {
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    display: "block",
    margin: 2,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
};

export default function FilterMoviesCard(props) {
  const { data, error, isLoading, isError } = useQuery("genres", getGenres);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const genres = data.genres;
  if (genres[0].name !== "All") {
    genres.unshift({ id: "0", name: "All" });
  }

  const handleUserImput = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleUserImput(e, "title", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleUserImput(e, "genre", e.target.value);
  };

  const handleAverageVoteChange = (e) => {
    handleUserImput(e, "average_vote", e.target.value);
  };

  return (
    <>
    <Card sx={styles.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <FilterAltIcon fontSize="large" />
          Filter the movies.
        </Typography>
        <TextField
      sx={styles.formControl}
      id="filled-search"
      label="Search field"
      type="search"
      value={props.titleFilter}
      variant="filled"
      onChange={handleTextChange}
    />

        <FormControl sx={styles.formControl}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
      labelId="genre-label"
      id="genre-select"
      value={props.genreFilter}
      onChange={handleGenreChange}
    >

            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>


        <FormControl variant="filled" sx={styles.formControl}>
            <InputLabel id="average-vote-label">Average Vote</InputLabel>
            <Select
              labelId="average-vote-label"
              id="average vote"
              value={props.averageVoteFilter}
              onChange={handleAverageVoteChange}
            >
              <MenuItem value="0">All</MenuItem>
              <MenuItem value="1"> 1+</MenuItem>
              <MenuItem value="2"> 2+</MenuItem>
              <MenuItem value="3"> 3+</MenuItem>
              <MenuItem value="4"> 4+</MenuItem>
              <MenuItem value="5"> 5+</MenuItem>
              <MenuItem value="6"> 6+</MenuItem>
              <MenuItem value="7"> 7+</MenuItem>
              <MenuItem value="8"> 8+</MenuItem>
              <MenuItem value="9"> 9+</MenuItem>
            </Select>
          </FormControl>     
      </CardContent>      
    </Card>
    <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SortIcon fontSize="large" />
            Sort the movies.
          </Typography>
        </CardContent>
      </Card>
      </>
  );
}
