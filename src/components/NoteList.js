/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Container from '@mui/material/Container';
import Header from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NoteBody from './NoteBody';

// eslint-disable-next-line react/prop-types
function NoteList({
  // eslint-disable-next-line react/prop-types
  notes, onDelete, onArchive, onActivate,
}) {
  // eslint-disable-next-line react/prop-types
  if (notes.length === 0) {
    return (
      <Container>
        <Header variant="h5">No notes found</Header>
      </Container>
    );
  }
  return (
    <Container>
      <Header variant="h5" component="h5">
        Active Notes
      </Header>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        sx={{
          maxWidth: '100%',
        }}
      >
        {
          // eslint-disable-next-line react/prop-types
          notes.map((note) => (
            // display if note is not archived
            !note.archived && (
              <NoteBody
                key={note.id}
                note={note}
                onDelete={onDelete}
                onArchive={onArchive}
                {...note}
              />
            )
          ))
        }
      </Box>
      <Header variant="h5" component="h5">
        Archived Notes
      </Header>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        sx={{
          maxWidth: '100%',
        }}
      >
        {
          // eslint-disable-next-line react/prop-types
          notes.map((note) => (
            // display if note is archived
            note.archived && (
              <NoteBody
                key={note.id}
                note={note}
                onDelete={onDelete}
                onActivate={onActivate}
                {...note}
              />
            )
          ))
        }
      </Box>
    </Container>
  );
}

export default NoteList;
