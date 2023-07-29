import React from 'react';
import { Button, TextField, Grid, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const MovieForm = ({ onSubmit }) => {
  const { register, handleSubmit, control } = useForm();

  const onSubmitWrapper = data => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitWrapper)}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField {...register('title')} label="Title" required fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField {...register('overview')} label="Overview" required fullWidth />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="genres-label">Genres</InputLabel>
            <Controller
              name="genres"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select labelId="genres-label" label="Genres" {...field}>
                  <MenuItem value="Action">Action</MenuItem>
                  <MenuItem value="Adventure">Adventure</MenuItem>
                  <MenuItem value="Animation">Animation</MenuItem>
                  <MenuItem value="Comedy">Comedy</MenuItem>
                  <MenuItem value="Crime">Crime</MenuItem>
                  <MenuItem value="Documentary">Documentary</MenuItem>
                  <MenuItem value="Drama">Drama</MenuItem>
                  <MenuItem value="Family">Family</MenuItem>
                  <MenuItem value="Fantasy">Fantasy</MenuItem>
                  <MenuItem value="History">History</MenuItem>
                  <MenuItem value="Horror">Horror</MenuItem>
                  <MenuItem value="Music">Music</MenuItem>
                  <MenuItem value="Mystery">Mystery</MenuItem>
                  <MenuItem value="Romance">Romance</MenuItem>
                  <MenuItem value="Science Fiction">Science Fiction</MenuItem>
                  <MenuItem value="Thriller">Thriller</MenuItem>
                  <MenuItem value="War">War</MenuItem>
                  <MenuItem value="Western">Western</MenuItem>
                </Select>
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField {...register('release_date')} label="Release Date" type="date" InputLabelProps={{ shrink: true }} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField {...register('runtime')} label="Runtime" required fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField {...register('production_companies')} label="Production Companies" required fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default MovieForm;
