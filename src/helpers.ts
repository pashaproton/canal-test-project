import { Movie } from './types';
import { ResponseMovie, ResponseTV } from './api/types'

export const getImageUrl = (path: string, width = 300) => `https://image.tmdb.org/t/p/w${width}${path}`;

export const convertResponseTVToMovie = (responseTV: ResponseTV): Movie => ({
  id: responseTV.id,
  date: responseTV.first_air_date,
  title: responseTV.name,
  imagePath: responseTV.poster_path ?? responseTV.backdrop_path,
  voteCount: responseTV.vote_count,
  popularity: responseTV.popularity,
  voteAverage: responseTV.vote_average,
  description: responseTV.overview
});

export const convertResponseMovieToMovie = (responseMovie: ResponseMovie): Movie => ({
  id: responseMovie.id,
  date: responseMovie.release_date,
  title: responseMovie.title,
  imagePath: responseMovie.poster_path ?? responseMovie.backdrop_path,
  voteCount: responseMovie.vote_count,
  popularity: responseMovie.popularity,
  voteAverage: responseMovie.vote_average,
  description: responseMovie.overview
});
