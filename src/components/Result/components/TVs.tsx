import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { CircularProgress, Grid, Typography } from '@mui/material';

import useParams from '../../../hooks/useParams';
import useFetchDataCallback from '../../../hooks/useFetchDataCallback';
import { Movie } from '../../../types';
import { ResponseTV } from '../../../api/types';
import { useAppContext } from '../../../Context';
import { convertResponseTVToMovie } from '../../../helpers';

import MovieCard from './MovieCard';

const TVs: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const { search, sortBy } = useAppContext();
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [totalPages, setTotalPages] = React.useState(0);

  const params = useParams(page);
  const fetchData = useFetchDataCallback<ResponseTV>('TV');

  const processFetchData = React.useCallback(
    async () => {
      const result = await fetchData(params);

      setMovies(m => [...m, ...result.results.map(r => convertResponseTVToMovie(r))]);
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
      <Grid container spacing={3}>
        {movies.map((item) => (
          <Grid item key={item.id} xs={4}>
            <MovieCard data={item} />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};

export default React.memo(TVs);
