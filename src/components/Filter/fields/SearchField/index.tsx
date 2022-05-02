import React from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { FormControl, Input } from '@mui/material';
import { useAppContext } from '../../../../Context';
import StartAdornment from './StartAdornment';

const SearchField: React.FC = () => {
  const { setSearch } = useAppContext()
  const [value, setValue] = React.useState('');

  const handleChangeDebounced = useDebouncedCallback(setSearch, 500);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setValue(e.currentTarget.value);
    handleChangeDebounced(e.currentTarget.value);
  };

  return (
    <FormControl fullWidth>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Search"
        startAdornment={<StartAdornment />}
      />
    </FormControl>
  );
};

export default SearchField;