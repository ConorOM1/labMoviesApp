import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const FantasyMovieList = ({ fantasyMovie }) => {
  return (
    <>
      <Typography variant="h5" component="h3">
        Fantasy Movie Details
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Overview</TableCell>
              <TableCell>Genres</TableCell>
              <TableCell>Release Date</TableCell>
              <TableCell>Runtime</TableCell>
              <TableCell>Production Company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fantasyMovie.map(movie => (
              <TableRow key={movie.title}>
                <TableCell align="left">{movie.title}</TableCell>
                <TableCell align="left">{movie.overview}</TableCell>
                <TableCell align="left">{movie.genres}</TableCell>
                <TableCell align="left">{movie.release_date}</TableCell>
                <TableCell align="left">{movie.runtime}</TableCell>
                <TableCell align="left">{movie.production_companies}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default FantasyMovieList;
