/* eslint-disable react/prop-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import ActivateButton from './ActivateButton';

function NoteBody({
  title, body, id, archived, onDelete, onArchive, onActivate,
}) {
  return (
    <Card
      sx={{ maxWidth: 345, margin: '8px' }}
      variant="outlined"
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <DeleteButton id={id} onDelete={onDelete} />
        {/* if note is not archived, display ArchiveButton, else display ActivateButton */}
        {!archived
          ? <ArchiveButton id={id} onArchive={onArchive} />
          : <ActivateButton id={id} onActivate={onActivate} />}
      </CardActions>
    </Card>
  );
}

export default NoteBody;
