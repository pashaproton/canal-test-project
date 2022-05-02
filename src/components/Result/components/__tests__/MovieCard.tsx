import React from 'react';
import { render, screen } from '@testing-library/react';
import { Movie } from '../../../../types';
import MovieCard from '../MovieCard';

describe('MovieCard', () => {
  const data: Movie = {
    id: 123,
    date: '05-05-2022',
    title: 'awesome movie',
    popularity: 9999,
    imagePath: '/path-to-image',
    voteCount: 777,
    voteAverage: 9.9,
    description: 'some overview'
  };

  it('should render the component with data', () => {
    render(<MovieCard data={data} />)
    expect(screen.getByTestId('movie-card-date')).toHaveTextContent('05-05-2022');
    expect(screen.getByTestId('movie-card-image'))
      .toHaveAttribute('src', 'https://image.tmdb.org/t/p/w300/path-to-image');
    expect(screen.getByTestId('movie-card-rate')).toHaveTextContent('9.9 (777)');
    expect(screen.getByTestId('movie-card-title')).toHaveTextContent('awesome movie');
    expect(screen.getByTestId('movie-card-popularity')).toHaveTextContent('9999');
    expect(screen.getByTestId('movie-card-description')).toHaveTextContent('some overview');
  });

  it('should render the component with data and compere it to snapshot', () => {
    const result = render(<MovieCard data={data} />);
    expect(result).toMatchSnapshot();
  });
});