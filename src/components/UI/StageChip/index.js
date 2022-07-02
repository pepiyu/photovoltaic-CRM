import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';
import { blue } from '@mui/material/colors';

export default function IconChips({text}) {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<FaceIcon />} label={text} color="primary" />
    </Stack>
  );
}