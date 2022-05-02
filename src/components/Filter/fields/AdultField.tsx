import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useAppContext } from '../../../Context';

const AdultField: React.FC = () => {
  const { adult, setAdult } = useAppContext();

  return (
    <FormControlLabel
      label="Adult"
      control={<Checkbox defaultChecked value={adult} onClick={() => setAdult(a => !a)} />}
    />
  );
};

export default AdultField;
