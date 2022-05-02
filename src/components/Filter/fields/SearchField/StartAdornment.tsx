import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputAdornment } from '@mui/material';

const StartAdornment: React.FC = () => (
  <InputAdornment position="start">
    <IconButton>
      <SearchIcon />
    </IconButton>
  </InputAdornment>
);

export default React.memo(StartAdornment);
