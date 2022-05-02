import React from 'react';
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'

import { SORT_BY } from '../../../types';
import { useAppContext } from '../../../Context';

const SortByField: React.FC = () => {
  const { sortBy, setSortBy } = useAppContext();

  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as SORT_BY);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <Select
        value={sortBy}
        onChange={handleChange}
      >
        {(Object.keys(SORT_BY) as (keyof typeof SORT_BY)[]).map(value => (
          <MenuItem key={value} value={SORT_BY[value]}>{SORT_BY[value]}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortByField;
