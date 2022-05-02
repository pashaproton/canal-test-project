import React from 'react';
import { FormGroup } from '@mui/material';

import AdultField from './fields/AdultField'
import SearchField from './fields/SearchField';
import SortByField from './fields/SortByField';

const Filter: React.FC = () => (
  <>
    <SearchField />
    <FormGroup sx={{ flexDirection: 'row' }}>
      <AdultField />
      <SortByField />
    </FormGroup>
  </>
);

export default Filter;