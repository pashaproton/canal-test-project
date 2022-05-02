import * as helpers from '../helpers';
import { Movie } from '../types'

describe('helpers', () => {
  describe('getImageUrl', () => {
    it('should return computed image url with default width', () => {
      expect(helpers.getImageUrl('/some-path')).toMatch('https://image.tmdb.org/t/p/w300/some-path');
    });

    it('should return computed image url with 600 width', () => {
      expect(helpers.getImageUrl('/some-path', 600)).toMatch('https://image.tmdb.org/t/p/w600/some-path');
    });
  });

  describe('convertResponseTVToMovie', () => {
    it('should convert response TV to movie', () => {
      expect(helpers.convertResponseTVToMovie({
        id: 123,
        name: 'awesome TV series',
        overview: 'some overview',
        genre_ids: [1, 2, 3],
        popularity: 5.55,
        vote_count: 123,
        poster_path: undefined,
        vote_average: 5.55,
        backdrop_path: undefined,
        original_name: 'not awesome TV series',
        first_air_date: '05-05-2022',
        origin_country: ['US', 'UK'],
        original_language: 'en'
      })).toMatchObject<Movie>({
        id: 123,
        date: '05-05-2022',
        title: 'awesome TV series',
        imagePath: undefined,
        voteCount: 123,
        popularity: 5.55,
        description: 'some overview',
        voteAverage: 5.55
      });
    });
  });

  describe('convertResponseMovieToMovie(', () => {
    it('should convert response TV to movie', () => {
      expect(helpers.convertResponseMovieToMovie({
        id: 123,
        adult: false,
        title: 'awesome movie',
        video: true,
        overview: 'some overview',
        genre_ids: [1, 2, 3],
        popularity: 5.55,
        vote_count: 123,
        poster_path: undefined,
        release_date: '05-05-2022',
        vote_average: 5.55,
        backdrop_path: undefined,
        original_title: 'not awesome movie',
        original_language: 'en',
      })).toMatchObject<Movie>({
        id: 123,
        date: '05-05-2022',
        title: 'awesome movie',
        imagePath: undefined,
        voteCount: 123,
        popularity: 5.55,
        description: 'some overview',
        voteAverage: 5.55
      });
    });
  });
});
