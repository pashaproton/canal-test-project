import React from 'react';
import Masonry from 'react-masonry-css';
import InfiniteScroll from 'react-infinite-scroll-component';

import { CircularProgress, Grid, styled, Typography } from '@mui/material'

import useParams from '../../../hooks/useParams';
import useFetchDataCallback from '../../../hooks/useFetchDataCallback';
import { Movie } from '../../../types';
import { useAppContext } from '../../../Context';
import { ResponseMovie } from '../../../api/types';
import { convertResponseMovieToMovie } from '../../../helpers';

import MovieCard from './MovieCard';

const StyledMasonry = styled(Masonry)`
  width: auto;
  display: flex;
  margin-left: -30px;

  & .my-masonry-grid_column {
    padding-left: 30px;
    background-clip: padding-box;
    
    & > div {
      margin-bottom: 30px;
    }
  }
`;

const Movies: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const { search, sortBy } = useAppContext();
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [totalPages, setTotalPages] = React.useState(0);

  const params = useParams(page);
  const fetchData = useFetchDataCallback<ResponseMovie>('Movie');

  const processFetchData = React.useCallback(
    async () => {
      const result = await fetchData(params);

      setMovies(m => [...m, ...result.results.map(r => convertResponseMovieToMovie(r))]);
      setLoading(false);
      setTotalPages(result.total_pages);
    },
    [params, fetchData]
  );

  React.useEffect(
    () => {
      setPage(1);
      setMovies([]);
      setTotalPages(0);
    },
    [search, sortBy]
  );

  React.useEffect(
    () => {
      void processFetchData();
    },
    [page, processFetchData]
  );

  if (loading) {
    return (
      <Grid container justifyContent="center">
        <CircularProgress size={100} />
      </Grid>
    );
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={() => setPage(p => p + 1)}
      hasMore={page < totalPages}
      loader={<h4>Loading...</h4>}
      endMessage={
        <Grid style={{ textAlign: 'center' }}>
          <Typography>End</Typography>
        </Grid>
      }
    >
      <StyledMasonry
        className="my-masonry-grid"
        breakpointCols={3}
        columnClassName="my-masonry-grid_column"
      >
          {movies.map((item) => (
            <Grid item key={item.id}>
              <MovieCard data={item} />
            </Grid>
          ))}
      </StyledMasonry>
    </InfiniteScroll>
  );
};

export default React.memo(Movies);
