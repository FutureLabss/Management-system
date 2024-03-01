import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularColor() {
  return (
    <Stack sx={{ color: 'grey.500', mt:"2rem" }} justifyContent="center" alignItems="center">
      <CircularProgress color="inherit" />
    </Stack>
  );
}