/* eslint-disable react/prop-types */
import React from 'react';

function NoteBody({ title, body }) {
  return (
    <div className="note-body">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default NoteBody;
