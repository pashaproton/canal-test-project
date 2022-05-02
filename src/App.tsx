import React from 'react';
import { QueryParamProvider } from 'use-query-params';

import Grid from '@mui/material/Grid';

import Filter from './components/Filter';
import Result from './components/Result';
import { AppContextProvider } from './Context';

const App: React.FC = () => (
  <QueryParamProvider>
    <AppContextProvider>
      <Grid container>
        <Grid container justifyContent="center">
          <Grid item xs={6}>
            <Filter />
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={6}>
            <Result />
          </Grid>
        </Grid>
      </Grid>
    </AppContextProvider>
  </QueryParamProvider>
);

export default React.memo(App);
