/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Container from '@mui/material/Container';
import Header from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NoteBody from './NoteBody';

// eslint-disable-next-line react/prop-types
function NoteList({ notes }) {
  return (
    <Container>
      <Header variant="h5" component="h5">
        Catatan Aktif
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
            <NoteBody key={note.id} {...note} />
          ))
        }
      </Box>
    </Container>
  );
}

export default NoteList;
