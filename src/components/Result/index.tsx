import React from 'react';
import { Box, Tab, Tabs } from '@mui/material';

import TVs from './components/TVs';
import Movies from './components/Movies';

const Result: React.FC = () => {
  const [selected, setSelected] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, value: number) => setSelected(value);

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={selected} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Movie" />
          <Tab label="TV" />
        </Tabs>
      </Box>
      {selected === 0 && <Movies />}
      {selected === 1 && <TVs />}
    </>
  );
};

export default React.memo(Result);
