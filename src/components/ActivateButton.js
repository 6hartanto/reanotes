/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from '@mui/material';
import UnarchiveIcon from '@mui/icons-material/Unarchive';

function ActivateButton({ id, onActivate }) {
  return <Button variant="outlined" color="primary" startIcon={<UnarchiveIcon />} onClick={() => onActivate(id)}>Activate</Button>;
}

export default ActivateButton;
