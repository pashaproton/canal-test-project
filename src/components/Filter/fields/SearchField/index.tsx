import React from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { FormControl, Input } from '@mui/material';

import useSearchParam from '../../../../hooks/useSearchParam';
import { useAppContext } from '../../../../Context';

import StartAdornment from './StartAdornment';

const SearchField: React.FC = () => {
  const { setSearch } = useAppContext()
  const [q, setQuery] = useSearchParam();
  const [value, setValue] = React.useState(q);

  const handleChangeDebounced = useDebouncedCallback(setSearch, 500);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setValue(e.currentTarget.value);
    setQuery(e.currentTarget.value);
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
