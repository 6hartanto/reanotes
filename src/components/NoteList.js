/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import NoteBody from './NoteBody';

// eslint-disable-next-line react/prop-types
function NoteList({ notes }) {
  return (
    <div className="note-list">
      {
      // eslint-disable-next-line react/prop-types
      notes.map((note) => (
        <NoteBody key={note.id} {...note} />
      ))
      }
    </div>
  );
}

export default NoteList;
