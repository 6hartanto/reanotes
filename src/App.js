/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { getInitialData } from './utils/index';
import Navbar from './components/layouts/Navbar';
import NoteList from './components/NoteList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  render() {
    return (
      <div>
        <Navbar />
        <NoteList notes={this.state.notes} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
