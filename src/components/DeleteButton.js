/* eslint-disable react/prop-types */
import React from 'react';

function DeleteButton({ id, onDelete }) {
  return <button type="button" onClick={() => onDelete(id)}>Delete</button>;
}

export default DeleteButton;
