import React from 'react';
import Grid from '@mui/material/Grid';

import Filter from './components/Filter';
import Result from './components/Result';
import { AppContextProvider } from './Context';

const App: React.FC = () => (
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
);

export default React.memo(App);
