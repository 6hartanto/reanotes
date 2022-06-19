/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from '@mui/material';
import ArchiveIcon from '@mui/icons-material/Archive';

function ArchiveButton({ id, onArchive }) {
  return <Button variant="outlined" color="primary" startIcon={<ArchiveIcon />} onClick={() => onArchive(id)}>Archive</Button>;
}

export default ArchiveButton;
