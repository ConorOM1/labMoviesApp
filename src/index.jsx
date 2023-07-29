import AddMovieReviewPage from './pages/addMovieReviewPage';
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import TVShowDetailsPage from  "./pages/tvShowDetailsPage.jsx"
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import TVShowsPage from './pages/tvShowsPage';
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import TVShowsContextProvider from './contexts/tvshowsContext';
import FantasyMoviePage from './pages/myFantasyMoviePage.jsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SiteHeader />
          <TVShowsContextProvider>
            <MoviesContextProvider>
              <Routes>
                <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
                <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
                <Route path="/movies/:id" element={<MoviePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/reviews/:id" element={<MovieReviewPage/>} />
                <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
                <Route path="/movies/nowplaying" element={<NowPlayingMoviesPage />} />
                <Route path="/movies/toprated" element={<TopRatedMoviesPage />} />
                <Route path="/tvshows" element={<TVShowsPage />} />
                <Route path="/tvshow/:id" element={<TVShowDetailsPage />} />
                <Route path="/tvreviews/:id" element={<TVShowsPage/>} />
                <Route path="/fantasy" element={<FantasyMoviePage/>} />
              </Routes>
            </MoviesContextProvider>
          </TVShowsContextProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
