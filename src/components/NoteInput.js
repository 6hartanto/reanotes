/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Header from '@mui/material/Typography';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, body } = this.state;
    // validate title and body
    if (title && body) {
      // eslint-disable-next-line react/prop-types
      this.props.onSubmit({ title, body });
      this.setState({ title: '', body: '' });
    } else {
      // eslint-disable-next-line no-alert
      alert('Please fill in all the available fields');
    }
  }

  render() {
    return (
      <Stack
        component="form"
        display="flex"
        alignItems="center"
        padding={{ xs: '48px 48px', sm: '48px 200px', md: '48px 400px' }}
      >
        <Header variant="h5" component="h5">
          Create Note
        </Header>

        <TextField
          id="title"
          name="title"
          label="Note Title"
          variant="filled"
          margin="normal"
          required
          fullWidth
          value={this.state.title}
          onChange={this.handleChange}
        />
        <TextField
          id="body"
          name="body"
          label="Note Content"
          margin="normal"
          variant="filled"
          required
          fullWidth
          multiline
          rows="4"
          value={this.state.body}
          onChange={this.handleChange}
        />
        <Button variant="contained" startIcon={<AddIcon />} onClick={this.handleSubmit}>Add Note</Button>
      </Stack>
    );
  }
}

export default NoteInput;