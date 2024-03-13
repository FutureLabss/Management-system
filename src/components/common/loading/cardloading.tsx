import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function CardLoading() {
  return (
    <Stack spacing={1} direction="row" justifyContent="space-between">
      <Stack direction="row" gap="1rem">
      <Skeleton variant="rectangular" width={310} height={80} />
      </Stack>
      <Skeleton variant="rounded" width={910} height={80} />
    </Stack>
  );
}