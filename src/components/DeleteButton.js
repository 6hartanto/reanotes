/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteButton({ id, onDelete }) {
  return <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={() => onDelete(id)}>Delete</Button>;
}

export default DeleteButton;
